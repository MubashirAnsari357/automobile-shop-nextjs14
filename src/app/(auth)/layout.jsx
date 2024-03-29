import { Arvo } from "next/font/google";
import "@/app/globals.css";
import ToastProvider from "@/components/ToastProvider";
const arvo = Arvo({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={arvo.className}>
        <main className="mx-auto">
          {children}
          <ToastProvider />
        </main>
      </body>
    </html>
  );
}
