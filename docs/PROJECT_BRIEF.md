# Premium Maid Service: Project Brief

> Planning document for the client website.  
> Last updated: June 19, 2026

---

## 1. Project overview

| Field | Detail |
|-------|--------|
| **Business name** | Premium Maid Service |
| **Purpose** | Lead-generation website to showcase services and collect booking enquiries |
| **Target audience** | Households and families looking for verified domestic help |
| **Primary goal** | Convert visitors into enquiries (form submit, call, or WhatsApp) |
| **Scope (v1)** | Marketing site + booking/enquiry form: no login, payments, or maid database |
| **Service area** | Delhi NCR (confirmed) |
| **Languages** | English only |
| **Contact numbers** | +91 74281 27908, +91 98714 39287 (confirmed) |

### Services to feature

1. **All-rounder maid**: general household help (cleaning, utensils, basic tasks)
2. **Cooking maid**: daily meals, kitchen management
3. **Babycare**: babysitter / nanny for infants and children
4. **Japa maid**: post-delivery newborn and mother care
5. **Housemaid**: dedicated cleaning, dusting, laundry, organization

---

## 2. Open decisions (resolve with client)

These must be confirmed on the discovery call before build starts.

| # | Decision | Options | Status |
|---|----------|---------|--------|
| D1 | **Service area** | Single city, metro region (e.g. Delhi NCR), or pan-India | ✅ **Delhi NCR** |
| D2 | **Business model** | Placement agency vs. direct employer vs. aggregator | ⬜ Pending |
| D3 | **Pricing on website** | Show rates / salary ranges / agency fee, or enquiry-only | ✅ **Enquiry only**: no prices on site |
| D4 | **Languages** | English only (Hindi/bilingual removed from v1 scope) | ✅ **English only** |
| D5 | **Lead routing** | Email, WhatsApp, SMS, Google Sheet, CRM | ✅ **Email** (Ankushhanry@icloud.com) + WhatsApp on primary number |
| D6 | **Domain & hosting** | Client-owned domain; Vercel/Netlify (recommended) | ✅ **https://premiiummaidservice.in** (live) |
| D7 | **Brand assets** | Logo, brand colors, photos (team/office/stock) | ✅ **Partial**: text logo, current palette, hero copy locked; photos TBD (Section F) |
| D8 | **Verification claims** | Police check, ID verification, training: only if actually offered | ⬜ Pending |
| D9 | **Replacement / trial policy** | Guarantee period, trial days, refund terms | ⬜ Pending |
| D10 | **Legal pages** | Privacy policy, terms of service | ⬜ **Deferred**: not in v1 for now |

---

## 3. Client discovery questions

### Business & operations

1. Which **cities or areas** do you serve? (Exact list for footer, SEO, and form dropdown.)
2. How long has Premium Maid Service been operating?
3. Are you a **registered agency**? (Company name, registration number if they want it on site.)
4. How does hiring work end-to-end? (Enquiry → shortlist → interview → trial → placement.)
5. What is your **agency/placement fee**? Fixed amount or % of salary?
6. Do you offer **replacement** if the maid doesn’t work out? For how long?
7. Is there a **trial period** before final placement?
8. Full-time, part-time, live-in, and 24-hour: which do you offer for each service?
9. Average **response time** after an enquiry? (e.g. “within 2 hours”: good for hero/trust copy.)

### Services (per category)

10. For **cooking maid**: veg only, non-veg, or both? Regional cuisines (North Indian, South Indian, etc.)?
11. For **babycare**: minimum child age? Overnight care? Trained nannies?
12. For **Japa maid**: newborn age range? Massage/bath for baby and mother? Day vs night shift?
13. For **housemaid** vs **all-rounder**: how do you differentiate these for customers?
14. Any other services later? (Elderly care, patient care, male helper, driver, etc.)

### Trust & marketing

15. Do all staff undergo **police verification** and **ID check**? (Only claim on site if true.)
16. Any **certifications or training** (e.g. Skill India)?
17. Can you share **2–5 testimonials** (name, area, service type: photo optional)?
18. Do you have **before/after** or team photos, or should we use stock imagery?
19. What makes you different from BookMyBai, local agencies, or OLX? (USP in one sentence.)
20. Any **awards, press, or partner logos** to display?

