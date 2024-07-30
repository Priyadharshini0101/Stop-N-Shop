/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode:"class",
  theme: {
    screens: {lg: {max:"1440px"}, md: {max: "1050px"},sm: {max:"768px"}, xs:{max:"480px"}},
    extend: {
      boxShadow:{
        xs: "0 16px 50px #0000000c",
        sm: "0 16px 25px 0 #0000000c",
        md: "0 16px 50px 0 #00000026",
        lg: "0 16px 50px 0 #00000019",
      },
      colors: { 
        blue_gray: {100: "#cdcfd1", "100_7f": "#cdcfd17f"},
        white:{A700_82:"#ffffff82",A700:"#ffffff"},
        yellow:{400 :'#fae952'},
        gray:{50:'#f6f7fb',500 :'#9f9f9f', 800 :'#393d46', "500_7f":"#9f9f9f7f"},
        black:{"900_0c":"#0000000c","900_19":"#00000019","900_68":"#00000068","900_26":"#00000026"}
        },
      },
    },
  plugins: [],
}

