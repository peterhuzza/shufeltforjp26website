import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';
import Button from '@/components/buttons/button';
import { PublicImage } from '@/utils/getImage';
import { StaticImageData } from 'next/image';

interface VolunteerContactProps {
  pageTitle: string;
  subtitle: string;
  iconImage: string | StaticImageData;
  iconAlt: string;
  phone: string;
  email: string;
  note: string;
}

export default function VolunteerContactPage1({
  pageTitle,
  subtitle,
  iconImage,
  iconAlt,
  phone,
  email,
  note,
}: VolunteerContactProps) {

  return (
    <main className="min-h-screen bg-white flex flex-col justify-center py-16 px-4">
      <div className="max-w-2xl mx-auto w-full">

        <div className="bg-plat shadow-lg border border-[#F1F1F1] lg:border-l-2 lg:border-inferno p-12 md:p-16 flex flex-col items-center text-center">

          {/* Emblem */}
          <div className="mb-6 pt-4 p-1 shadow-sm">
            <PublicImage
              className="pb-2 pt-1"
              src={iconImage}
              alt={iconAlt}
              width={240}
              height={240}
            />
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-3">
            {pageTitle || "Volunteer"}
          </h1>

          <p className="text-slate-600 mb-10 leading-relaxed pb-6 border-b-2 border-b-inferno max-w-md">
            {subtitle || "The best way to help the campaign is to reach out directly."}
          </p>

          {/* Contact details */}
          <div className="w-full space-y-4 mb-10">

            {phone && (
              <a
                href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center justify-center space-x-3 text-lg text-gray-900 hover:text-inferno transition-colors duration-300"
              >
                <FaPhone size={18} className="text-inferno" />
                <span className="font-semibold">{phone}</span>
              </a>
            )}

            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center space-x-3 text-lg text-gray-900 hover:text-inferno transition-colors duration-300"
              >
                <FaEnvelope size={18} className="text-inferno" />
                <span className="font-semibold">{email}</span>
              </a>
            )}

          </div>

          {/* Optional note + donate CTA */}
          {note && (
            <p className="text-sm text-gray-500 mb-8 max-w-sm">{note}</p>
          )}

          <Button
            href="https://secure.actblue.com/donate/shufeltforjp5"
            variant="danger"
            className="px-8 py-3"
          >
            Donate
          </Button>

        </div>
      </div>
    </main>
  );
}