### Contact & leads

21. Primary **phone number** and **WhatsApp** number (same or different)?
22. **Email** for form submissions?
23. **Office address**: show on site or contact-only?
24. **Business hours** (e.g. 10 AM – 8 PM)?
25. Who receives enquiries: owner only or a team? Multiple recipients?
26. Preferred CTA: **“Book now”**, **“Get a quote”**, or **“Enquire on WhatsApp”**?

### Technical & content

27. Do you have a **logo** and **brand colors**? ✅ Logo locked (text); colours locked: warm coral `#E0654D` on off-white.
28. Social media links? (Instagram, Facebook: often important for local trust.)
29. ~~Need **Hindi** content, **English**, or both?~~: **English only** for v1.
30. Timeline: when do they need the site live?
31. Who will **update content** after launch? (They may need a simple CMS later: out of scope for v1.)

---

## 4. Site architecture

### Recommended structure (v1)

Keep it small: 1 main landing page with anchored sections, plus optional dedicated pages if SEO is a priority.

```
/                    → Home (all sections)
/services            → Optional: expanded service detail (or anchor on home)
/contact             → Optional: dedicated contact (or form on home)
/privacy-policy      → If collecting personal data
/terms               → Optional
```

**Recommendation for v1:** Single-page site with smooth scroll sections. Faster to build, easier on mobile, sufficient for a local agency.

### Navigation

```
Logo | Home | Services | How It Works | Why Us | Book Now
                                                      [Call] [WhatsApp]
```

> **Reviews** section is built but **commented out** until real testimonials are confirmed. Uncomment `reviews-section.tsx`, `reviews.ts`, and nav/footer links when ready.

On mobile: hamburger menu + **sticky bottom bar** with Call and WhatsApp.

---

## 5. Page layout & sections

### 5.1 Hero (above the fold)

**Purpose:** Immediate clarity + primary CTA.

| Element | Content direction |
|---------|-------------------|
| Headline | e.g. “Trusted Maids for Your Home” |
| Subheadline | Verified help: all-rounders, cooks, babysitters & Japa maids |
| Primary CTA | Book a Maid / Enquire Now |
| Secondary CTA | WhatsApp Us / Call Now |
| Visual | Clean hero image: family home, professional maid (stock or real photo) |
| Trust chips | e.g. Police Verified · Experienced Staff · Quick Response |

