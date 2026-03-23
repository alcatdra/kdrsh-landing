# Landing Foundation Spec

## Goal

Create a production-ready Next.js landing page foundation for a premium-feeling children's swimming school. The repo should support block-by-block implementation with reusable sections, centralized content data, and a stable design system.

## Product Direction

- Audience: parents choosing a swimming school for a child.
- Brand signals: safety, trust, child development, modern service, calm premium positioning.
- Experience tone: soft, confident, airy, and emotionally reassuring.

## Technical Foundation

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- lucide-react
- next/image

## Current Scope

- Project bootstrap and dependency setup
- Theme tokens and typography
- Reusable layout and reveal primitives
- Landing sections wired through shared content arrays
- FAQ via shadcn accordion
- Placeholder visuals for team cards
- SEO metadata baseline

## Implementation Rules

- Keep repeated content in arrays or config modules.
- Prefer section-level components under `src/components/landing`.
- Keep foundational primitives under `src/components/shared`.
- Treat each new block as its own spec iteration.
- Avoid hardcoding repeated marketing content directly in page-level JSX.

## Next Iteration Workflow

1. Define a block-level spec.
2. Update data model or content arrays if needed.
3. Implement the section component.
4. Add motion, responsive checks, and semantic polish.
5. Validate with lint before moving to the next block.
