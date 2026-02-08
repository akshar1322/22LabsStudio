# 22Labs Studio - Cinematic 3D Website

An ultra-high-end, cinematic website for a 3D & CG art studio, built with Next.js 14, Tailwind CSS, GSAP, and Lenis.

## Features

- **Cinematic Visuals**: Dark theme, noise overlays, and parallax backgrounds.
- **Smooth Scrolling**: Implemented with Lenis for a premium feel.
- **Video Hero**: Fullscreen cinematic background video with overlay.
- **Micro-interactions**: Hover effects, magnetic buttons, and reveal animations.
- **Performance**: Optimized with Next.js App Router and static generation.
- **Tech Stack**:
    - Next.js 14 (App Router)
    - Tailwind CSS
    - GSAP (ScrollTrigger)
    - Lenis (Smooth Scroll)
    - Framer Motion (Transitions)
    - TypeScript
    - Nodemailer (Email System)

## Getting Started

1. **Install dependencies**:
    ```bash
    npm install
    ```

2. **Configure Environment Variables**:
    Copy `.env.example` to `.env.local` and update the values.
    ```bash
    cp .env.example .env.local
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    ```

4. **Open the browser**:
    Navigate to [http://localhost:3000](http://localhost:3000).

## Customization

- **Theme Colors**: Edit `tailwind.config.ts` to change `--accent` color.
- **Content**: Update arrays in `app/components/sections/` files.
- **Email System**: Uses Nodemailer. Configure SMTP settings in `.env.local`.
# 22LabsStudio