```
┌──────────────────────────────────────────────────────────┐
│  [Logo]     Home  Services  How It Works  Contact  📞    │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   Premium Maid Service                                   │
│   Trusted domestic help for your home                    │
│                                                          │
│   [ Book a Maid ]    [ WhatsApp Us ]                     │
│                                                          │
│   ✓ Verified   ✓ Flexible hours   ✓ Replacement support │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 5.2 Services grid

Five cards: one per service. Each card:

- Image with service name + highlight chips
- Clicking a card opens a **premium detail modal** (backdrop blur, smooth scale/fade animation, close icon) with a comprehensive breakdown: overview, "what this help covers", and "good to know"
- The modal CTA **Enquire about this service** closes the modal, pre-selects the service in the enquiry form, and smooth-scrolls to it; a WhatsApp shortcut is also offered

| Service | Sample bullets (customize after client call) |
|---------|-----------------------------------------------|
| All-rounder | Cleaning, utensils, basic errands; full/part-time |
| Cooking maid | Daily meals, kitchen hygiene; veg/non-veg |
| Babycare | Safe child handling, feeding, playtime |
| Japa maid | Newborn care, massage, mother recovery support |
| Housemaid | Deep cleaning, laundry, organization |

### 5.3 How it works (4 steps)

Implemented flow (equal-height cards; each renders a bespoke visual mockup, a coral benefit chip, and arrow connectors between cards on desktop):

1. **Share your requirement**: Fill form or WhatsApp us · chip “Quick & easy” (WhatsApp chat mockup)
2. **We shortlist profiles**: Matched to your service type, timing, and area · chip “Matched to you” (shortlisted-profiles list mockup)
3. **Interview & trial**: Meet the candidate at your home and try before you commit · chip “Try before hiring” (trial-visit card mockup)
4. **Hire with support**: Once you confirm, we stay available for follow-up · chip “We stay in touch” (placed + follow-up mockup)

Copy/summaries live in `src/lib/content/how-it-works.ts`; visuals in `src/components/how-it-works/`. Mockup profiles are illustrative and role-based (no real names, no specific locality). Accents use brand coral; WhatsApp green is reserved for WhatsApp elements only. No “verified” claim until D8 is confirmed. Adjust steps to match the client’s actual process after discovery.

### 5.4 Why choose us / trust section

Implemented as a balanced asymmetric **all-dark** bento (every tile uses the dark `--foreground` surface with coral accents): a **tall featured tile** on the left + a **2×2 set of tiles** on the right (no empty/oversized bottom bar). Each tile presents info a **different** way, scanning-first, with two short paragraphs:

Every card carries a short text line for context; small in-card icons are bare (no circle), circles are reserved for the heading icons only:

- **Featured** (tall): coral-glow headline + 2–3 line paragraph + hours footnote (no CTA button)
- **All key services** (Users): text line + icon **chips**: Maids (SprayCan), Cooks, Babysitters, Japa maids, House help
- **Service area**: **stat-style** card: large “Delhi NCR” + a 2-line paragraph naming core NCR cities (no fabricated metric)
- **Flexible timings** (Clock): text line + **icon+label rows** (2×2): Full-time, Part-time, Live-in, 24-hour
- **Easy to reach** (MessagesSquare): text line (working hours) + **icon+label rows**: Enquiry form, Call us, WhatsApp

Icon/text-based by design: no client photos, so nothing depends on pending D7 assets. Featured copy + points live in `src/lib/content/why-us.ts` (each point declares a `kind: "chips" | "iconList" | "stat"` discriminant); layout in `src/components/why-us/why-us-section.tsx`. Do **not** add “background-verified”, years-in-business, response-time, replacement-guarantee, or invented stats (`500+ Placements`, ratings) until confirmed (see D8/D9).

### 5.5 Testimonials

**Disabled for v1**: section code is commented out; no placeholder reviews on the live site. Re-enable when client provides 2–4 real quotes.

2–4 cards when live: quote, client first name + area, service type.  
Video testimonials are a plus but not required.

### 5.6 Service areas

Map or list of neighborhoods/cities served. Helps local SEO and sets expectations.

### 5.7 FAQ

Reduce friction and support calls. Suggested questions:

- How do I book a maid?  
- Are your maids police verified?  
- What are your charges / agency fees?  
- Full-time vs part-time: what’s available?  
- What if the maid doesn’t work out?  
- How quickly can you provide a maid?  

### 5.8 Booking / enquiry form

**Placement:** Full-width section before footer; also linked from every CTA.

**Required fields:**

| Field | Type | Notes |
|-------|------|-------|
| Full name | text | |
| Phone number | tel | Validate 10-digit Indian mobile |
| City / area | text or select | Dropdown if fixed service area |
| Service needed | select | All-rounder, Cook, Babycare, Japa, Housemaid |
| Work type | select | Full-time, Part-time, Live-in, 24 hours |
| Message | textarea | Optional special requirements |

**Conditional fields (show based on service):**

| Condition | Extra field |
|-----------|-------------|
| Cooking maid | Veg / Non-veg / Both |
| Babycare / Japa | Child/baby age |
| Japa maid | Expected delivery date or baby age |

**Submit behavior (decide with client):**

- Option A: Email via Formspree / Web3Forms  
- Option B: Google Sheet via Apps Script  
- Option C: WhatsApp deep link with pre-filled message  
- Option D: Combination: save to sheet + notify on WhatsApp  

### 5.9 Footer

- Business name + one-line tagline  
- Phone, WhatsApp, email  
- Address (if applicable)  
- Hours  
- Quick links: Services, Contact, Privacy  
- Social icons  
- © Year Premium Maid Service  

---

## 6. Design direction

### Brand positioning

**Premium** here means professional and trustworthy: not flashy. The site should feel calm, clean, and reliable (similar to home-cleaning premium brands, adapted for Indian domestic help).

### Visual references (study, don’t copy)

| Site | Takeaway |
|------|----------|
| [Maidvy](https://www.maidvy.com/) | Service categories match our scope; clear enquiry flow |
| [ApnaDuty](https://apnaduty.com/) | Trust bullets per service category |
| [Neelam Maid Services](https://neelammaidservices.in/) | Practical form + location focus |
| [Maid Marines](https://www.maidmarines.com/) | Minimal layout, booking-first |

### Color palette (locked: see `src/app/globals.css`)

| Role | Description | Hex |
|------|-------------|-----|
| Primary | Warm coral | `#E0654D` |
| Primary foreground | Off-white (on primary buttons) | `#FFFAF8` |
| Background | Warm off-white | `#F9FAF8` |
| Foreground (text) | Dark green-charcoal | `#1A211F` |
| Muted | Light gray-green | `#EEF2F0` |
| Muted foreground | Mid gray-green | `#5C6B66` |
| Border | Soft gray-green | `#D8E0DC` |
| Accent | 12% primary mixed into background | derived |

