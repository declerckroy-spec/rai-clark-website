# 🎵 Rai Clark - Producer & Componist Website

Een spectaculaire, visueel indrukwekkende one-page website voor Rai Clark, Nederlandse muziek producer en componist. Gebouwd met Next.js, TypeScript, Framer Motion, en Three.js.

## ✨ Features

### 🎨 Design & Aesthetics
- **Dark Theme** met neon accent kleuren (Electric Blue, Hot Pink, Vivid Yellow, Cyan)
- **Retro 80s/90s** invloeden met VHS-glitch effecten
- **3D Animaties** met Three.js in de Hero section
- **Custom Cursor** met verschillende states (vinyl plaat, particle explosie, waveform)
- **Parallax Scrolling** en smooth animaties

### 📱 Sections
1. **Hero** - 3D animated shape, grote typografie, Spotify CTA
2. **About** - Split layout met portretfoto en bio
3. **Services** - 3 service cards met hover effects
4. **Portfolio** - Spotify embed + featured albumhoes
5. **Special Moments** - Horizontal scroll occasions cards
6. **Process** - Animated timeline met LCD numbers
7. **Testimonials** - Marquee scroller met reviews
8. **Contact** - Functioneel form met validatie
9. **Footer** - Social links, newsletter signup

### 🎯 Interactive Elements
- **Custom Cursor** - Reageert op hover states
- **Magnetic Buttons** - Buttons trekken cursor aan
- **Spotify Floating Button** - Sticky button rechtsonder
- **Easter Egg** - Konami Code (↑↑↓↓←→←→BA) activates RAVE MODE! 🎉

### 🔍 SEO & Performance
- **Structured Data** (JSON-LD) voor Google
- **Open Graph** tags voor social sharing
- **Semantic HTML** met proper heading hierarchy
- **Optimized Images** met Next.js Image component
- **Lazy Loading** voor performance
- **Responsive** - Mobile-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ geïnstalleerd
- npm of yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
# or
yarn install
```

2. **Run development server:**
```bash
npm run dev
# or
yarn dev
```

3. **Open browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
rai-clark-website/
├── public/
│   └── images/
│       ├── rai-clark-portrait.jpg
│       └── het-beestenbal-album.png
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── CustomCursor.tsx
│       ├── Hero3D.tsx
│       ├── SpotifyFloatingButton.tsx
│       ├── EasterEggs.tsx
│       └── sections/
│           ├── HeroSection.tsx
│           ├── AboutSection.tsx
│           ├── ServicesSection.tsx
│           ├── PortfolioSection.tsx
│           ├── SpecialMomentsSection.tsx
│           ├── ProcessSection.tsx
│           ├── TestimonialsSection.tsx
│           ├── ContactSection.tsx
│           └── Footer.tsx
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Color Palette

```javascript
// Dark Base
'primary-black': '#0A0A0A'
'secondary-black': '#1A1A1A'
'charcoal': '#2A2A2A'

// Neon Accents
'electric-blue': '#0066FF'
'cyan-bright': '#00D4FF'
'magenta': '#FF00FF'
'hot-pink': '#FF0066'
'vivid-yellow': '#FFD700'
'neon-cyan': '#00FFFF'

// Retro
'vhs-purple': '#8B00FF'
'sunset-orange': '#FF6B35'
'arcade-green': '#00FF87'

// Spotify
'spotify-green': '#1DB954'
```

## 🔧 Configuration

### Update Contact Info

Edit `src/components/sections/ContactSection.tsx`:
```typescript
// Update email, Instagram handle, WhatsApp number
```

### Update Social Links

Edit `src/components/sections/Footer.tsx`:
```typescript
// Update Spotify artist ID, Instagram, email
```

### Spotify Artist ID

Current ID: `2fkKXGwlVqdj3FaPK7XLtH`

Found in:
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/PortfolioSection.tsx`
- `src/components/sections/Footer.tsx`
- `src/components/SpotifyFloatingButton.tsx`

### Replace Placeholder Content

1. **Testimonials** - Add real client reviews in `TestimonialsSection.tsx`
2. **Contact Info** - Update email, phone, social handles
3. **About Stats** - Update "10+ Jaar Ervaring", "100+ Projecten"

## 📝 Content Management

### Adding New Images

1. Place images in `/public/images/`
2. Use Next.js Image component:
```typescript
import Image from 'next/image';

<Image
  src="/images/your-image.jpg"
  alt="Description"
  fill
  className="object-cover"
/>
```

### Form Submission

Currently using placeholder form handler. To implement:

1. **Email Service** (e.g., SendGrid, Resend):
```typescript
// src/app/api/contact/route.ts
export async function POST(req: Request) {
  // Handle form submission
}
```

2. **Form Backend** (e.g., Formspree, Basin):
Update form action in `ContactSection.tsx`

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Netlify

```bash
npm run build
# Deploy /out directory
```

### Custom Server

```bash
npm run build
npm run start
# Or use PM2 for production
```

## 🎯 Performance Targets

- Lighthouse Score: 90+ on all metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## ♿ Accessibility

- WCAG AA compliant color contrast
- Keyboard navigation supported
- Screen reader friendly
- Focus indicators visible
- Reduced motion support via `prefers-reduced-motion`

## 🐛 Known Issues / TODO

- [ ] Implement actual form submission backend
- [ ] Add real client testimonials
- [ ] Replace placeholder project cards with real work
- [ ] Add Google Analytics tracking
- [ ] Implement newsletter subscription
- [ ] Add loading screen animation
- [ ] Create 404 page design
- [ ] Add more Easter eggs?

## 📄 License

© 2024 Rai Clark. All rights reserved.

## 🤝 Contact

**Rai Clark**
- Website: [raiclark.nl](https://raiclark.nl)
- Spotify: [Rai Clark](https://open.spotify.com/artist/2fkKXGwlVqdj3FaPK7XLtH)
- Instagram: [@raiclarkmusic](https://instagram.com/raiclarkmusic)
- Email: rai@raiclark.nl

---

**Built with** ❤️ **and code** by Claude Code

🎵 Make some noise! 🎵
