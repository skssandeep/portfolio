# Smart EPP Case Study — Full Audit Report

**Audited by:** Claude (UX Designer + Recruiter lens)  
**Date:** June 2026  
**File:** `src/pages/SmartEPPCaseStudy.tsx`

---

## Executive Summary

The case study is genuinely strong in its bones — real research data, honest reflection on failures, good visual hierarchy, and a compelling product story. But it has a structural obesity problem: **12 distinct content areas**, many repeating the same information in different containers. A recruiter spending 3–5 minutes on this page will hit fatigue before reaching the best parts. The cuts below are about signal-to-noise, not about removing quality.

**Overall Verdict:**  
Sections 01–06 are excellent. Sections 07–08 are good. Sections 11–12 at the bottom are the weakest and should be cut or rebuilt.

---

## Section-by-Section Breakdown

### 01. Intro & Stats
**Status: Strong — Minor cleanup needed**

The headline — *"Up to 40% of that phone is just tax. We built the system that gives it back."* — is the best line on the page. Keep it exactly as-is.

**Issues:**
- The 6-cell stats grid (MY ROLE, I WORKED WITH, PLATFORMS, TIMELINE, USER RESEARCH, DESIGN SYSTEM) has an **inconsistent label convention**. "MY ROLE" and "I WORKED WITH" are first-person. "PLATFORMS", "TIMELINE", "USER RESEARCH", "DESIGN SYSTEM" are category labels. Pick one format for all 6.
- "DESIGN SYSTEM: 44 components" contradicts the Problem section which says the design system was **"Existing — Built on OneAssist's library."** This will confuse a recruiter: did you build 44 components from scratch, or did you extend an existing library? Clarify: *"44 components built on OneAssist's existing design system."*
- The "I WORKED WITH" cell lists team members across two lines. This cell shape is awkward at narrower widths. Consider moving team info to a single line or removing it — recruiters care about *your* contribution, not the team size.

---

### 02. The Problem
**Status: Strong core, redundant scope grid**

The 5-challenge cards are sharp. "The Hardest One" full-width card is excellent.

**Issues:**
- **Project Scope grid is redundant with the Intro stats grid.** It repeats: 4 platforms, 5-month timeline, design system, 4 user types. You've already said all of this above. Cut this scope grid entirely. The narrative paragraphs on the left already tell the story better.
- "Why now: a 2023–24 tax change unlocked the savings. 30% income-tax relief plus 18% GST nets ~40% after financier interest." This sentence is great but appears in the secondary paragraph where skimmers miss it. It should be a callout — this is the *why* behind the entire product.

---

### 03. Research
**Status: Good — One image bug, one misleading stat**

**Issues:**
- **All 3 "The Fix" screenshots point to the same image** (`/images/smart-epp-calculator-screen.png`). Card 1 (Employee Confusion) showing the calculator makes sense. Card 2 (Employee Anxiety, about trust signals) and Card 3 (HR Friction, about the approval dashboard) both show the calculator screen. This is wrong. A recruiter clicking the HR card thumbnail to see the "Single-row approval dashboard" will see a calculator. Fix the images or remove the thumbnails from cards 2 and 3.
- The stat "8/12 flagged salary EMIs as their top fear" is a fragment of a 12-person subset. The stats grid earlier says "26 interviews across all 4 actor types." If you did 26 interviews, explain how you get from 26 to 12 employees. Otherwise it looks like you cherry-picked a smaller sample for a better-looking fraction.

---

### 04. Problem Reframe
**Status: Low impact — Cut or compress**

This section ("Stop designing 4 products. Design 1 system.") takes up a full section with 160px padding to show a visual diagram of: 4 boxes → 1 shared database → 4 views. This is a conceptual point that could be one paragraph inside the Problem section.

The most valuable thing in this section is buried at the very bottom: *"Designing this shared data model first cut design time by ~30%."* This is a concrete outcome — it should be a metric in the Outcomes section, not a footnote in a standalone section.

**Recommendation:** Delete the entire section. Move the data model insight as a bullet into the Reflection section under "System before screens." Move the "30% less design time" into the Outcomes metrics grid.

---

### 05. Design Exploration
**Status: Strong section — One misleading claim**

The 5-principle bento grid is the best-executed layout on the page. Sharp copy, good visual rhythm.

**Issues:**
- **"The Winning Formula: 2.4x Higher Conversion"** — The subheading promises 2.4x, and the comparison shows 68% (winner) vs 28% (minimal PDP). 68 ÷ 28 = 2.43x — technically correct. But the Guided Wizard card below it shows "44% Drop-off", not a conversion rate. These are **different metrics** being visually compared side-by-side. A recruiter will read this as "3 concepts were tested, winner beat all others by 2.4x" — which isn't what happened. The 44% drop-off number is a *drop-off rate*, not a conversion rate. Rename the Guided Wizard metric to make it apples-to-apples, or explain that the 2.4x is against the Minimal PDP only.
- The A/B results here (68%, 28%) are **repeated in Section 07 Outcomes** (68% PDP-to-cart conversion). This is the most repeated single metric on the page. Show it once where it has the most impact — Outcomes.

