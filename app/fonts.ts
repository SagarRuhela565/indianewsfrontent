import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",   // hook into our Tailwind theme
  display: "swap",
});

// Times Newer Roman (local OTFs)
export const timesNewerRoman = localFont({
  src: [
    {
      path: "./assets/fonts/fonnts.com-TimesNewerRoman-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/fonnts.com-TimesNewerRoman-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./assets/fonts/fonnts.com-TimesNewerRoman-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./assets/fonts/fonnts.com-TimesNewerRoman-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-timesnewer", // this becomes a CSS variable
  display: "swap",
});
