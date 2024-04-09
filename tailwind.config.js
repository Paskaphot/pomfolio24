/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];

export const theme = {
  extend: {
	colors: {
		"light": "#fbf5ea", //cream
		"dark": "#2B0D00", //brown #3d1200?
		"primary": "#cb3d00", //red
		"primary-light": "#fe9c72", //redlight
		"secondary": "#08742e", //green #288202 ?
		"secondary-light": "#d1f5d1", //greenlight #bbd2a4 ?
		"accent": "#8efd5e" //limelight
	  },
	  fontFamily: {
		'title': ['var(--font-calistoga-400)', 'Tahoma'],
		'body': '"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Arial, sans-serif',
	  },
  },
};

export const plugins = [];