Avoid dark themes: they conflict with “clean home services” perception.

### Typography

- **Headings:** Plus Jakarta Sans (bold)  
- **Body:** Readable sans-serif, 16–18px on mobile  

### Imagery

- Warm, well-lit photos of Indian homes and families  
- Diverse, respectful representation of domestic workers  
- Avoid clichéd “maid in uniform” stock unless high quality  
- Icons for service cards if photos aren’t ready  

### UI principles

1. **Mobile-first**: most enquiries will come from phones  
2. **Large tap targets**: Call and WhatsApp always one tap away  
3. **Fast load**: optimize images, minimal JS  
4. **Accessible**: sufficient contrast, form labels, focus states  
5. **No clutter**: white space signals premium  

---

## 7. Technical decisions (recommended)

| Area | Recommendation | Rationale |
|------|----------------|-----------|
| Framework | Next.js or Astro | Fast, SEO-friendly, easy deploy |
| Styling | Tailwind CSS | Rapid, consistent UI |
| Forms | Formspree or Web3Forms + optional WhatsApp | No backend needed for v1 |
| Hosting | Vercel or Netlify | Free tier, custom domain |
| Analytics | Google Analytics or Plausible | Track enquiries and traffic |
| SEO | Meta tags, Open Graph, local business schema | Local search visibility |
| Language | English only | No i18n or Hindi toggle in v1 |

### Out of scope for v1

- User accounts / login  
- Online payments  
- Maid profile database or search  
- Admin dashboard  
- Mobile app  
- Chatbot (unless client insists)  

---

## 8. Content checklist (gather from client)

- [ ] Business legal name and tagline  
- [ ] Logo (SVG or PNG)  
- [x] Brand colors: warm coral `#E0654D` on off-white (locked in `globals.css`)  
- [x] Phone numbers: **7428127908**, **9871439287** (WhatsApp same or separate: confirm on next call)  
- [ ] Email for enquiries  
- [ ] Office address and hours  
- [x] Service area: **Delhi NCR**  
- [ ] Per-service descriptions (or approve our drafts)  
- [ ] Agency fee / pricing policy (if shown)  
- [ ] Verification and replacement policies (wording)  
- [ ] 2–5 testimonials  
- [ ] Photos or approval for stock images  
- [ ] Social media URLs  
- [ ] FAQ answers  

---

## 9. SEO & local discovery

**Implemented (v1):**

| Item | Value / location |
|------|------------------|
| Canonical domain | `https://premiiummaidservice.in` — `src/lib/site.ts` |
| Title | `Premium Maid Service \| Maids, Cooks & Japa Maids in Delhi NCR` |
| Meta description | Services + Delhi NCR + CTA — `src/lib/seo/metadata.ts` |
| Open Graph / Twitter | `src/lib/seo/metadata.ts` |
| JSON-LD | `LocalBusiness`, `WebSite`, `Service` × 5 — `src/lib/seo/json-ld.ts` |
| Sitemap | `src/app/sitemap.ts` → `/sitemap.xml` |
| Robots | `src/app/robots.ts` → `/robots.txt` |

**On-page (already in place):**

