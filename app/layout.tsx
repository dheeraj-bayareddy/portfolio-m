import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter } from "next/font/google";
import { ThemeProvider, THEME_INIT_SCRIPT } from "@/lib/theme-context";
import { LanguageProvider } from "@/lib/language-context";
import { Background } from "@/components/backgrounds/Background";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dheeraj Kadadalamari Bayareddy — Data & ML Portfolio",
  description:
    "M.Sc. Data Science — ML & Data Engineering. Building practical ML systems, from deep learning to real-time data pipelines.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <ThemeProvider>
          <LanguageProvider>
            <Background />
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
            {/*
              Future chat widget mounts here as a fixed bottom-right element,
              e.g. <ChatWidget /> rendered as a sibling after Footer — it will
              call /app/api/chat client-side and needs no layout changes.
            */}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
