# Planet Aqua Pool & Fitness — PRD

## Original Problem Statement
Build a modern, visually stunning single-page website for **Planet Aqua Pool and Fitness** (ಪ್ಲಾನೆಟ್ ಫಿಟ್ನೆಸ್), a premium gym + swimming pool centre in BTM Layout, Bengaluru. Frontend-only React site with tel: links, WhatsApp float, Google Maps embed, and CSS-only water effects.

## Business Snapshot
- Phone: +91 91646 91371 · WhatsApp: 919164691371
- Address: 36, 20th Main Rd, above Corporation Bank, BTM 1st Stage, 560068
- Hours: 5:00 AM – 11:00 PM (all days)
- Rating: 4.7★ · 885+ reviews

## Architecture
- React 19 (CRA + Craco) — frontend-only, no backend integration
- Tailwind CSS + custom CSS variables (aqua/navy palette)
- Fonts: **Bebas Neue** (display, athletic) + **Manrope** (body) + **Tiro Kannada**
- Icons: lucide-react (no emoji icons in UI)
- Hero images: Unsplash placeholders (pool + gym)

## File Layout
```
frontend/src/
├── App.js                       # Root composition
├── index.css                    # Tailwind + brand tokens + animations
├── lib/data.js                  # Single source of truth (business, plans, schedule, etc.)
├── hooks/useReveal.js           # IntersectionObserver scroll reveals
└── components/site/
    ├── Navbar.jsx               # Sticky glass navbar w/ mobile drawer
    ├── Hero.jsx                 # Headline, ripples, stats panel, scroll cue
    ├── WhyUs.jsx                # 4 feature cards
    ├── Facilities.jsx           # Pool/Gym tab toggle w/ image + features
    ├── Membership.jsx           # 5 pricing cards + "Best Value" gold tag
    ├── Schedule.jsx             # Timeline w/ 4 day-blocks
    ├── Testimonials.jsx         # 4 review cards w/ rating chip
    ├── Location.jsx             # Dark-themed Google Maps embed + contact cards
    ├── Footer.jsx               # Brand, quick links, contact, CTA buttons
    └── WhatsAppFloat.jsx        # Floating button + tooltip card
```

## Implemented (2025-12-01)
- [x] Hero with CSS water ripples, drifting glow orbs, animated stats card
- [x] All 8 sections per problem statement
- [x] Mobile-first responsive (375 / 768 / 1440 / 1920 verified)
- [x] Smooth scroll, scroll-reveal animations, hover micro-interactions
- [x] Open Graph + Twitter meta tags
- [x] Click-to-call (tel:) on all CTAs · WhatsApp float (wa.me)
- [x] Google Maps embed with dark inversion filter
- [x] Kannada name (ಪ್ಲಾನೆಟ್ ಫಿಟ್ನೆಸ್) used in hero + footer
- [x] data-testid on all interactive elements

## Backlog / Ideas
- P2: Add image gallery section once business photos are provided
- P2: Trial-booking inline form (currently call-to-book only)
- P2: Newsletter / WhatsApp broadcast signup
- P2: Add structured data (LocalBusiness schema) for better SEO