---

### 06. Final Solution (The 4-Tab Portal Showcase)
**Status: Best section on the page — Layout bug**

The tab-switching between Employee/HR/Financier/Seller portal mockups is smart and efficient. The CSS mockup table for HR is genuinely impressive as a portfolio artifact.

**Issues:**
- **Grid/Carousel toggle for the Employee tab adds decision fatigue.** The user must choose between "Carousel" and "Grid View" before seeing any screens. Recruiters don't want another choice — just show the screens. Default to a sensible grid at desktop width and remove the toggle.
- **System Foundations block** (below the tab section) is 4 cards: title, Design System, Accessibility, Edge Cases. "Inclusive by Design. High-contrast text and large touch targets ensure a frictionless experience." This is so generic it adds nothing. Every product claims this. If you have a specific WCAG metric or screen reader test result, use it. Otherwise cut the Accessibility card entirely.
- The "Edge Cases: Zero Dead Ends" card shows only 2 edge cases (HR Rejections, Out of Stock). This is underwhelming for a complex 4-party system with 15+ order states. Either show more real edge cases, or cut this card and reference edge case thinking in the Reflection section (which already exists).

---

### 07. Validation (Section 06 label)
**Status: Good — Heavily overlaps with Outcomes**

**Issues:**
- The 3 metric cards here (11/14 savings recall, 11sec HR approval, -60% anxiety) are essentially **previews of the Outcomes metrics**. 11/14 and "<12s" appear again word-for-word in Section 07 Outcomes. The section exists to show testing methodology, but it reads like a duplicate of the results.
- **Recommendation:** This section is doing the job of two things: (a) demonstrating testing process and (b) showing metrics. Keep only the process story here — the quote, the Key Pivot (users ignored the standalone "How it works" page), and the "What we missed" paragraph. Move all metric numbers to the Outcomes section. This creates a clean storyline: *Research → Design → Build → Test (how we did it) → Outcomes (what happened)*.

---

### 08. Outcomes & Impact (Section 07 label)
**Status: Strong — Over-attributed, one misleading frame**

**Issues:**
- **The Attribution Note is honest and earns credibility.** Keep it. It's rare to see a candidate acknowledge that a 68% conversion was influenced by novelty. Recruiters respect this.
- **"5 mo / MVP to launch" as an outcome metric is redundant.** This is already in the intro stats. Cut it from the outcomes grid — it's a timeline fact, not an outcome.
- **"0% HR program abandonment"** is a great metric but needs clarification: does this mean 0 enterprise clients churned the program? State it more precisely: *"0 enterprise clients churned in the 90 days post-launch."* Otherwise it sounds like a misleading absolute.
- **Success criteria card and Qualitative wins card are duplicative.** The Qualitative Wins card mentions "Support tickets: 'How do I calculate savings?' queries dropped to near-zero." The Success Criteria card shows "Employee cart conversion ≥ 50% → Hit (68%)." These are two sides of the same story but rendered as visually equal cards that feel like padding. Merge them.

---

### 09. Reflection (Section 08 label)
**Status: Strongest section for a recruiter — One cleanup needed**

The reflection grid is genuinely impressive: 4 concrete mistakes, the "edge cases are the product" insight, and a forward-looking "Next Iteration" card. This demonstrates senior designer maturity.

**Issues:**
- **"The Next Iteration" card reads like a list rather than a reflection.** It lists 3 items: power-user calculator, end-of-tenure flow, redesign of lessor/seller. This is product backlog, not reflection. Reframe: explain *why* you'd prioritize these, what constraints blocked them, or what you learned that led you here.
- This section is the most under-promoted. It's buried after 7+ sections of increasingly heavy content. A recruiter who doesn't make it here misses the best demonstration of your design maturity.

---

### 10. Design System & Assets (Section 11)
**Status: Cut immediately**

This section shows: 3 color swatches (Obsidian, Action Red, Primary Text), 2 typography specimens (Syne, JetBrains Mono), and two non-functional buttons: **"View Pitch Deck (PDF)"** and **"View Figma File."**

These buttons have no `href`, no `onClick` handler that navigates anywhere. They are dead UI. A recruiter who clicks either of these will think the portfolio is broken.

**This section actively hurts you.** Either wire up the Figma link (even a read-only view) or delete the entire section. A color swatch and two broken buttons add no design credibility.

---

### 11. Final Thoughts (Section 12)
**Status: Cut or rewrite**

The closing card contains:
- An icon (Target)  
- A third-person self-congratulatory quote: *"Smart EPP was a masterclass in designing for trust and low friction over pure aesthetics."*  
- A pill: *"Built with: Figma, Claude, & UX Pilot"*  
- A "Back to All Projects" button

**Issues:**
- The quote is written in third-person about your own work. It reads like a press release, not a designer's voice. The word "masterclass" is self-congratulatory and undermines the honest, grounded tone of the Reflection section.
- **"Built with: Figma, Claude, & UX Pilot"** — mentioning AI tools (Claude) in a UX portfolio case study will raise a red flag for many hiring managers. It's the equivalent of putting "Used Grammarly" in a writing portfolio. Remove this entirely.
- The "Back to All Projects" button is the only navigation at the bottom. It works, but the section around it adds no value. Cut the section; keep only the navigation button, styled simply, as a footer element.

