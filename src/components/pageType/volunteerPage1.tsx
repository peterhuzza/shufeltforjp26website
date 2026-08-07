import React from 'react';
import Button from "@/components/buttons/button";
import { PublicImage } from '@/utils/getImage';

interface VolunteerPageProps {
  badgeText: string;
  imageSrc: string;
  altImage: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  iconImage: string;
}

export default function VolunteerPage1({
  badgeText,
  imageSrc,
  altImage,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonLink,
  iconImage,
}: VolunteerPageProps) {

  return (
    <main className=" justify-center h-[70vh] min-h-screen bg-white flex flex-col">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="bg-white shadow-lg overflow-hidden flex flex-col lg:flex-row border border-transparent">

          {/* LEFT COLUMN: Image content (Hidden on mobile) */}
          <div className="hidden md:block lg:w-2/3 relative h-[500px] md:h-[600px]">
            <PublicImage
              className=" object-cover"
              src={imageSrc}
              alt={altImage}
              fill
            />
          </div>

          {/* RIGHT COLUMN: CTA Sidebar */}
          <div className="p-12 md:p-12 lg:w-1/3 bg-plat flex flex-col justify-center items-center text-center border-t lg:border-t-0 lg:border-l-2 border-inferno">
            <div className="mb-6 pt-4 p-1 shadow-sm bg-white">
              <PublicImage
                className="pb-2 pt-1"
                src={iconImage}
                alt={badgeText}
                width={240}
                height={240}
              />
            </div>

            <h3 className="text-2xl font-bold text-black mb-3">
              {ctaTitle || "Volunteer"}
            </h3>

            <p className="text-slate-600 mb-8 leading-relaxed pb-6 border-b-2 border-b-inferno">
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
