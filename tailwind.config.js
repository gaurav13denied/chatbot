import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

// Design tokens copied from the ExpertHelp design export (colors, radii, spacing, fonts, type scale).
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: "class",
  theme: {
    "extend": {
      "colors": {
        "primary": "#00685f",
        "surface-container": "#eaedff",
        "tertiary-fixed": "#9cf2e8",
        "primary-container": "#008378",
        "secondary": "#006398",
        "secondary-container": "#5bb8fe",
        "primary-fixed-dim": "#6bd8cb",
        "primary-fixed": "#89f5e7",
        "outline-variant": "#bcc9c6",
        "on-tertiary": "#ffffff",
        "on-primary-fixed-variant": "#005049",
        "outline": "#6d7a77",
        "on-secondary-fixed": "#001d31",
        "on-surface": "#131b2e",
        "on-error": "#ffffff",
        "on-tertiary-container": "#f3fffc",
        "surface-container-highest": "#dae2fd",
        "on-secondary": "#ffffff",
        "inverse-on-surface": "#eef0ff",
        "on-primary-fixed": "#00201d",
        "error": "#ba1a1a",
        "on-secondary-container": "#00476e",
        "on-background": "#131b2e",
        "on-secondary-fixed-variant": "#004b73",
        "surface": "#faf8ff",
        "surface-tint": "#006a61",
        "secondary-fixed": "#cce5ff",
        "surface-container-low": "#f2f3ff",
        "tertiary": "#006860",
        "background": "#faf8ff",
        "error-container": "#ffdad6",
        "on-tertiary-fixed-variant": "#00504a",
        "on-error-container": "#93000a",
        "tertiary-container": "#248279",
        "surface-container-lowest": "#ffffff",
        "on-surface-variant": "#3d4947",
        "on-primary-container": "#f4fffc",
        "on-tertiary-fixed": "#00201d",
        "secondary-fixed-dim": "#93ccff",
        "surface-container-high": "#e2e7ff",
        "inverse-surface": "#283044",
        "inverse-primary": "#6bd8cb",
        "surface-dim": "#d2d9f4",
        "tertiary-fixed-dim": "#80d5cb",
        "surface-variant": "#dae2fd",
        "surface-bright": "#faf8ff",
        "on-primary": "#ffffff"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "space-sm": "0.5rem",
        "margin-mobile": "1.25rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "space-xs": "0.25rem",
        "gutter": "1.5rem",
        "space-md": "1rem",
        "margin": "3rem",
        "gutter-mobile": "1rem"
      },
      "fontFamily": {
        "headline-lg-mobile": [
          "Newsreader"
        ],
        "headline-lg": [
          "Newsreader"
        ],
        "display-lg-mobile": [
          "Newsreader"
        ],
        "label-sm": [
          "Manrope"
        ],
        "headline-sm": [
          "Manrope"
        ],
        "body-md": [
          "Manrope"
        ],
        "headline-md": [
          "Newsreader"
        ],
        "body-lg": [
          "Manrope"
        ],
        "body-sm": [
          "Manrope"
        ],
        "label-lg": [
          "Manrope"
        ],
        "label-md": [
          "Manrope"
        ],
        "display-lg": [
          "Newsreader"
        ]
      },
      "fontSize": {
        "headline-lg-mobile": [
          "1.75rem",
          {
            "lineHeight": "2.25rem",
            "letterSpacing": "-0.01em",
            "fontWeight": "500"
          }
        ],
        "headline-lg": [
          "2.25rem",
          {
            "lineHeight": "2.75rem",
            "letterSpacing": "-0.015em",
            "fontWeight": "500"
          }
        ],
        "display-lg-mobile": [
          "2.25rem",
          {
            "lineHeight": "2.75rem",
            "letterSpacing": "-0.01em",
            "fontWeight": "500"
          }
        ],
        "label-sm": [
          "0.6875rem",
          {
            "lineHeight": "0.875rem",
            "letterSpacing": "0.04em",
            "fontWeight": "700"
          }
        ],
        "headline-sm": [
          "1.25rem",
          {
            "lineHeight": "1.75rem",
            "letterSpacing": "-0.005em",
            "fontWeight": "600"
          }
        ],
        "body-md": [
          "1rem",
          {
            "lineHeight": "1.5rem",
            "fontWeight": "400"
          }
        ],
        "headline-md": [
          "1.75rem",
          {
            "lineHeight": "2.25rem",
            "letterSpacing": "-0.01em",
            "fontWeight": "500"
          }
        ],
        "body-lg": [
          "1.125rem",
          {
            "lineHeight": "1.75rem",
            "fontWeight": "400"
          }
        ],
        "body-sm": [
          "0.875rem",
          {
            "lineHeight": "1.25rem",
            "fontWeight": "400"
          }
        ],
        "label-lg": [
          "0.875rem",
          {
            "lineHeight": "1.25rem",
            "letterSpacing": "0.01em",
            "fontWeight": "600"
          }
        ],
        "label-md": [
          "0.75rem",
          {
            "lineHeight": "1rem",
            "letterSpacing": "0.02em",
            "fontWeight": "600"
          }
        ],
        "display-lg": [
          "3.5rem",
          {
            "lineHeight": "4rem",
            "letterSpacing": "-0.02em",
            "fontWeight": "500"
          }
        ]
      }
    }
  },
  plugins: [forms, containerQueries],
};
