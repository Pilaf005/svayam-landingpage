# Svayam Incarnation

## Mission
Create implementation-ready, token-driven UI guidance for Svayam Incarnation that is optimized for consistency, accessibility, and fast delivery across marketing site.

## Brand
- Product/brand: Svayam Incarnation
- URL: https://www.svayam.in/
- Audience: buyers, teams, and decision-makers
- Product surface: marketing site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Segoe UI`, `font.family.stack=Segoe UI, SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif`, `font.size.base=14px`, `font.weight.base=400`, `font.lineHeight.base=21px`
- Typography scale: `font.size.xs=10.24px`, `font.size.sm=12px`, `font.size.md=12.8px`, `font.size.lg=13px`, `font.size.xl=14px`, `font.size.2xl=14.4px`, `font.size.3xl=16px`, `font.size.4xl=18px`
- Color palette: `color.text.primary=#212529`, `color.text.secondary=#999999`, `color.text.tertiary=#ffffff`, `color.text.inverse=#414141`, `color.surface.base=#000000`, `color.surface.muted=#333333`, `color.surface.raised=#0067b8`
- Spacing scale: `space.1=2px`, `space.2=4px`, `space.3=5px`, `space.4=6px`, `space.5=7px`, `space.6=8px`, `space.7=9.38px`, `space.8=10px`
- Radius/shadow/motion tokens: `radius.xs=3px`, `radius.sm=7px` | `shadow.1=rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px` | `motion.duration.instant=100ms`, `motion.duration.fast=300ms`

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
- Include known page component density: links (55), lists (19), cards (4), navigation (2).

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
