/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Theme-1 Backgrounds
        "Very-Dark-Desaturated-Blue-Main-Background": "hsl(222, 26%, 31%)",
        "Very-Dark-Desaturated-Blue-Toggle-Background-Keypad-Background":
          "hsl(223, 31%, 20% )",
        "Very-Dark-Desaturated-Blue-Screen-Background": "hsl(224, 36%, 15%)",

        // Theme-1 Keys
        "Desaturated-Dark-Blue-Key-Background": "hsl(225, 21%, 49%)",
        "Desaturated-Dark-Blue-Key-Shadow": "hsl(224, 28%, 35%)",

        "Red-Key-Background-Toggle": "hsl(6, 63%, 50%)",
        "Dark-Red-Key-Shadow": "hsl(6, 70%, 34%)",

        "Light-Grayish-Orange-Key-Background": "hsl(30, 25%, 89%)",
        "Grayish-Orange-Key-Shadow": "hsl(28, 16%, 65%)",

        // Theme-1 Texts
        "Very-Dark-Grayish-Blue": "hsl(221, 14%, 31%)",
        White: "hsl(0, 0%, 100%)",

        // Theme-2 Backgrounds
        "Light-Gray-Main-Background": "hsl(0, 0%, 90%)",
        "Grayish-Red-Toggle-Background-Keypad-Background": "hsl(0, 5%, 81%)",
        "Very-Light-Gray-Screen-Background": "hsl(0, 0%, 93%)",

        // Theme-2 Keys
        "Dark-Moderate-Cyan-Key-Background": "hsl(185, 42%, 37%)",
        "Very-Dark-Cyan-Key-Shadow": "hsl(185, 58%, 25%)",
        "Orange-Key-Background-Toggle": "hsl(25, 98%, 40%)",
        "Dark-Orange-Key-Shadow": "hsl(25, 99%, 27%)",
        "Light-Grayish-Yellow-Key-Background": "hsl(45, 7%, 89%)",
        "Dark-Grayish-Orange-Key-Shadow": "hsl(35, 11%, 61%)",

        // Theme-2 Text
        "Very-Dark-Grayish-Yellow": "hsl(60, 10%, 19%)",
        "White-Text": "hsl(0, 0%, 100%)",

        // Theme-3 Backgrounds
        "Very-Dark-Violet-Main-Background": "hsl(268, 75%, 9%)",
        "Very-Dark-Violet-Toggle-Background-Keypad-Background-Screen-Background":
          "hsl(268, 71%, 12%)",

        // Theme-3 Keys
        "Dark-Violet-Key-Background": "hsl(281, 89%, 26%)",
        "Vivid-Magenta-Key-Shadow": "hsl(285, 91%, 52%)",
        "Pure-Cyan-Key-Background-Toggle": "hsl(176, 100%, 44%)",
        "Soft-Cyan-Key-Shadow": "hsl(177, 92%, 70%)",
        "Very-Dark-Violet-Key-Background": "hsl(268, 47%, 21%)",
        "Dark-Magenta-Key-Shadow": "hsl(290, 70%, 36%)",

        // Theme-3 Text
        "Light-Yellow": "hsl(52, 100%, 62%)",
        "Very-Dark-Blue": "hsl(198, 20%, 13%)",
      },
    },
  },
  plugins: [],
};
