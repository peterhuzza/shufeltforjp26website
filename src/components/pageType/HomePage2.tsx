import React from 'react';
import AboutSection from "@/components/Midsection/AboutSection";
import QuickLinksSection from "@/components/subcomponents/QuickLinks";
import BannerAboutMe from "@/components/HeroSection/BannerAboutMe";
import Midsection from "@/components/Midsection/midsection2";
// 1. Define the shape of the 'aboutMe' data
/*
 *
 *
 *
 * this is a test
 *
 *
 *
 *
 *
 *
 */
interface AboutMeData {
  backgroundSrc: string;
  //test
  imageSrc: string;
  altText: string;
  emblemSrc: string;
  emblemAlt: string;
  textunderbutton: string;
  // test
  primaryLinkHref: string;
  primaryLinkLabel: string;
  secondaryLinkHref: string;
  secondaryLinkLabel: string;
}

// 2. Define the shape of the 'midsection' data
// UPDATED: Added preview1 and preview2 to match Midsection requirements
//
//


interface MidsectionData {
  mapSrc: string;
  //test
  content: string | string[];
}

// 3. Define the main props for the Home component
interface HomeProps {
  aboutMe: AboutMeData;
  midsectionContent: MidsectionData;
}

export default function Home({ aboutMe, midsectionContent }: HomeProps) {

  // Hardcoded data has been removed. 
  // The component now relies on 'aboutMe' and 'midsectionContent' passed in as props.

  return (
    <main className="flex-grow">

      {/* Hero Section with Circular Headshot */}
      <BannerAboutMe
        backgroundSrc={aboutMe.backgroundSrc}
        imageSrc={aboutMe.imageSrc}
        altText={aboutMe.altText}
        emblemSrc={aboutMe.emblemSrc}
        emblemAlt={aboutMe.emblemAlt}
        textunderbutton={aboutMe.textunderbutton}
        primaryLinkHref={aboutMe.primaryLinkHref}
        primaryLinkLabel={aboutMe.primaryLinkLabel}
        secondaryLinkHref={aboutMe.secondaryLinkHref}
        secondaryLinkLabel={aboutMe.secondaryLinkLabel}
      />

      {/* 1.5 QUICK LINKS (Optional) */}
      {/* <QuickLinksSection /> */}

      {/* 1.7 NEW: LANDSCAPE IMAGE BANNER */}

      <div className="border-t-2 bg-gray-50 border-brand-blue">
        {/* 2. ABOUT/AGENDA SECTION */}
        <Midsection mapSrc={midsectionContent.mapSrc} content={midsectionContent.content} />
        {/* Add more sections here as the site grows */}
      </div>
    </main>
  );
}
