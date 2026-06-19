# Premium Maid Service — Project Brief

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
| **Scope (v1)** | Marketing site + booking/enquiry form — no login, payments, or maid database |

### Services to feature

1. **All-rounder maid** — general household help (cleaning, utensils, basic tasks)
2. **Cooking maid** — daily meals, kitchen management
3. **Babycare** — babysitter / nanny for infants and children
4. **Japa maid** — post-delivery newborn and mother care
5. **Housemaid** — dedicated cleaning, dusting, laundry, organization

---

## 2. Open decisions (resolve with client)

These must be confirmed on the discovery call before build starts.

| # | Decision | Options | Status |
|---|----------|---------|--------|
| D1 | **Service area** | Single city, metro region (e.g. Delhi NCR), or pan-India | ⬜ Pending |
| D2 | **Business model** | Placement agency vs. direct employer vs. aggregator | ⬜ Pending |
| D3 | **Pricing on website** | Show rates / salary ranges / agency fee, or enquiry-only | ⬜ Pending |
| D4 | **Languages** | Hindi only, English only, or bilingual (Hindi + English) | ⬜ Pending |
| D5 | **Lead routing** | Email, WhatsApp, SMS, Google Sheet, CRM | ⬜ Pending |
| D6 | **Domain & hosting** | Client-owned domain; Vercel/Netlify (recommended) | ⬜ Pending |
| D7 | **Brand assets** | Logo, brand colors, photos (team/office/stock) | ⬜ Pending |
| D8 | **Verification claims** | Police check, ID verification, training — only if actually offered | ⬜ Pending |
| D9 | **Replacement / trial policy** | Guarantee period, trial days, refund terms | ⬜ Pending |
| D10 | **Legal pages** | Privacy policy, terms of service — required if collecting personal data | ⬜ Pending |

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
8. Full-time, part-time, live-in, and 24-hour — which do you offer for each service?
9. Average **response time** after an enquiry? (e.g. “within 2 hours” — good for hero/trust copy.)

### Services (per category)

10. For **cooking maid**: veg only, non-veg, or both? Regional cuisines (North Indian, South Indian, etc.)?
11. For **babycare**: minimum child age? Overnight care? Trained nannies?
12. For **Japa maid**: newborn age range? Massage/bath for baby and mother? Day vs night shift?
13. For **housemaid** vs **all-rounder**: how do you differentiate these for customers?
14. Any other services later? (Elderly care, patient care, male helper, driver, etc.)

### Trust & marketing

15. Do all staff undergo **police verification** and **ID check**? (Only claim on site if true.)
16. Any **certifications or training** (e.g. Skill India)?
17. Can you share **2–5 testimonials** (name, area, service type — photo optional)?
18. Do you have **before/after** or team photos, or should we use stock imagery?
19. What makes you different from BookMyBai, local agencies, or OLX? (USP in one sentence.)
20. Any **awards, press, or partner logos** to display?

### Contact & leads

21. Primary **phone number** and **WhatsApp** number (same or different)?
22. **Email** for form submissions?
23. **Office address** — show on site or contact-only?
24. **Business hours** (e.g. 10 AM – 8 PM)?
25. Who receives enquiries — owner only or a team? Multiple recipients?
26. Preferred CTA: **“Book now”**, **“Get a quote”**, or **“Enquire on WhatsApp”**?

### Technical & content

27. Do you have a **logo** and **brand colors**? If not, any preference (green/teal, navy/gold, etc.)?
28. Social media links? (Instagram, Facebook — often important for local trust.)
29. Need **Hindi** content, **English**, or both?
30. Timeline: when do they need the site live?
31. Who will **update content** after launch? (They may need a simple CMS later — out of scope for v1.)

---

## 4. Site architecture

### Recommended structure (v1)

Keep it small — 1 main landing page with anchored sections, plus optional dedicated pages if SEO is a priority.

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
Logo | Home | Services | How It Works | Why Us | Reviews | Book Now
                                                      [Call] [WhatsApp]
