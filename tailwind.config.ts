import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        white: "#fff",
        "grey-grey-200": "#b9bdc7",
        lightslategray: "#858a94",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e3e3e3",
          "300": "#dedee0",
          "400": "#cfd9e3",
        },
        whitesmoke: "#f9f9f9",
        deepskyblue: "#3ba3dd",
        royalblue: {
          "100": "#637cff",
          "200": "#4a63e6",
        },
        steelblue: "#218ac4",
        black: "#000",
        gold: {
          "100": "#f4ed45",
          "200": "#dbd42b",
        },
        darkslategray: "#333",
        dimgray: {
          "100": "#5e5e5e",
          "200": "#585858",
          "300": "#493838",
        },
        "grey-grey-300": "#989fad",
        "grey-grey-800": "#383e49",
        silver: "#c2c4c8",
        "primary-primary-50": "#e8f1fd",
        "grey-grey-50": "#f7f9fc",
        "grey-grey-500": "#667085",
        "grey-grey-100": "#d0d3d9",
        "grey-grey-600": "#5d6679",
        "grey-grey-900": "#2b2f38",
        "violetgray-100": "#eae7ec",
        lightgray: "#d1cfd4",
        "violetgray-900": "#403a44",
        "violetgray-0": "#f8f7f9",
        "violet-base": "#faf1fe",
        "violet-500": "#9458ba",
        "gray-900": "#101828",
        slategray: {
          "100": "#666b7a",
          "200": "rgba(102, 107, 122, 0.09)",
        },
        "primary-primary-500": "#4990f2",
        dodgerblue: "#2e75d9",
        "primary-primary-600": "#1366d9",
        dashboard: "#eef0f2",
        "grey-grey-400": "#858d9d",
        gray1: "#262633",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "10xs": "3px",
        "8xs": "5px",
        "81xl": "100px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        roboto: "Roboto",
        "overline-medium": "Inter",
        archivo: "Archivo",
      },

      fontSize: {
        mini: "15px",
        
        lg: "18px",
        sm: "14px",
        xs: "12px",
        base: "16px",
        inherit: "inherit",
      },
      screens: {
        lg: {
          max: "1200px",
        },
        mq1050: {
          raw: "screen and (max-width: 1050px)",
        },
        mq750: {
          raw: "screen and (max-width: 750px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
