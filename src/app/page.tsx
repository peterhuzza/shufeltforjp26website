/**
 * AUTO-GENERATED FILE. Route: /
 */
import HomePage1 from "@/components/pageType/HomePage1";
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
    "backgroundSrc": "/",
    "imageSrc": "/",
    "altText": "",
    "emblemSrc": "/",
    "emblemAlt": "",
    "textunderbutton": "",
    "primaryLinkHref": "",
    "primaryLinkLabel": "",
    "secondaryLinkHref": "",
    "secondaryLinkLabel": ""
  },
  "midsectionContent": {
    "mapSrc": "/",
    "content": []
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
  return <HomePage1 {...props} />;
}
