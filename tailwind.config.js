/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SFPro', 'sans-serif'],
        display: ['SFProDisplay', 'sans-serif']
      },
      colors: {
        'text': '#181921',
        'border': '#f8fafc',
        'accent-primary': '#ff6b00',
        'accent-border': '#ffd3b3',
        'accent-red': '#ff3b30',
        'red': '#FF3B30',
        'gray-primary': {
          100: '#f5f5f5',
          200: '#c8c8c8',
          300: '#b3b3b4'
        }
      },
      fontSize: {
        header: ['40px', {
          letterSpacing: '0px'
        }],
        h1: ['28px', {
          letterSpacing: '-1.45px'
        }],
        body: ['20px', {
          letterSpacing: '-1px',
          lineHeight: '1'
        }],
        caption: ['14px', {
          letterSpacing: '-0.08px',
          lineHeight: '10px'
        }]
      },
      width: {
        3.5: '13px'
      },
      container: {
        center: true,
        screens: {
          sm: '676px',
          md: '676px',
          lg: '676px',
          xl: '676px'
        },
        padding: {
          'DEFAULT': '0rem',
          'sm': '0rem',
          'lg': '0rem',
          'xl': '0rem',
          '2xl': '0rem'
        }
      },
      spacing: {
        0: '0px',
        px: '1px',
        0.5: '2px',
        1: '4px',
        1.5: '6px',
        2: '8px',
        2.5: '10px',
        3: '12px',
        3.5: '14px',
        4: '16px',
        5: '20px',
        5.5: '22px',
        6: '24px',
        6.5: '26px',
        7: '28px',
        8: '32px',
        9: '36px',
        9.5: '38px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
        36: '144px',
        40: '160px',
        44: '176px',
        48: '192px',
        52: '208px',
        56: '224px',
        60: '240px',
        64: '256px',
        72: '288px',
        80: '320px',
        96: '384px'
      }
    }
  }
}
