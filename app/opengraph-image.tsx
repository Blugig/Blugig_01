import { ogSize, renderOg } from "@/lib/og";

export const alt = "Avantra Technologies — Mitti experts";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: "Mitti experts at Avantra", title: "Turn everyday checks into better operations." });
}
