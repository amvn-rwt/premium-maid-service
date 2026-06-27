---
name: project-brief
description: >-
  Premium Maid Service project context from docs/PROJECT_BRIEF.md. Use when
  planning, building, writing copy, or making architecture decisions for this
  site. Covers site structure, design direction, tech stack, and v1 scope.
---

# Premium Maid Service — Project Brief

## First step

Read `docs/PROJECT_BRIEF.md` before significant work. It is the source of truth.

## Project summary

| Field | Value |
|-------|-------|
| Business | Premium Maid Service |
| Goal | Lead generation — form, call, WhatsApp |
| Area | Delhi NCR |
| Languages | English only |
| Phones | +91 7428127908, +91 98714 39287 |
| Services | All-rounder, Cooking, Babycare, Japa, Housemaid |

## Site structure (v1)

Single-page site with anchored sections recommended:

`Hero → Services → How It Works → Why Us → Enquiry Form → Footer`

Nav: `Home | Services | How It Works | Why Us | Book Now` + Call/WhatsApp.

Reviews section exists in code but is **commented out** until real testimonials arrive.

Mobile: hamburger + **sticky bottom bar** (Call + WhatsApp).

## Design tokens (from `src/app/globals.css`)

| Role | Hex |
|------|-----|
| Primary | `#E0654D` |
| Primary foreground | `#FFFAF8` |
| Background | `#F9FAF8` |
| Foreground (text) | `#1A211F` |
| Muted | `#EEF2F0` |
| Muted foreground | `#5C6B66` |
| Border | `#D8E0DC` |
| Accent | 12% primary mixed into background |

- Light theme only — no dark mode
- Headings: Plus Jakarta Sans
- Mobile-first, large tap targets, minimal JS

## Tech stack

- Next.js or Astro + Tailwind CSS
- Forms: Formspree / Web3Forms (no custom backend v1)
- Deploy: Vercel or Netlify
- SEO: meta tags, Open Graph, LocalBusiness JSON-LD

## Reference sites (patterns only — do not copy)

- Maidvy — service categories, enquiry flow
- ApnaDuty — trust bullets per service
- Neelam Maid Services — form + location focus
- Maid Marines — minimal, booking-first

## Out of scope

No auth, payments, maid database, admin, mobile app, or chatbot.
