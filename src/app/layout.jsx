import "@/index.css";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import CTA from "@/components/common/CTA";
import Footer from "@/components/common/Footer";
import ClientProviders from "@/components/common/ClientProviders";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "EnterpriseSI - Accelerating Enterprise AI Journey",
  description:
    "Accelerating Enterprise SuperIntelligence Journeys. We are creating pathways for Enterprises to embrace Artificial General Intelligence for Digital Business Transformation.",
  icons: {
    icon: [
      { url: "/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/favicon.ico" },
    ],
    apple: [{ url: "/logo/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <CTA />
        <Footer />
        <ClientProviders />
      </body>
    </html>
  );
}
