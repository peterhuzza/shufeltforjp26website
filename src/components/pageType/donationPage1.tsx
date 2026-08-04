import React from 'react';
import AboutSection from "@/components/midsection/aboutSection";
import QuickLinksSection from "@/components/subcomponents/quickLinks";
import BannerAboutMe from "@/components/heroSection/bannerAboutMe";
import Midsection from "@/components/midsection/midsection";
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
  moto: string;
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
    <main className="items-center justify-center ">
      <div className='items-flex`'>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
