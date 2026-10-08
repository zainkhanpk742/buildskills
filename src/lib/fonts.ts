import { Noto_Nastaliq_Urdu } from "next/font/google";

/** Urdu text face. Not preloaded: the file is only fetched on Urdu pages. */
export const urduFont = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-urdu",
  display: "swap",
  preload: false,
});
