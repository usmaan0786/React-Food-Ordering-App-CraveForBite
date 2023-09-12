/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'food-image': "url('https://images.unsplash.com/photo-1634141613544-001d33883517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')"
      },
      fontFamily: {
        'inter': ['Inter', 'sans'],
        'luckiest-guy': ['Luckiest Guy', 'cursive'],
        'poppins': ['Poppins', 'sans'],
      },
    },
  },
  plugins: [],
};
