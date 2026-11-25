"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import { ParticlePoster } from "@/components/three/ParticlePoster";
import { detectTier, type RenderTier } from "@/lib/device";
import type { ShapeName } from "@/lib/three/shapes";
import { cn } from "@/lib/utils";
import type { ParticleCanvasProps } from "@/components/three/ParticleCanvas";

/** three + R3F stay in their own chunk. Import only after idle or a tap, never via next/dynamic prefetch. */

type Props = {
  shape: ShapeName;
  morphTo?: ShapeName | null;
  /** Near colour (mixed by depth into colorB). */
  colorA?: string;
  colorB?: string;
  sparkle?: string;
  blending?: "additive" | "normal";
  /** Multiplier on tier particle counts (high ≈ 8000, low ≈ 2500). */
  density?: number;
  pointSize?: number;
  opacity?: number;
  cameraZ?: number;
  spin?: number;
  interactive?: boolean;
  /** Cursor push multiplier; small canvases need more to show it. */
  mouseStrength?: number;
  className?: string;
  posterClassName?: string;
};

/**
 * CanvasGate (BUILD_SPEC §6.1): picks a tier on the client, mounts after first
 * paint (idle callback) once the container is near the viewport, pauses when
 * off-screen, and fades the canvas in over a static poster (no layout shift).
 */
export function ParticleField({
  shape,
  morphTo = null,
  colorA = "#0a80fb",
  colorB = "#29b9fa",
  sparkle = "#29b9fa",
  blending = "normal",
  density = 1,
  pointSize = 3.2,
  opacity = 1,
  cameraZ = 3.4,
  spin = 0.06,
  interactive = true,
  mouseStrength = 1,
  className,
  posterClassName,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [tier, setTier] = useState<RenderTier | null>(null);
  const [near, setNear] = useState(false);
  const [ready, setReady] = useState(false);
  const [Canvas, setCanvas] = useState<ComponentType<ParticleCanvasProps> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let decided = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const run = () => setTier(detectTier());
    const schedule = () => {
      if ("requestIdleCallback" in window) idleId = window.requestIdleCallback(run, { timeout: 2000 });
      else timeoutId = setTimeout(run, 1200);
    };
    const onInteract = () => {
      if (!decided) {
        decided = true;
        run();
      }
    };
    window.addEventListener("pointerdown", onInteract, { passive: true });
    window.addEventListener("keydown", onInteract);
    // Never during page load: the canvas waits for the load event, then an idle moment.
    const start = () => (document.readyState === "complete" ? schedule() : window.addEventListener("load", schedule, { once: true }));

    const io = new IntersectionObserver(
      ([entry]) => {
        setNear(entry.isIntersecting);
        if (entry.isIntersecting && !decided) {
          decided = true;
          start();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.removeEventListener("load", schedule);
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  const live = tier === "low" || tier === "high";
  const count = Math.round((tier === "high" ? 8000 : 2500) * density);

  useEffect(() => {
    if (!live || Canvas) return;
    let cancel = false;
    void import("@/components/three/ParticleCanvas").then((mod) => {
      if (!cancel) setCanvas(() => mod.default);
    });
    return () => {
      cancel = true;
    };
  }, [live, Canvas]);

  return (
    <div ref={ref} aria-hidden className={cn("relative", className)}>
      <ParticlePoster
        shape={shape}
        color={colorA}
        className={cn("transition-opacity duration-700", ready ? "opacity-0" : "opacity-100", posterClassName)}
      />
      {live && Canvas ? (
        <div className="absolute inset-0 transition-opacity duration-[800ms]" style={{ opacity: ready ? 1 : 0 }}>
          <Canvas
            shape={shape}
            morphTo={morphTo}
            colorA={colorA}
            colorB={colorB}
            sparkle={sparkle}
            blending={blending}
            count={count}
            dpr={tier === "high" ? [1, 1.75] : [1, 1.25]}
            interactive={interactive && tier === "high"}
            mouseStrength={mouseStrength}
            active={near}
            pointSize={pointSize}
            opacity={opacity}
            cameraZ={cameraZ}
            spin={spin}
            onReady={() => setReady(true)}
          />
        </div>
      ) : null}
    </div>
  );
}
