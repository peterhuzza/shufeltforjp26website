import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaEnvelope, FaBluesky } from 'react-icons/fa6';
import Button from "@/components/buttons/button"
import { Twinkle_Star } from 'next/font/google';

interface FooterProps {
  candidateName: string;
  // Make these optional (?) so the site doesn't crash if one is missing
  facebookUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  email?: string;
  volunteerUrl?: string;
  twitterUrl?: string;
  blueskyUrl?: string;
}

export default function Footer({
  candidateName,
  facebookUrl,
  instagramUrl,
  tiktokUrl,
  email,
  blueskyUrl

}: FooterProps) {
  return (
    <footer className="py-8 border-t-2 bg-brand-blue border-t-inferno">
      <div className='container mx-auto px-6 flex flex-col md:flex-row justify-between items-start'>

        {/* LEFT SIDE: Socials & Copyright */}
        <div className="flex flex-col items-start justify-start">

          {/* Social Links */}
          <div className="flex space-x-6 mb-4">

            {/* FACEBOOK - Only render if URL exists */}
            {facebookUrl && (
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-facebook-logo hover:text-inferno transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
            )}
            {/* BLUESKY */}
            {blueskyUrl && (
              <a
                href={blueskyUrl}
                aria-label="Bluesky"
                className="text-white hover:text-mail-logo hover:text-inferno transition-colors "
              >
                <FaBluesky size={20} />
              </a>
            )}
            {/* INSTAGRAM */}
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-instagram-logo hover:text-inferno transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            )}

            {/* TIKTOK */}
            {tiktokUrl && (
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-white hover:text-tiktok-logo hover:text-inferno transition-colors"
              >
                <FaTiktok size={20} />
              </a>
            )}

            {/* EMAIL - Added 'mailto:' so it actually opens email app */}
            {email && (
              <a
                href={`mailto:${email}`}
                aria-label="Email"
                className="text-white hover:text-mail-logo hover:text-inferno transition-colors "
              >
                <FaEnvelope size={20} />
              </a>
            )}
            {/* EMAIL - Added 'mailto:' so it actually opens email app */}
          </div>

          {/* Copyright / Text */}
          <div className="text-left text-white text-sm">
            <p>&copy; {new Date().getFullYear()} {candidateName}. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="/privacy" className="hover:text-inferno transition">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Volunteer CTA */}
        <div className='mt-8 md:mt-0 flex flex-col items-start md:items-end space-y-2 py-5'>

          <Button href={"/volunteer"} className='px-8 py-3' variant='danger'>
            Volunteer for us!
          </Button>
        </div>

      </div>
    </footer>
  );
}
