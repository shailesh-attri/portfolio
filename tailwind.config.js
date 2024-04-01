/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          fill: '#1b6ff7',
          stroke: '#1b6ff7',
        },
        gray: {
          1: 'var(--gray-1)',
          2: 'var(--gray-3)',
          3: 'var(--gray-5)',
          4: 'var(--gray-6)',
          5: 'var(--gray-10)',
          6: 'var(--gray-9)',
          7: 'var(--gray-8)',
          8: 'var(--gray-7)',
          9: 'var(--gray-10)', // You can adjust these values according to your needs
          10: 'var(--gray-9)', // You can adjust these values according to your needs
        },
        surface:{
          1: 'var(--gray-10)',
          2: 'var(--gray-9)',
          3: 'var(--gray-8)',
          4: 'var(--gray-7)',
        },
        text:{
          1: 'var(--text-1)',
          2: 'var(--text-2)',
          3: 'var(--text-3)',
          4: 'var(--text-4)',
        }
      },
    },
  },
  plugins: [],
};
