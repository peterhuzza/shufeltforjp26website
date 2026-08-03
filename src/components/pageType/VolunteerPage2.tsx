import React from 'react';
import AboutSection from "@/components/midsection/AboutSection";
import Button from "@/components/buttons/button";
import Image, { StaticImageData } from 'next/image';

interface VolunteerPageProps {
  // Hero Section
  badgeText: string;
  heroTitle: string;
  heroSubtitle: string;

  // Left Column (Content)
  aboutTitle: string;
  aboutContent: string[];

  // Right Column (CTA Sidebar)
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  iconImage: string;
  pageImage: string;
}

export default function VolunteerPage1({
  badgeText,
  heroTitle,
  heroSubtitle,
  aboutTitle,
  aboutContent,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonLink,
  iconImage,
  pageImage
}: VolunteerPageProps) {

  return (
    <main className="min-h-screen bg-white flex flex-col">

      {/* 2. MAIN CONTENT AREA */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT COLUMN: Content (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg prose-slate max-w-none">
              {/* 
                 Note: AboutSection has internal bg-gray-50 and py-12. 
                 If you want to remove that, you might want to create a 
                 stripped-down version or style this div directly.
              */}
              <AboutSection
                title={aboutTitle}
                paragraphs={aboutContent}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: CTA Card (4 Cols) */}
          <div className="lg:col-span-4 sticky top-8">
            <div className="bg-slate-50 p-8 md:p-10 border border-slate-200 shadow-sm">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-white rounded-full shadow-sm">
                  <Image
                    className="object-contain"
                    src={iconImage}
                    alt={badgeText}
                    width={120}
                    height={120}
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                {ctaTitle || "Ready to Serve?"}
              </h3>

              <p className="text-slate-600 mb-8 text-sm leading-relaxed text-center">
                {ctaDescription || "Sign up today to receive updates on volunteer opportunities in your area."}
              </p>

              <div className="space-y-4 items-center">
                <Button
                  href={ctaButtonLink || "/signup"}
                  variant="refined"
                  className="w-full py-4 px-6 text-lg "
                >
                  {ctaButtonText || "Sign Up Now"}
                </Button>

                {/* Optional: Added a subtle link for less prominent action */}
                <a
                  href={ctaButtonLink}
                  className="block text-center text-sm text-brand-blue2 hover:underline py-4"
                >
                  Learn more about opportunities
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. SIMPLE FOOTER ACCENT */}
      <div className="bg-slate-50 py-12 border-t border-slate-100">
        <p className="text-center text-slate-400 text-sm">
          Questions? Contact our volunteer coordinator at support@example.com
        </p>
      </div>

    </main>
  );
}
