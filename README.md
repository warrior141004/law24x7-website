# Law24x7 — Website

Marketing site for Law24x7 ("From legal information to legal intelligence"), built from the pitch deck. Deliberately plain and fast: a real product screenshot in the hero, standard cards, simple scroll reveals — nothing that requires a fast GPU, so it works reliably on ordinary office and court machines.

**Stack:** React 19 · Vite (SWC) · Tailwind CSS v4 · Framer Motion · Lenis smooth scroll · lucide-react. No 3D/WebGL.

```bash
npm install   # first time
npm run dev                      # http://localhost:5173
npm run build                    # production build → dist/
npm run preview                  # serve dist/
```

## Structure

```
src/
  data/content.js        # all copy from the deck — edit text/pricing/team here
  components/
    ui.jsx               # Section, Eyebrow, Words (heading fade-in), Reveal, Counter, TiltCard (hover lift), MagneticButton
    Navbar, Hero (headline + live product screenshot), Marquee, Why, Platform,
    Features (sticky-scroll USPs with mock-UI screenshots), Visuals (the mock-UI screenshots),
    Users, Market, Architecture (+ competitor matrix), Pricing, Roadmap (+ strategy), Team, Footer (CTA)
  hooks/useLenis.js      # inertial scrolling + anchor/deep-link handling
```

Sections are anchored (`#why`, `#platform`, `#features`, `#market`, `#pricing`, `#team`, `#cta`) and work as deep links.

## Design notes
- Palette matches the deck exactly: cream paper, coral-red accent, navy for headings/dark surfaces, plus the deck's four pastel category tints (rose/amber/green/blue).
- Headings use Fraunces (serif); body text uses Inter. No italic — kept to one consistent weight per line for a clean, un-fussy read.
- Motion is limited to simple fade/rise-on-scroll and a count-up on stats — no cursor-tracking tilt, no auto-rotating backgrounds, no WebGL.
- Minimum text size site-wide is 14px (labels/captions); body copy is 16px+, matching general accessibility guidance for a site judges and lawyers will actually read.
