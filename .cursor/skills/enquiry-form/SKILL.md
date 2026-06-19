---
name: enquiry-form
description: >-
  Booking and enquiry form spec for Premium Maid Service. Use when building,
  validating, or wiring the lead form, WhatsApp deep links, or form submission
  for the Delhi NCR maid agency site.
---

# Enquiry Form

## Placement

Full-width section before footer. Every "Book" / "Enquire" CTA scrolls here and may pre-select service via URL hash or query (`?service=cooking`).

## Required fields

| Field | Type | Validation |
|-------|------|------------|
| Full name | text | Required |
| Phone | tel | Required — 10-digit Indian mobile (`^[6-9]\d{9}$`) |
| City / area | text or select | Default context: Delhi NCR |
| Service needed | select | All-rounder, Cook, Babycare, Japa, Housemaid |
| Work type | select | Full-time, Part-time, Live-in, 24 hours |
| Message | textarea | Optional |

## Conditional fields

| When service is | Show |
|-----------------|------|
| Cooking maid | Veg / Non-veg / Both |
| Babycare or Japa | Child/baby age |
| Japa maid | Expected delivery date or baby age (optional) |

## Submit options (pick after D5 confirmed)

- **A:** Formspree / Web3Forms → email
- **B:** Google Sheet via Apps Script
- **C:** WhatsApp deep link with pre-filled message
- **D:** Sheet + WhatsApp notification

Default recommendation until client decides: Formspree/Web3Forms + WhatsApp as secondary CTA.

## WhatsApp deep link pattern

```
https://wa.me/917428127908?text={encoded_message}
```

Pre-fill: name, phone, service, work type, area. Use primary number until client confirms which is main.

## UX requirements

- Visible labels (not placeholder-only)
- Error messages in EN and HI when i18n is active
- Large submit button, mobile-friendly inputs
- Privacy note if collecting personal data (link to `/privacy-policy`)
- `autocomplete` on name and tel where appropriate

## Accessibility

- Associate labels with inputs (`htmlFor` / `id`)
- Focus states on all fields
- Sufficient color contrast on errors
- Don't rely on color alone for validation state