**Replacement suggestion:** End with the Reflection section. Add a single centered "Next Project →" button. The reflection is a far stronger closing signal than a generic quote.

---

## Redundancy Map (Quick Reference)

| Content | Where it appears |
|---|---|
| Platforms: 4 (iOS, Android, Web) | Intro stats grid + Problem scope grid |
| Timeline: 5 months | Intro stats grid + Problem scope grid + Outcomes grid |
| Design system | Intro stats grid + Problem scope grid + System Foundations block |
| 68% conversion | Design Exploration A/B + Outcomes metrics |
| <12s HR approval | Research card label + Validation metric card + Outcomes metric card |
| 11/14 savings recall | Validation metric card + Outcomes metric card |
| "4 user types, 1 shared flow" | Intro description + Problem scope grid + Problem Reframe section |

---

## Misleading / Accuracy Issues

| Issue | Location | Fix |
|---|---|---|
| "44 components" vs "Existing — Built on OneAssist's library" | Stats grid vs Problem scope grid | Clarify: 44 new components built on top of OneAssist's base |
| HR Friction card thumbnail shows a calculator, not the HR approval screen | Research Section, Card 3 | Replace image with actual HR dashboard screenshot |
| "2.4x Higher Conversion" compares conversion % to drop-off % | Design Exploration | Use consistent metric types or remove the Guided Wizard comparison |
| "8/12 flagged salary EMIs" while headline says 26 interviews | Research Section | Clarify that 12 were the employee-specific subset of the 26 total |
| Dead buttons "View Pitch Deck" and "View Figma File" | Section 11 | Remove or wire them up |
| "Built with Claude" | Section 12 Final Thoughts | Remove entirely |

---

## Priority Cut List (Highest to Lowest Impact)

### Cut immediately
1. **Section 11 (Design System & Assets)** — Dead buttons, no value, actively damages credibility
2. **Section 12 "Final Thoughts" card** — Self-congratulatory quote + AI tool disclosure. Keep only the Back button
3. **Problem Scope Grid inside Section 02** — Entirely redundant with Intro stats
4. **Grid/Carousel toggle in Final Solution** — Unnecessary choice, adds friction

### Merge or compress
5. **Problem Reframe section** — Compress to one callout paragraph inside Section 02. Move "30% less design time" to Outcomes
6. **Validation section metrics** — Move all metric numbers to Outcomes. Keep only the process story (Key Pivot + What we missed)
7. **System Foundations block** (Accessibility + Edge Cases cards) — Cut Accessibility card. Compress Edge Cases to 1 sentence in Reflection

### Fix
8. **Research Section thumbnails** — Cards 2 and 3 both show the calculator screen; replace with the correct screens
9. **Stats grid label convention** — Standardize to all category labels or all first-person
10. **"44 components" vs "Existing library"** contradiction — Clarify with one sentence

---

## What's Working Well (Don't Touch)

- **Hero headline** — "Up to 40% of that phone is just tax. We built the system that gives it back." Extremely strong.
- **5-challenge cards in Problem section** — Well-framed, specific, shows systems thinking
- **Design Exploration principles** — The bento grid with numbered principles is the best-designed section
- **HR Portal CSS mockup** — Genuinely impressive; recruiters will remember it
- **Reflection grid** — "Edge cases are the product" is a standout insight. This is what separates senior candidates.
- **Attribution Note in Outcomes** — Rare honesty about metric limitations. Keep it exactly as-is.
- **"What we missed" in Validation** — Honest about the lessor/seller portal gap; shows self-awareness

---

## Ideal Page Flow After Cuts

```
Intro (headline + description + pills + mockup)
↓
Stats grid (4 cells, cleaned up — role, team, platforms, timeline)
↓
Problem (narrative + 5 challenges — no scope grid)
↓
Research (3 cards — fix thumbnails)
↓
Design Exploration (5 principles + A/B concepts — fix 2.4x framing)
↓
Final Solution (4-tab portals — remove carousel/grid toggle)
↓
Outcomes (6 metrics — merged with Validation results, attribution note kept)
↓
Validation (process only — Key Pivot + What we missed)
↓
Reflection (keep all 5 cards + reframe "Next Iteration")
↓
[Back / Next Project button]
```

This gets from 12 sections → 9 sections while removing all the redundancy and dead content.

---

*Sources consulted: [UX Case Study Structure — uxfol.io](https://blog.uxfol.io/ux-case-study-structure/), [11 UX Portfolio Red Flags — UX Playbook](https://uxplaybook.org/articles/11-common-ux-portfolio-mistakes-and-solutions), [IxDF: How to Write UX Case Studies](https://ixdf.org/literature/article/how-to-write-great-case-studies-for-your-ux-design-portfolio), [UX Portfolio for Senior Designers 2025 — UX Playbook](https://uxplaybook.org/articles/senior-ux-designer-portfolio-get-hired-2025)*
