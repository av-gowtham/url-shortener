/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                border: "var(--color-border)",
                input: "var(--color-input)",
                ring: "var(--color-ring)",
                background: "var(--color-background)",
                foreground: "var(--color-foreground)",
                primary: "var(--color-primary)",
                "primary-foreground": "var(--color-primary-foreground)",
                secondary: "var(--color-secondary)",
                "secondary-foreground": "var(--color-secondary-foreground)",
                muted: "var(--color-muted)",
                "muted-foreground": "var(--color-muted-foreground)",
                accent: "var(--color-accent)",
                "accent-foreground": "var(--color-accent-foreground)",
                destructive: "var(--color-destructive)",
                card: "var(--color-card)",
                "card-foreground": "var(--color-card-foreground)",
                popover: "var(--color-popover)",
                "popover-foreground": "var(--color-popover-foreground)",
            },
        },
    },
    plugins: [],
};
