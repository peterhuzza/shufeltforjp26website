import React from 'react';
import Button from "@/components/subcomponents/buttons/button";
import Image from 'next/image';

interface VolunteerPageProps {
  // Hero Section
  badgeText: string;
  heroTitle: string;
  heroSubtitle: string;

  // Image & Action Section 
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  iconImage: string;
  pageImage: string;
}

export default function VolunteerPage2({
  badgeText,
  heroTitle,
  heroSubtitle,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonLink,
  iconImage,
  pageImage
}: VolunteerPageProps) {

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center">

      {/* 1. HERO HEADER */}
      {/* 2. MAIN CONTENT AREA */}
      {/* Changed max-w-7xl to max-w-[1600px] and reduced padding from px-6 to px-2 lg:px-4 */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-2 lg:px-4 py-16">

        {/* Switched to a 12-column grid on large screens to control the exact ratio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT COLUMN: Image - Now spans 7 out of 12 columns, making it much wider */}
          <div className="hidden lg:block lg:col-span-7 relative w-full rounded-none overflow-hidden shadow-xl aspect-[16/9] bg-slate-100 order-1">
            <Image
              src={pageImage}
              alt="Volunteer Impact"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT COLUMN: CTA Card - Now spans 5 out of 12 columns */}
          <div className="order-2 lg:col-span-5 flex flex-col justify-center">
            <div className="bg-slate-50 p-8 lg:p-12 rounded-none border border-slate-200 shadow-sm flex flex-col items-center text-center">

              {/* Icon */}
              <div className="mb-8 flex justify-center">
                <div className="p-6 bg-white shadow-sm">
                  <Image
                    className="pb-2 pt-1"
                    src={iconImage}
                    alt={badgeText}
                    width={120}
                    height={120}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                {ctaTitle || "Ready to Serve?"}
              </h3>

              {/* Description */}
              <p className="text-base lg:text-lg text-slate-600 mb-10 leading-relaxed max-w-md">
                {ctaDescription || "Sign up today to receive updates on volunteer opportunities in your area."}
              </p>

              {/* Actions */}
              <div className="flex flex-col gap-6 items-center w-full max-w-sm">
                <Button
                  href={ctaButtonLink || "/not"}
                  variant="danger"
                  className="w-full py-5 px-8 text-xl shadow-lg"
                >
                  {ctaButtonText || "Sign Up Now"}
                </Button>

                {/* Link */}
                <a
                  href={ctaButtonLink}
                  className="block text-center text-base lg:text-lg text-brand-blue2 hover:underline font-medium"
                >
                  Learn more about opportunities
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
