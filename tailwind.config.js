import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1E2640",
        "background": "#353C53",
        "background-light": "#E6E6E6",
        "text": "#4D4D4D",
        "text-dark": "#1A181E",
        "secondary": "#146EB4"
      }
    },
  },
  plugins: [],
});