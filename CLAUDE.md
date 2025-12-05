# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based one-page portfolio website for Rai Clark, a Dutch music producer and composer. The site features heavy visual effects including 3D animations (Three.js), custom cursor interactions, parallax scrolling, and retro 80s/90s VHS-glitch aesthetics with neon accent colors.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom neon color palette
- **Animations**: Framer Motion + GSAP
- **3D Graphics**: Three.js via @react-three/fiber and @react-three/drei
- **Forms**: react-hook-form

### Project Structure

The site is a single-page application composed of modular sections:

```
src/
├── app/
│   ├── page.tsx          # Main page - imports all sections sequentially
│   ├── layout.tsx        # Root layout with SEO metadata & JSON-LD structured data
│   └── globals.css       # Global styles, Tailwind imports, custom animations
└── components/
    ├── CustomCursor.tsx           # Custom cursor with states (default/link/button/image)
    ├── Hero3D.tsx                 # Three.js 3D animated shape for hero section
    ├── SpotifyFloatingButton.tsx  # Sticky Spotify button (bottom-right)
    ├── EasterEggs.tsx             # Konami code handler (↑↑↓↓←→←→BA activates "RAVE MODE")
    └── sections/
        ├── HeroSection.tsx
        ├── AboutSection.tsx
        ├── ServicesSection.tsx
        ├── PortfolioSection.tsx
        ├── SpecialMomentsSection.tsx
        ├── ProcessSection.tsx
        ├── TestimonialsSection.tsx
        ├── ContactSection.tsx
        └── Footer.tsx
```

### Key Architectural Patterns

**1. Section-Based Architecture**
- Each major section is a self-contained component in `components/sections/`
- All sections are imported and rendered sequentially in `src/app/page.tsx`
- Components are client-side rendered with `'use client'` directive for animations

**2. Client-Side Interactivity Layer**
- Three global interactive components: CustomCursor, SpotifyFloatingButton, EasterEggs
- These are rendered at the top level in page.tsx, outside the `<main>` tag
- They use React hooks (useEffect, useState) and Framer Motion for animations

**3. Animation System**
- Framer Motion for page transitions and scroll-triggered animations
- GSAP for complex timeline animations (ProcessSection)
- Three.js for 3D graphics (Hero3D component)
- Custom Tailwind animations defined in tailwind.config.js (pulse-slow, float, glow, marquee)

**4. Styling Approach**
- Dark theme with neon accents: electric-blue (#0066FF), hot-pink (#FF0066), neon-cyan (#00FFFF)
- Custom Tailwind color palette in tailwind.config.js
- Neon glow effects via custom box-shadow utilities (shadow-neon-blue, shadow-neon-pink, shadow-neon-cyan)
- Typography: Space Grotesk/Archivo Black (display), IBM Plex Mono (mono), Inter (sans)

## Important Configuration Points

### Spotify Artist ID
Current: `2fkKXGwlVqdj3FaPK7XLtH`

Used in:
- `src/components/sections/HeroSection.tsx` (main CTA)
- `src/components/sections/PortfolioSection.tsx` (embedded player)
- `src/components/sections/Footer.tsx` (footer link)
- `src/components/SpotifyFloatingButton.tsx` (floating button)

### Contact Information
- Email: rai@raiclark.nl
- Instagram: @raiclarkmusic
- Website: https://raiclark.nl

Contact details are hardcoded in:
- `src/components/sections/ContactSection.tsx`
- `src/components/sections/Footer.tsx`
- `src/app/layout.tsx` (metadata & JSON-LD)

### SEO & Metadata
- All SEO metadata in `src/app/layout.tsx`
- Three JSON-LD structured data blocks: MusicGroup, Person, Service
- Open Graph and Twitter card metadata configured
- Base URL: https://raiclark.nl
- Language: Dutch (nl_NL)

### Images
Images are stored in `/public/images/`:
- `rai-clark-portrait.jpg` - Used in About section and OG image
- `het-beestenbal-album.png` - Featured album artwork

Always use Next.js `<Image>` component with `fill` prop for responsive images.

## Notable Features

### Easter Egg
Konami Code (↑↑↓↓←→←→BA) activates "RAVE MODE" for 30 seconds:
- Implemented in `src/components/EasterEggs.tsx`
- Triggers rainbow background flashing and special effects
- Sequence tracking with keyboard event listener

### Custom Cursor
Desktop-only cursor system (`src/components/CustomCursor.tsx`):
- Four states: default, link, button, image
- Spring-based smooth following with Framer Motion
- Trail effect with particles
- Hidden on mobile (width <= 768px)

### Form Handling
Contact form in `ContactSection.tsx` uses react-hook-form but currently has **placeholder submission logic**.

To implement real form submission:
- Option 1: Create `/src/app/api/contact/route.ts` for Next.js API route
- Option 2: Integrate third-party service (Formspree, Basin, SendGrid)

## Known TODOs

From README.md:
- Implement actual form submission backend
- Add real client testimonials (currently placeholder data)
- Replace placeholder project cards with real work
- Add Google Analytics tracking
- Implement newsletter subscription
- Add loading screen animation
- Create custom 404 page design

## Performance Considerations

- Three.js and heavy animations may impact performance on low-end devices
- CustomCursor is disabled on mobile for performance
- Images should use Next.js Image component for optimization
- Spotify embeds are iframes (potential performance hit)

## Deployment

Recommended: Vercel (optimized for Next.js)
- Push to GitHub → Import to Vercel → Auto-deploy
- Ensure environment variables are set if form submission is implemented
- Domain should be configured to https://raiclark.nl
