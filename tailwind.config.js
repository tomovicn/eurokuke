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
                paper: {
                    DEFAULT: 'rgb(var(--paper) / <alpha-value>)',
                    2: 'rgb(var(--surface-2) / <alpha-value>)',
                },
                surface: 'rgb(var(--surface) / <alpha-value>)',
                ink: {
                    DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
                    2: 'rgb(var(--ink-2) / <alpha-value>)',
                    surface: 'rgb(var(--ink-surface) / <alpha-value>)',
                    line: 'rgb(var(--ink-line) / <alpha-value>)',
                    btn: 'rgb(var(--ink-line-btn) / <alpha-value>)',
                    text: 'rgb(var(--ink-text) / <alpha-value>)',
                    body: 'rgb(var(--ink-body) / <alpha-value>)',
                    muted: 'rgb(var(--ink-muted) / <alpha-value>)',
                    'btn-text': 'rgb(var(--ink-btn-text) / <alpha-value>)',
                },
                body: 'rgb(var(--body) / <alpha-value>)',
                muted: 'rgb(var(--muted) / <alpha-value>)',
                faint: 'rgb(var(--faint) / <alpha-value>)',
                line: {
                    DEFAULT: 'rgb(var(--line) / <alpha-value>)',
                    strong: 'rgb(var(--line-strong) / <alpha-value>)',
                    btn: 'rgb(var(--line-btn) / <alpha-value>)',
                },
                accent: {
                    DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
                    ink: 'rgb(var(--accent-ink) / <alpha-value>)',
                    soft: 'rgb(var(--accent-soft) / <alpha-value>)',
                    'on-ink': 'rgb(var(--accent-on-ink) / <alpha-value>)',
                },
            },
            fontFamily: {
                sans: ['var(--font-plex-sans)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
            },
            maxWidth: {
                container: '75rem',
            },
            letterSpacing: {
                label: '0.14em',
                chip: '0.08em',
                eyebrow: '0.16em',
            },
            typography: {
                DEFAULT: {
                    css: {
                        '--tw-prose-body': 'rgb(var(--body))',
                        '--tw-prose-headings': 'rgb(var(--ink))',
                        '--tw-prose-bold': 'rgb(var(--ink))',
                        '--tw-prose-bullets': 'rgb(var(--accent))',
                        '--tw-prose-counters': 'rgb(var(--accent))',
                        '--tw-prose-hr': 'rgb(var(--line-strong))',
                        '--tw-prose-quotes': 'rgb(var(--ink-2))',
                        '--tw-prose-quote-borders': 'rgb(var(--accent))',
                        '--tw-prose-captions': 'rgb(var(--faint))',
                        '--tw-prose-th-borders': 'rgb(var(--line-strong))',
                        '--tw-prose-td-borders': 'rgb(var(--line))',
                        maxWidth: 'none',
                        a: {
                            color: 'rgb(var(--accent))',
                            textDecoration: 'none',
                            borderBottom: '1px solid rgb(var(--accent-soft))',
                            fontWeight: '400',
                        },
                        // The design uses squared blocks throughout; prose
                        // defaults round nothing, but tables need the frame.
                        table: {
                            border: '1px solid rgb(var(--line-strong))',
                            backgroundColor: 'rgb(var(--surface))',
                        },
                        thead: { backgroundColor: 'rgb(var(--surface-2))' },
                        'thead th': {
                            fontFamily: 'var(--font-plex-mono), ui-monospace, monospace',
                            fontSize: '0.72em',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            fontWeight: '400',
                            color: 'rgb(var(--muted))',
                        },
                        'tbody td': { verticalAlign: 'top' },
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
