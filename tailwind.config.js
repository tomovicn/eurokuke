/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                ink: {
                    DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
                    2: 'rgb(var(--ink-2) / <alpha-value>)',
                },
                paper: {
                    DEFAULT: 'rgb(var(--paper) / <alpha-value>)',
                    2: 'rgb(var(--paper-2) / <alpha-value>)',
                },
                accent: {
                    DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
                    ink: 'rgb(var(--accent-ink) / <alpha-value>)',
                },
                line: { DEFAULT: 'rgb(var(--line) / <alpha-value>)', dark: 'var(--line-dark)' },
                muted: { DEFAULT: 'rgb(var(--muted) / <alpha-value>)', dark: 'var(--muted-dark)' },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-archivo)', 'var(--font-inter)', 'sans-serif'],
            },
            maxWidth: {
                container: '72rem',
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: 'rgb(var(--ink))',
                        a: { color: 'rgb(var(--accent))', '&:hover': { color: 'rgb(var(--accent))' } },
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}; 