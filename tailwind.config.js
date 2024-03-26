module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        screens: {
          'other': { 'min': '340px', 'max': '1023px' },
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        },
        colors: {
          darkbg: "#1E293B",
          blue: {
            850: "#7dd3fc"
          }
        }
      },
    },
    plugins: [],
}