```

On mobile: hamburger menu + **sticky bottom bar** with Call and WhatsApp.

---

## 5. Page layout & sections

### 5.1 Hero (above the fold)

**Purpose:** Immediate clarity + primary CTA.

| Element | Content direction |
|---------|-------------------|
| Headline | e.g. “Trusted Maids for Your Home” |
| Subheadline | Verified help — all-rounders, cooks, babysitters & Japa maids |
| Primary CTA | Book a Maid / Enquire Now |
| Secondary CTA | WhatsApp Us / Call Now |
| Visual | Clean hero image — family home, professional maid (stock or real photo) |
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

Five cards — one per service. Each card:

- Icon or small image
- Service name
- 3–4 bullet benefits
- “Enquire for this service” link (scrolls to form, pre-selects service)

| Service | Sample bullets (customize after client call) |
|---------|-----------------------------------------------|
| All-rounder | Cleaning, utensils, basic errands; full/part-time |
| Cooking maid | Daily meals, kitchen hygiene; veg/non-veg |
| Babycare | Safe child handling, feeding, playtime |
| Japa maid | Newborn care, massage, mother recovery support |
| Housemaid | Deep cleaning, laundry, organization |

### 5.3 How it works (3–4 steps)

Example flow:

1. **Share your requirement** — Fill form or WhatsApp us  
2. **We shortlist verified profiles** — Matched to your needs  
3. **Interview & trial** — Meet the candidate at your home  
4. **Hire with confidence** — Ongoing support and replacement if needed  

Adjust steps to match their actual process after discovery.

### 5.4 Why choose us / trust section

Possible points (only include verified claims):

- Background-verified staff  
- X+ years of experience  
- Fast response within [Y] hours  
- Replacement guarantee  
- Transparent process  
- Serving [City/Region]  

Optional: stats row — `500+ Placements` · `12+ Years` · `4.8★ Rating` (real numbers only).

### 5.5 Testimonials

2–4 cards: quote, client first name + area, service type.  
Video testimonials are a plus but not required for v1.

### 5.6 Service areas

Map or list of neighborhoods/cities served. Helps local SEO and sets expectations.

### 5.7 FAQ

Reduce friction and support calls. Suggested questions:

- How do I book a maid?  
- Are your maids police verified?  
- What are your charges / agency fees?  
- Full-time vs part-time — what’s available?  
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
- Option D: Combination — save to sheet + notify on WhatsApp  

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

**Premium** here means professional and trustworthy — not flashy. The site should feel calm, clean, and reliable (similar to home-cleaning premium brands, adapted for Indian domestic help).

### Visual references (study, don’t copy)

| Site | Takeaway |
|------|----------|
| [Maidvy](https://www.maidvy.com/) | Service categories match our scope; clear enquiry flow |
| [ApnaDuty](https://apnaduty.com/) | Trust bullets per service category |
| [Neelam Maid Services](https://neelammaidservices.in/) | Practical form + location focus |
| [Maid Marines](https://www.maidmarines.com/) | Minimal layout, booking-first |

### Color palette (draft — confirm with client)

| Role | Suggestion | Hex (starting point) |
|------|------------|----------------------|
| Primary | Deep teal or navy | `#0F4C5C` or `#1E3A5F` |
| Accent | Warm gold or soft green | `#C9A227` or `#2D6A4F` |
| Background | Off-white | `#FAFAF8` |
| Text | Dark gray | `#1A1A1A` |
| Muted text | Gray | `#6B7280` |

Avoid dark themes — they conflict with “clean home services” perception.

### Typography

- **Headings:** Clean sans-serif (e.g. DM Sans, Plus Jakarta Sans, or similar)  
- **Body:** Readable sans-serif, 16–18px on mobile  
- **Hindi (if needed):** Noto Sans Devanagari or system fallback  

### Imagery

- Warm, well-lit photos of Indian homes and families  
- Diverse, respectful representation of domestic workers  
- Avoid clichéd “maid in uniform” stock unless high quality  
- Icons for service cards if photos aren’t ready  

### UI principles

1. **Mobile-first** — most enquiries will come from phones  
2. **Large tap targets** — Call and WhatsApp always one tap away  
3. **Fast load** — optimize images, minimal JS  
4. **Accessible** — sufficient contrast, form labels, focus states  
5. **No clutter** — white space signals premium  

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
| Language | i18n only if client confirms Hindi | Adds scope — defer unless required |

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
- [ ] Brand colors (or approval of draft palette)  
- [ ] Phone and WhatsApp numbers  
- [ ] Email for enquiries  
- [ ] Office address and hours  
- [ ] Service area list  
- [ ] Per-service descriptions (or approve our drafts)  
- [ ] Agency fee / pricing policy (if shown)  
- [ ] Verification and replacement policies (wording)  
- [ ] 2–5 testimonials  
- [ ] Photos or approval for stock images  
- [ ] Social media URLs  
- [ ] FAQ answers  

---

## 9. SEO & local discovery (basics)

- **Title:** `Premium Maid Service | Maids, Cooks, Babysitters & Japa Maids in [City]`  
- **Meta description:** 150–160 chars with services + city + CTA  
- **H1:** One per page; include primary keyword naturally  
- **LocalBusiness schema** (JSON-LD): name, phone, area served, hours  
- **Google Business Profile:** Client should create/claim separately — website links to it  

---

## 10. Launch checklist

- [ ] All client questions answered (Section 3)  
- [ ] Decisions locked (Section 2)  
- [ ] Content and assets received (Section 8)  
- [ ] Site built and reviewed on mobile + desktop  
- [ ] Form tested — submission reaches client  
- [ ] Call and WhatsApp links tested on real devices  
- [ ] Privacy policy added if collecting personal data  
- [ ] Domain connected  
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

**Option A — Trust-focused**  
> Premium Maid Service  
> Verified maids, cooks, and caregivers for your home. Book in minutes.

**Option B — Service-focused**  
> All-Rounder · Cook · Babycare · Japa · Housemaid  
> Professional domestic help, matched to your family’s needs.

**Option C — Local**  
> [City]’s trusted maid agency  
> Police-verified staff. Full-time, part-time & live-in options.

---

## 13. Notes from initial conversation

- Friend requested website for **Premium Maid Service**  
- Services: All rounder, Cooking maid, Babycare, Japa maid, Housemaid  
- Must include **booking form**  
- Discovery call planned — use Section 3 questions  
- Workspace initialized; implementation not started  

---

## Document history

| Date | Change |
|------|--------|
| 2026-06-19 | Initial project brief created |
