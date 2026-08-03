import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jane Doe - Official Site",
  description: "Official campaign site for Jane Doe.",
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
            navLinks={ {'Home Page': '/'} }
            candidateName="Jane Doe"
            donationUrl="/donate"
          />

          <main className="flex-grow">
            {children}
          </main>

          <Footer
            candidateName="Jane Doe"
            email=""
            facebookUrl=""
            instagramUrl=""
            tiktokUrl=""
            twitterUrl=""
            blueskyUrl=""
            volunteerUrl=""
          />

        </div>
      </body>
    </html>
  );
}
