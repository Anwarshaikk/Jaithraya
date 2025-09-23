/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		fontSize: {
  			xs: '0.75rem',
  			sm: '0.875rem',
  			base: '1rem',
  			lg: '1.125rem',
  			xl: '1.25rem',
  			'2xl': '1.5rem',
  			'3xl': '1.875rem',
  			'4xl': '2.25rem',
  			'5xl': '3rem',
  			'6xl': '4rem'
  		},
  		spacing: {
  			'2': '0.5rem',
  			'4': '1rem',
  			'6': '1.5rem',
  			'8': '2rem',
  			'10': '2.5rem',
  			'12': '3rem',
  			'16': '4rem',
  			'20': '5rem',
  			'24': '6rem',
  			'32': '8rem',
  			'40': '10rem',
  			'48': '12rem',
  			'56': '14rem',
  			'64': '16rem',
  			'80': '20rem',
  			'96': '24rem'
  		},
  		boxShadow: {
  			soft: '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
  			elevated: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  		},
  		maxWidth: {
  			container: '1280px'
  		},
		colors: {
			saffron: {
				'50': '#fef7ed',
				'100': '#fdedd3',
				'200': '#fbd7a5',
				'300': '#f8b86d',
				'400': '#f59433',
				'500': '#f2760b',
				'600': '#e35d06',
				'700': '#bc4508',
				'800': '#96370e',
				'900': '#792f0f'
			},
			complementary: {
				'50': '#f0f9ff',
				'100': '#e0f2fe',
				'200': '#bae6fd',
				'300': '#7dd3fc',
				'400': '#38bdf8',
				'500': '#0ea5e9',
				'600': '#0284c7',
				'700': '#0369a1',
				'800': '#075985',
				'900': '#0c4a6e'
			},
			neutral: {
				'50': '#fafafa',
				'100': '#f5f5f5',
				'200': '#e5e5e5',
				'300': '#d4d4d4',
				'400': '#a3a3a3',
				'500': '#737373',
				'600': '#525252',
				'700': '#404040',
				'800': '#262626',
				'900': '#171717'
			},
			charcoal: {
				'50': '#f6f6f6',
				'100': '#e7e7e7',
				'200': '#d1d1d1',
				'300': '#b0b0b0',
				'400': '#888888',
				'500': '#6d6d6d',
				'600': '#5d5d5d',
				'700': '#4f4f4f',
				'800': '#454545',
				'900': '#1e1e1e'
			},
			teal: {
				'50': '#f0fdfa',
				'100': '#ccfbf1',
				'200': '#99f6e4',
				'300': '#5eead4',
				'400': '#2dd4bf',
				'500': '#14b8a6',
				'600': '#0d9488',
				'700': '#0f766e',
				'800': '#115e59',
				'900': '#134e4a'
			},
			saffronTeal: {
				analytics: {
					primary: '#f2760b',
					secondary: '#14b8a6',
					light: '#fef7ed',
					dark: '#0f766e'
				},
				automation: {
					primary: '#14b8a6',
					secondary: '#f2760b',
					light: '#f0fdfa',
					dark: '#bc4508'
				},
				digital: {
					primary: '#f2760b',
					secondary: '#0d9488',
					light: '#fef7ed',
					dark: '#115e59'
				},
				engagement: {
					primary: '#0d9488',
					secondary: '#f2760b',
					light: '#f0fdfa',
					dark: '#bc4508'
				},
				food: {
					primary: '#f2760b',
					secondary: '#2dd4bf',
					light: '#fef7ed',
					dark: '#0f766e'
				},
				lifestyle: {
					primary: '#e35d06',
					secondary: '#14b8a6',
					light: '#fdedd3',
					dark: '#115e59'
				},
				professional: {
					primary: '#0f766e',
					secondary: '#f2760b',
					light: '#f0fdfa',
					dark: '#bc4508'
				},
				retail: {
					primary: '#f2760b',
					secondary: '#0d9488',
					light: '#fef7ed',
					dark: '#134e4a'
				}
			},
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			}
		},
  		fontFamily: {
  			sans: [
  				'var(--font-inter)',
  				'system-ui',
  				'sans-serif'
  			],
  			display: [
  				'var(--font-poppins)',
  				'DM Sans',
  				'Satoshi',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
