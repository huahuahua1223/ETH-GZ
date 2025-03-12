import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'eth-blue': '#627EEA',
  		},
  		animation: {
  			'spin-slow': 'spin 20s linear infinite',
  			'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  		},
  		
  	}
  },
  plugins: [],
};
export default config;
