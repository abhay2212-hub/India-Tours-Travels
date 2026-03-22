# Design System Document: The Editorial Voyager

## 1. Overview & Creative North Star
**Creative North Star: "The Modern Concierge"**

This design system is built to evoke the feeling of a high-end travel editorial—think *Condé Nast Traveler* meets a private digital gallery. We are moving away from the "booking engine" aesthetic. Instead, we treat every interface as a curated invitation. 

The system breaks the traditional rigid grid through **intentional asymmetry** and **tonal depth**. We use high-contrast typography to create a sense of authority, while spacious layouts (utilizing our expanded spacing scale) provide the "breathing room" associated with luxury. Elements should feel layered rather than placed, using surface transitions and glassmorphism to suggest a physical, tactile world of discovery.

---

## 2. Colors: Depth & Soul
Our palette is rooted in the "Golden Hour"—the transition from deep charcoal nights to the vibrant, warm glow of a sunset.

### The Palette
*   **Primary (`#ffb5a0`):** Use for high-energy accents. Transition to `primary_container` (`#ff5722`) for deep sunset gradients.
*   **Secondary (`#e9c349`):** Our "Refined Gold." Reserved for prestige markers, star ratings, or subtle high-end highlights.
*   **Surface Hierarchy (`#131313` - `#353534`):** Our foundation is "Deep Charcoal."

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections.
Boundaries must be created through:
1.  **Background Shifts:** A `surface_container_low` section sitting against a `surface` background.
2.  **Tonal Transitions:** Using the spacing scale to let negative space act as the divider.

### The "Glass & Gradient" Rule
To avoid a flat, "template" look, utilize **Glassmorphism** for floating navigation bars or destination cards. Use a semi-transparent `surface_container` with a `backdrop-blur` of 12px–20px. 
*   **Signature Texture:** For primary CTAs, apply a linear gradient from `primary` to `primary_container` at a 135-degree angle. This adds "visual soul" and prevents the UI from feeling digitally sterile.

---

## 3. Typography: The Editorial Voice
We pair the timeless elegance of **Noto Serif** (Headings) with the functional clarity of **Manrope** (Sans-serif Body).

*   **Display (L/M/S):** Noto Serif. Use for hero destination names. The large scale (`3.5rem`) is designed to command attention and convey exclusivity.
*   **Headline (L/M/S):** Noto Serif. Used for storytelling beats. These should always have generous line-height to maintain an editorial feel.
*   **Title (L/M/S):** Manrope. Used for UI-heavy labels where clarity is paramount (e.g., "Flight Details," "Package Includes").
*   **Body (L/M/S):** Manrope. Our workhorse. Ensure `body-lg` is used for introductory paragraphs to maintain a premium feel.
*   **Label (M/S):** Manrope. All-caps for a sophisticated, "metadata" look.

---

## 4. Elevation & Depth: Tonal Layering
In this system, depth is not a shadow—it is a **physical stack.**

### The Layering Principle
Instead of shadows, use our surface tiers:
*   **Base:** `surface` (#131313).
*   **Sectioning:** `surface_container_low` (#1c1b1b).
*   **Interactive Cards:** `surface_container` (#201f1f) or `surface_container_high` (#2a2a2a).
*   **Nesting:** Place a `surface_container_lowest` card inside a `surface_container_high` section to create a "recessed" or "inset" look without borders.

### Ambient Shadows & "Ghost Borders"
*   **Floating Elements:** When an element must float (like a "Book Now" bar), use a shadow with a 40px–60px blur at 6% opacity. The shadow color should be a tinted version of `surface_container_highest`.
*   **The Ghost Border:** If accessibility requires a stroke, use `outline_variant` at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components: Luxury Primitives

### Buttons
*   **Primary:** Rounded-xl (`1.5rem`). Gradient fill (Sunset Orange). No border. Label-md in `on_primary_fixed`.
*   **Secondary:** Rounded-xl. `outline_variant` (Ghost Border) with a `secondary` (Gold) text label.
*   **Tertiary:** Text-only with a subtle `primary` underline that expands on hover.

### Cards & Lists
*   **Destinations:** Large imagery with a `surface_container_lowest` overlay for text. **Prohibit divider lines.** Use `spacing-6` (2rem) as a vertical gap between list items to define separation.
*   **Glass Cards:** Use for "Quick Stats" (e.g., Temperature, Price). Surface: `surface_container_high` at 70% opacity + 15px Blur.

### Input Fields
*   **Style:** Minimalist. No box. Only a bottom "Ghost Border." Focus state shifts the border to `primary` and adds a subtle `surface_bright` background glow.

### Bespoke Travel Components
*   **The Itinerary Timeline:** Do not use a vertical line. Use a series of `surface_container_highest` dots connected by "empty space."
*   **The Curated Chip:** Use for categories (e.g., "Private Jet," "Safari"). Rounded-full, `surface_container_low` background, `secondary` (Gold) text.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical image layouts. Overlap a small image (with a `lg` rounded corner) over a large background image to create depth.
*   **Do** use `spacing-20` (7rem) between major sections to emphasize luxury through space.
*   **Do** use "Refined Gold" (`secondary`) sparingly—only for elements of high value or achievement.

### Don't:
*   **Don't** use pure black (#000000). Use our `surface` (#131313) to keep the shadows "soft" and sophisticated.
*   **Don't** use standard "drop shadows" (e.g., 0 2px 4px). They feel cheap. Always opt for wide, ambient blurs.
*   **Don't** crowd the interface. If you feel like you need a divider line, you actually need more whitespace (`spacing-8` or higher).