import React from 'react';
import Button from "@/components/buttons/button";
import Image from 'next/image';

interface VolunteerPageProps {
  badgeText: string;
  heroTitle: string;
  heroSubtitle: string;
  imageSrc: string;
  altImage: string;
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
  imageSrc,
  altImage,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonLink,
  iconImage,
  pageImage
}: VolunteerPageProps) {

  return (
    <main className="min-h-screen bg-brand-color2 flex flex-col">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 w-full">
        <div className="bg-brand-color2 rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row border border-btn-base-start-secondary">

          {/* LEFT COLUMN: Image content (Hidden on mobile) */}
          <div className="hidden md:block lg:w-2/3 relative h-[500px] md:h-[600px]">
            <Image
              className="w-full h-full object-cover"
              src={imageSrc}
              alt={altImage}
              fill
            />
          </div>

          {/* RIGHT COLUMN: CTA Sidebar */}
          <div className="p-8 md:p-12 lg:w-1/3 bg-btn-base-start-secondary flex flex-col justify-center items-center text-center border-t lg:border-t-0 lg:border-l border-btn-base-start-secondary">
            <div className="mb-6 p-4 bg-brand-color1 rounded-lg shadow-sm bg-btn-base-start-secondary">
              <Image
                className="pb-2 pt-1"
                src={iconImage}
                alt={badgeText}
                width={120}
                height={120}
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {ctaTitle || "Ready to Serve?"}
            </h3>

            <p className="text-slate-600 mb-8 text-white leading-relaxed">
              {ctaDescription || "Sign up today to receive updates on volunteer opportunities in your area."}
            </p>

            <Button
              href={ctaButtonLink || "/not"}
              variant="danger"
              className="w-full py-4 px-6 text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {ctaButtonText || "Sign Up Now"}
            </Button>
          </div>

        </div>
      </div>
    </main>
  );
}