- Single H1 in hero (`src/components/hero/hero-copy.tsx`)
- Section H2s for services, how it works, why us, enquiry
- Descriptive image alt text on hero and service images

**Not in schema/metadata (by design):**

- Star ratings, review count, testimonials
- Police verification, replacement guarantee, years in business
- Office address (not shown on site)

**Post-launch (client / manual):**

- Google Business Profile: create/claim and link to website
- Submit sitemap in Google Search Console
- Validate JSON-LD with [Rich Results Test](https://search.google.com/test/rich-results) after deploy

---

## 10. Launch checklist

- [ ] All client questions answered (Section 3)  
- [ ] Decisions locked (Section 2)  
- [ ] Content and assets received (Section 8)  
- [ ] Site built and reviewed on mobile + desktop  
- [ ] Form tested: submission reaches client  
- [ ] Call and WhatsApp links tested on real devices  
- [ ] Privacy policy: **deferred** (not required for current launch)  
- [x] Domain connected — **https://premiiummaidservice.in**  
- [x] SEO basics — metadata, JSON-LD, sitemap, robots  
- [ ] Basic analytics installed  
- [ ] Client handoff: how to request text/image updates  

---

## 11. Suggested timeline (estimate)

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| Discovery call + content | 1–2 days | Filled decisions, copy, assets |
| Design / wireframe approval | 1 day | Layout sign-off |
| Development | 2–4 days | Working site on staging URL |
| Review + revisions | 1–2 days | Client feedback incorporated |
| Launch | 1 day | Live on custom domain |

**Total:** ~1–2 weeks depending on client response speed.

---

## 12. Hero copy drafts (for client to pick/edit)

**Option A: Trust-focused**  
> Premium Maid Service  
> Verified maids, cooks, and caregivers for your home. Book in minutes.

**Option B: Service-focused**  
> All-Rounder · Cook · Babycare · Japa · Housemaid  
> Professional domestic help, matched to your family’s needs.

**Option C: Local**  
> [City]’s trusted maid agency  
> Police-verified staff. Full-time, part-time & live-in options.

---

## 13. Notes from initial conversation

- Friend requested website for **Premium Maid Service**  
- Services: All rounder, Cooking maid, Babycare, Japa maid, Housemaid  
- Must include **booking form**  
- Discovery call planned: use Section 3 questions  
- Workspace initialized; implementation not started  

### Client answers (WhatsApp: 19 Jun 2026, Ankush Rustagi)

| Item | Answer |
|------|--------|
| **Languages** | English only (bilingual plan removed) |
| **Service area** | Delhi NCR |
| **Phone 1** | 7428127908 |
| **Phone 2** | 9871439287 |

| **Primary (7428127908)** | Call + WhatsApp: sticky bar, navbar, enquiry form |
| **Secondary (9871439287)** | Call only: listed in footer and hero contact card |
| **Hero** | Both numbers shown |
| **Enquiry email** | Ankushhanry@icloud.com |
| **Hours** | Mon–Sat, 10 AM – 7 PM |
| **Office address** | Not on site |
| **Form routing** | Email on submit; WhatsApp as secondary CTA |

Still to confirm: main button wording (Q8: using "Enquire Now"); photos (Section F).

### Client answers: Section G (Jun 2026, Ankush)

| Item | Answer |
|------|--------|
| Logo | None: keep text logo as built |
| Colours | Warm coral `#E0654D` primary, off-white background (as built) |
| Hero | Keep headline and copy already written |

### Client answers: Section C (WhatsApp, Ankush)

| Item | Answer |
|------|--------|
| Pricing on site | No: skip / enquiry only ("bhai ye rehndo") |

| Item | Answer |
|------|--------|
| Form email | Ankushhanry@icloud.com |
| Hours | 10 AM – 7 PM, Monday–Saturday |
| Office address | No |
| Enquiries | Same primary WhatsApp number |

---

## Document history

| Date | Change |
|------|--------|
| 2026-06-19 | Initial project brief created |
| 2026-06-19 | Client confirmed Delhi NCR, two phone numbers |
| 2026-06-27 | Languages set to English only: Hindi/bilingual removed from v1 |
| 2026-06-28 | SEO launch: canonical domain, metadata, JSON-LD, sitemap, robots |
