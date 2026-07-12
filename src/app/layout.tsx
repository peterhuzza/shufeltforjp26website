import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "canidate - Official Site",
  description: "Official campaign site for canidate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">

          <Header
            navLinks={ {'Home': '/', 'About': '/about', 'News': '/news', 'Volunteer': '/volunteer'} }
            candidateName="canidate"
            donationUrl="/donate"
          />

          <main className="flex-grow">
            {children}
          </main>

          <Footer
            candidateName="canidate"
            email="jamesshufelt@gmail.com"
            facebookUrl="test"
            instagramUrl="test"
            tiktokUrl="test"
            twitterUrl="test"
            blueskyUrl="blueksystuff"
            volunteerUrl="test"
          />

        </div>
      </body>
    </html>
  );
}
