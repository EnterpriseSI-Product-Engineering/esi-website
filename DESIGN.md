# Ploy

## Mission
Create implementation-ready, token-driven UI guidance for Ploy that is optimized for consistency, accessibility, and fast delivery across marketing site.

## Brand
- Product/brand: Ploy
- URL: https://ploy.ai/
- Audience: buyers, teams, and decision-makers
- Product surface: marketing site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Geist`, `font.family.stack=Geist, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`
- Typography scale: `font.size.xs=12.16px`, `font.size.sm=14px`, `font.size.md=15.2px`, `font.size.lg=16px`, `font.size.xl=20px`, `font.size.2xl=20.8px`, `font.size.3xl=30px`, `font.size.4xl=48px`
- Color palette: `color.text.primary=#212121`, `color.text.secondary=#ffffff`, `color.text.tertiary=oklab(0.247757 0.0000112653 0.00000496209 / 0.72)`, `color.text.inverse=oklab(0.247757 0.0000112653 0.00000496209 / 0.55)`, `color.surface.base=#000000`, `color.surface.raised=#f4f4f4`, `color.surface.strong=oklab(0.999994 0.0000455678 0.0000200868 / 0.94)`
- Spacing scale: `space.1=4px`, `space.2=8px`, `space.3=12px`, `space.4=16px`, `space.5=20px`, `space.6=24px`, `space.7=32px`, `space.8=36px`
- Radius/shadow/motion tokens: `radius.xs=8px`, `radius.sm=1600px`, `radius.md=29826200px` | `shadow.1=rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455677 0.0000200868 / 0.8) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.55) 0px 18px 50px -12px`, `shadow.2=rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.45) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px` | `motion.duration.instant=150ms`, `motion.duration.fast=200ms`, `motion.duration.normal=300ms`, `motion.duration.slow=450ms`, `motion.duration.slower=500ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (84), buttons (32), cards (15), lists (9), navigation (4).


## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
