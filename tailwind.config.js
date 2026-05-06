/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // v2.2 brand tokens (locked in The Agoge Method bundle v2.2)
        ink:        '#0A0A0A',
        paper:      '#F4EFE6',
        gold:       '#C9A24A',
        'gold-deep':'#8C6E25',
        'gold-pale':'#E8D9A8',
        ash:        '#6E6A60',
        hairline:   '#C9C2B2',
        emerald:    '#2EBE5C',
        crimson:    '#A12C2C',
        // legacy aliases (existing components still reference these)
        obsidian:   '#0A0A0A',
        bronze:     '#C9A24A',
      },
      fontFamily: {
        // v2.2 specifies DM Serif Display for headings; keep Cinzel as a fallback
        // until the font swap is fully exercised.
        serif: ['"DM Serif Display"', '"Cinzel"', 'serif'],
        mono:  ['"JetBrains Mono"', 'monospace'],
        sans:  ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
