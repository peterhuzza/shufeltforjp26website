/**
 * AUTO-GENERATED FILE. Route: /
 */
import Homepage1 from "@/components/pageType/homePage1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jane Doe - Home",
};

export default function GenPage() {
  const props = {
  "title": "",
  "content": [],
  "imageSrc": "/",
  "aboutMe": {
    "moto": "",
    "backgroundSrc": "/image2.jpg",
    "imageSrc": "/image.jpg",
    "altText": "",
    "emblemSrc": "/image3.jpg",
    "emblemAlt": "",
    "textunderbutton": "",
    "primaryLinkHref": "",
    "primaryLinkLabel": "",
    "secondaryLinkHref": "",
    "secondaryLinkLabel": ""
  },
  "midsectionContent": {
    "mapSrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357974.2440515147!2d-94.76853192267427!3d34.72354462866459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d29e3f743f2761%3A0xa405693effdfd2d0!2sArkansas!5e0!3m2!1sen!2sus!4v1785828546140!5m2!1sen!2sus",
    "content": [
      "# Getting Started with the Configurator",
      "Welcome to the **dynamic routing engine**. This project is designed to give you ultimate control over your site structure without manual file management.",
      "## How to Build Your Site",
      "1. **Configure**: Use the configurator to define your site's routes and structure. Routes are automatically generated in `src/app`.",
      "2. **Customize**: Edit the UI components in `src/components` to match your brand identity.",
      "3. **Deploy**: Use the `Makefile` or `Docker` setup to manage your production environment.",
      "## Core Architecture",
      "- **Modularity**: Every page is built from atomic `subcomponents`.",
      "- **Flexibility**: Swap layouts, headers, and footers instantly.",
      "- **Performance**: Powered by Next.js App Router and optimized for speed."
    ]
  },
  "campaignBadge": "",
  "imageCap": "/",
  "candidateName": "Jane Doe",
  "campaignName": "Jane for Council",
  "email": "",
  "facebookUrl": "",
  "instagramUrl": "",
  "tiktokUrl": "",
  "blueskyUrl": "",
  "twitterUrl": "",
  "volunteerUrl": ""
};
  return <Homepage1 {...props} />;
}
