# TODO — owner inputs

Everything below is either hidden until supplied or marked as draft on the site.

## Contact details — `content/site.ts`
Each value is rendered only when set (footer, contact page, JSON-LD).
- [x] `email`, `phone`, `address`
- [x] `social.linkedin`
- [ ] Confirm reply-time promise `replyTime` ("1 business day") — used on /contact, in the form success message and the /contact meta description.
- [x] Production domain — `PRODUCTION_URL` (www.avantratechnologies.com) in `content/site.ts`, not overridable by env (a `NEXT_PUBLIC_SITE_URL` pointing at Railway broke canonicals on the live site, 2 Nov 2026).
- [ ] **Delete `NEXT_PUBLIC_SITE_URL` from the Railway service's Variables** (the code ignores it now).
- [x] City spelled "Bengaluru" everywhere (was "Bangalore" on the site, "Bengaluru" in schema). Use the same spelling on LinkedIn and partner listings.

## SEO — owner actions (see the audit's action plan)
- [ ] Deploy, then check the Railway host redirects: `curl -sI https://avantra-tech-production.up.railway.app/about` → `308` to www. Keep the Railway domain attached.
- [ ] Google Search Console: add a **Domain** property for `avantratechnologies.com` (DNS TXT record in GoDaddy; never delete it), submit `sitemap.xml`, request indexing for /, /services, /solutions, /integrations.
- [ ] Bing Webmaster Tools: import from Search Console. After each deploy, `npm run indexnow` pings Bing/IndexNow (key file `public/266ad790aefc0f0477960e0ac1ed1c94.txt`).
- [x] Avantra LinkedIn company page is https://www.linkedin.com/company/144056120/ (`site.social.linkedin`, footer icon, and Organization `sameAs` via `site.profiles`).
- [ ] Partner directories: ask the Mitti partner manager for a listing (integrations.safetyculture.com) and Workato how service partners are listed. When live, add the URLs to `site.profiles` and link the hero/About badges to them.
- [ ] Google Business Profile only if the Bengaluru office has signage, staff during business hours and receives visitors (no virtual offices).
- [ ] Ask SSPM to link to www.avantratechnologies.com from its website.
- [ ] Proof and people: 2–3 case studies with real numbers (client permission, or anonymised), a team section on About (names, roles, photos, Mitti/Workato certifications, LinkedIn), one citable fact per service page. Never invent numbers or testimonials.
- [ ] Deepen Solutions, Integrations, How we work and About (~800 words of real detail each).
- [ ] Blog: publish 2–3 more posts in /admin with **named authors** (role + LinkedIn). The /blog index is indexable while at least one post is live; posts get the sitemap, RSS, structured data and an IndexNow ping on publish without any code change.

## Blog admin (/admin) — setup on Railway
- [ ] Add a **Postgres** database to the Railway project, and in the web service's Variables add `DATABASE_URL` → reference the database's `DATABASE_URL`. The `blog_posts` table and the example post are created on first request. Until then the admin can't save (the container disk is wiped on deploy) and the site shows the example post.
- [ ] Set `ADMIN_PASSWORD` (long and random) in the web service's Variables; optionally `ADMIN_SESSION_SECRET`. Then sign in at https://www.avantratechnologies.com/admin.
- [ ] Review the example post "SafetyCulture is now Mitti" (content/blogSeed.ts seeds it; edit it in /admin): confirm the August 2026 date and the IT Brief source link, and put a named author on it.
- [ ] Images in posts: link images already in `public/` or on another site (`![alt text](https://…)`); there is no upload yet.
- [ ] HSTS: after a week without problems, raise `max-age` in `next.config.ts` from 86400 to 31536000.
- [ ] Optional: Cloudflare in front of Railway for edge caching, only after Search Console confirms the canonical fix.

## Brand
- [ ] Vector logo (SVG), if available — the site uses the supplied PNGs (`public/brand/avantra-logo*.png`); the wordmark, one-colour navy and mark/favicon files are derived from them.
- [ ] Client logos (with permission) — the marquee under the statement shows Mitti services/use cases until then (`content/home.ts` → `platforms`).

## Content to supply (hidden until set)
- [x] Booking link — https://calendly.com/avantratechnologies/30min is fixed in `content/site.ts`. The site no longer reads `NEXT_PUBLIC_CALENDLY_URL`. Delete that variable on Railway if it is still set (the old `avantratechnologies-info` event is dead).

## Content to confirm
- [ ] Integration systems list — `content/home.ts` → `integrations.groups` (example systems per category on Home `#integrations`).
- [ ] FAQ "Is Mitti the same as SafetyCulture?" wording against Mitti brand guidance — `content/home.ts` → `homeFaqs`.
- [ ] Home FAQ answers — `content/home.ts` (`homeFaqs`), written from the services/approach copy.
- [ ] Workato partner badge — confirm usage per Workato's partner brand guidelines (`public/brand/workato-silver-partner.png`, footer + About).
- [ ] "Mitti (by SafetyCulture)" naming and any partner-tier wording before publishing.
- [ ] Testimonials — `content/testimonials.ts` (section hidden while empty).
- [ ] Solution cards link to `/contact?topic=…`; add solution detail pages later if wanted.

## Legal
- [ ] Counsel review of the privacy policy (`app/privacy/page.tsx`) and terms (`app/terms/page.tsx`) — full text written 23 Oct 2026 against how the site actually handles data; confirm the registered address and the ₹10,000 website-liability cap.

## Integrations (env — see `.env.example`)
- [ ] `CONTACT_WEBHOOK_URL` (n8n / Zapier / Make) and/or `RESEND_API_KEY` + `CONTACT_TO_EMAIL` (+ verified `CONTACT_FROM_EMAIL`). Lead payload field is `topic`.
- [x] Booking URL is fixed in code. Do not set `NEXT_PUBLIC_CALENDLY_URL` (the site ignores it).
- [ ] Rate limit is in-memory per instance — fine for one Railway replica; move to a shared store (e.g. Redis on Railway) if you scale to several.

## Analytics
- [ ] None installed (Vercel Analytics only works on Vercel). If you add one (e.g. Plausible, Umami, GA4), update the privacy policy's "Information we collect" and "Cookies" sections.
