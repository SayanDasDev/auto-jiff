import { BioRhyme, Sofia_Sans } from "next/font/google";

const fontSans = Sofia_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = BioRhyme({
  variable: "--font-mono",
  subsets: ["latin"],
});

function useFonts() {
  return { fontMono, fontSans };
}

export default useFonts;
