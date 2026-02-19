# Personal Website

This is a Next.js App Router site for Brian Wumutijiang.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Glass Design System

The UI uses a tokenized frosted-glass system inspired by modern translucent interfaces.

### Tokens

All visual tokens live in:

- `src/app/design-tokens.css`

Key token groups:

- Background: `--bg-0`, `--bg-1`
- Glass surfaces: `--glass-1`, `--glass-2`
- Strokes: `--stroke-1`, `--stroke-2`
- Shadows: `--shadow-1`, `--shadow-2`
- Blur: `--blur-strong`, `--blur-med`
- Radius: `--r-pill`, `--r-card`, `--r-tile`
- Spacing scale: `--space-3` (12px), `--space-4` (16px), `--space-5` (20px), `--space-6` (24px), `--space-8` (32px)

Accessibility-specific token overrides are included for:

- `prefers-contrast: more`
- `prefers-reduced-transparency: reduce`

### Glass Components

Reusable primitives are in:

- `src/components/glass/GlassPill.tsx`
- `src/components/glass/GlassCard.tsx`
- `src/components/glass/GlassTile.tsx`
- `src/components/glass/GlassButton.tsx`

Example usage:

```tsx
import { GlassButton, GlassCard, GlassPill, GlassTile } from "@/components/glass";

<GlassPill as="header">...</GlassPill>
<GlassCard as="section" className="card">...</GlassCard>
<GlassTile>...</GlassTile>
<GlassButton href="/projects">View Projects</GlassButton>
```

### Where To Tweak The Look

- Global material/background behavior: `src/app/globals.css`
- Token values (blur, tint, border, radius): `src/app/design-tokens.css`
- Root pill header structure: `src/components/AppShell.tsx`
- Homepage tile/card composition: `src/app/page.tsx`
