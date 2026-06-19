/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5fbff',
          100: '#eaf6ff',
          500: '#2563eb'
        }
        fontSize: {
        h1: ['var(--heading-size)', { lineHeight: 'var(--heading-line-height)' }],
        h2: ['var(--subheading-size)', { lineHeight: 'var(--subheading-line-height)' }],
        h3: ['var(--subsection-size)', { lineHeight: '1.3' }],
        body: ['var(--body-size)', { lineHeight: 'var(--body-line-height)' }],
        'feature-title': ['var(--feature-title-size)'],
        'feature-desc': ['var(--feature-desc-size)'],
        button: ['var(--button-size)'],
        nav: ['var(--nav-size)'],
        list: ['var(--list-size)'],
      },
      fontWeight: {
        heading: 'var(--heading-weight)',
        subheading: 'var(--subheading-weight)',
        subsection: 'var(--subsection-weight)',
        body: 'var(--body-weight)',
        'feature-title': 'var(--feature-title-weight)',
        button: 'var(--button-weight)',
        nav: 'var(--nav-weight)',
      },
    },
      boxShadow: {
        'soft-lg': '0 28px 90px rgba(15, 23, 42, 0.12)'
      }
    }
  },
  plugins: []
};
