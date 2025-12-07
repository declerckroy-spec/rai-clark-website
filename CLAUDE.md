# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based one-page portfolio website for Rai Clark, a Dutch music producer, composer and songwriter. The site serves both as a **fansite** (showcasing artistic releases) and **order platform** (custom songs on commission). It features heavy visual effects including 3D animations (Three.js), custom cursor interactions, parallax scrolling, and retro 80s/90s VHS-glitch aesthetics with neon accent colors.

### Tone of Voice
- **Nuchter, eerlijk, direct Nederlands** (like roydeclerck.nl)
- NO AI-clichés (em-dashes, excessive bolding, typical AI phrasing)
- NO corporate buzzwords or marketing jargon
- Creative and quirky headlines are OK, but body copy stays grounded
- Focus: artistic releases AND commissioned work (both equally important)

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
- **Email**: Resend (for contact form submissions)

### Project Structure

The site is a single-page application composed of modular sections:

```
src/
├── app/
│   ├── page.tsx                    # Main page - imports all sections sequentially
│   ├── layout.tsx                  # Root layout with SEO metadata & JSON-LD structured data
│   ├── globals.css                 # Global styles, Tailwind imports, custom animations
│   └── api/
│       └── contact/
│           └── route.ts            # API route for contact form (Resend integration)
└── components/
    ├── CustomCursor.tsx            # Custom cursor with states (default/link/button/image)
    ├── Hero3D.tsx                  # Three.js 3D animated shape for hero section
    ├── SpotifyFloatingButton.tsx   # Sticky Spotify button (bottom-right)
    ├── EasterEggs.tsx              # Konami code handler (↑↑↓↓←→←→BA activates "RAVE MODE")
    └── sections/
        ├── HeroSection.tsx
        ├── AboutSection.tsx
        ├── ServicesSection.tsx
        ├── PortfolioSection.tsx
        ├── SpecialMomentsSection.tsx
        ├── ProcessSection.tsx
        ├── ContactSection.tsx
        ├── Footer.tsx
        └── archive/
            └── TestimonialsSection.tsx  # Archived (no reviews available yet)
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
- **Email**: rai@raiclark.nl
- **Phone/WhatsApp**: +31 6 28 20 64 10
- **Instagram**: @rai.clark (https://www.instagram.com/rai.clark/)
- **Website**: https://raiclark.nl

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

### Contact Form (Working)
Contact form in `ContactSection.tsx` uses **react-hook-form** and is fully functional.

**Implementation**:
- API Route: `/src/app/api/contact/route.ts`
- Email Service: **Resend** (https://resend.com)
- Sends emails to: `rai@raiclark.nl`
- Fields: Name, Email, Project Type, Message (Budget field removed 7 Dec 2024)

**Environment Setup**:
- Requires `RESEND_API_KEY` in `.env.local` (local dev)
- Must be added to Vercel environment variables (production)
- Get API key from: https://resend.com/api-keys

**Project Type Options**:
- Persoonlijk liedje
- Bruiloft
- Jubileum
- Verjaardag
- Bedrijf
- Content
- Anders

## Known TODOs

- Add real client testimonials (TestimonialsSection.tsx is archived - waiting for reviews)
- Add Google Analytics tracking
- Add loading screen animation
- Create custom 404 page design

## Performance Considerations

- Three.js and heavy animations may impact performance on low-end devices
- CustomCursor is disabled on mobile for performance
- Images should use Next.js Image component for optimization
- Spotify embeds are iframes (potential performance hit)

## Development & Deployment Workflow

### Standard Workflow
1. **Local Development** (on Windows PC)
   ```bash
   npm run dev
   # Server runs on http://localhost:3000
   # Test all changes locally first
   ```

2. **Commit & Push to GitHub**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```

3. **Automatic Deployment via Vercel**
   - Vercel monitors the GitHub repository
   - Automatically deploys on every push to `main` branch
   - Live site: https://raiclark.nl
   - Deployment takes ~1-2 minutes

### Environment Variables in Vercel
When deploying, ensure these environment variables are set in Vercel dashboard:

1. Go to https://vercel.com/dashboard
2. Select project: **rai-clark-website**
3. Navigate to: **Settings → Environment Variables**
4. Add required variables:
   - `RESEND_API_KEY` = your Resend API key (for contact form)
5. Select environments: **Production, Preview, Development**
6. After adding/changing variables: **Redeploy** the site

### First-Time Setup (Already Done)
- Repository: https://github.com/declerckroy-spec/rai-clark-website
- Hosting: Vercel (auto-deploys from GitHub)
- Domain: https://raiclark.nl (configured in Vercel)

---

## Changelog

### 7 December 2024 - Content Overhaul
**Major content rewrite with artistic focus**

**Changes:**
- ✅ All section texts rewritten (Hero, About, Services, Portfolio, Process, Special Moments)
- ✅ More emphasis on artistic work (releases, experimental tracks) alongside commissioned work
- ✅ Tone: nuchter, eerlijk, direct Nederlands - no AI-clichés or em-dashes
- ✅ Contact form now fully working (Resend API → rai@raiclark.nl)
- ✅ Budget field removed from contact form
- ✅ WhatsApp contact added: +31 6 28 20 64 10
- ✅ Instagram updated to: @rai.clark
- ✅ TestimonialsSection archived (no reviews available yet)
- ✅ Footer simplified: newsletter and quick links removed
- ✅ Hero subtitle changed: MUZIKANT → SONGWRITER
- ✅ Dependencies added: `resend` package for email functionality

**Content Philosophy:**
Site now clearly communicates dual purpose:
1. **Fansite**: Showcasing Het Beestenbal, Radio Clark (upcoming), experimental tracks
2. **Order Platform**: Personal songs, wedding music, corporate audio

**Technical:**
- API route: `/src/app/api/contact/route.ts`
- Environment variable required: `RESEND_API_KEY`
- All changes committed and pushed to GitHub
- Automatically deployed via Vercel
