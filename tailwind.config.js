/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./static-export/**/*.html",
    ],
    theme: {
        extend: {
            colors: {
                'limitless-black': '#000000',
                'limitless-bg-secondary': '#0A0A0A',
                'limitless-white': '#FBFAFC',
                'limitless-purple': '#6214D9', // EXACT purple from template
                'limitless-green': '#1AFF75',  // Success/badge color
                'limitless-grey': '#999999',    // Secondary text
                'limitless-grey-dark': '#1a1a1a',
                'limitless-border': 'rgba(255, 255, 255, 0.1)',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            fontFamily: {
                'satoshi': ['Satoshi', 'sans-serif'],
                'instrument': ['Instrument Serif', 'serif'],
                'inter': ['Inter', 'system-ui', 'sans-serif'],
                'sans': ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
                'serif': ['Instrument Serif', 'Georgia', 'serif'],
            },
            fontSize: {
                'hero': ['100px', { lineHeight: '80px', letterSpacing: '-5px' }],
                'section': ['70px', { lineHeight: '84px', letterSpacing: '-3.5px' }],
            },
            animation: {
                'marquee': 'marquee 30s linear infinite',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'scale-hover': 'scaleHover 0.3s ease',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                scaleHover: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.02)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
