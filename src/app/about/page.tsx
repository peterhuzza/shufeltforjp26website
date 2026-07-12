/**
 * AUTO-GENERATED FILE. Route: /about
 */
import AboutMePage3 from "@/components/pageType/AboutMePage3";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "canidate - About",
};

export default function GenPage() {
  const props = {
  "title": "",
  "content": [],
  "imageSrc": "/",
  "campaignBadge": "",
  "imageCap": "/",
  "aboutMe": {
    "moto": "We deserve better.",
    "backgroundSrc": "/",
    "imageSrc": "/",
    "altText": "test2",
    "emblemSrc": "/emblem.jpg",
    "emblemAlt": "test",
    "textunderbutton": "",
    "primaryLinkHref": "about",
    "primaryLinkLabel": "About",
    "secondaryLinkHref": "#agenda",
    "secondaryLinkLabel": "Agenda"
  },
  "midsectionContent": {
    "mapSrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1158.1777489322867!2d-94.1393751693038!3d36.17367285907689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c96b4e855dd46f%3A0x66c30db1f3a79ff!2sTaqueria%20Guanajuato%20Bar%20%26%20Grill!5e0!3m2!1sen!2sus!4v1782920908083!5m2!1sen!2sus",
    "content": [
      "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\" [link text](test)"
    ]
  },
  "candidateName": "canidate",
  "campaignName": "campaign",
  "email": "jamesshufelt@gmail.com",
  "facebookUrl": "test",
  "instagramUrl": "test",
  "tiktokUrl": "test",
  "blueskyUrl": "blueksystuff",
  "twitterUrl": "test",
  "volunteerUrl": "test"
};
  return <AboutMePage3 {...props} />;
}
