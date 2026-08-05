/**
 * AUTO-GENERATED FILE. Route: /volunteer
 */
import Volunteerpage1 from "@/components/pageType/volunteerPage1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jane Doe - Volunteer",
};

export default function GenPage() {
  const props = {
  "badgeText": "text",
  "heroTitle": "(Templat example) Volunteer",
  "heroSubtitle": "page",
  "imageSrc": "/image.jpg",
  "altImage": "image 1",
  "ctaTitle": "title",
  "ctaDescription": "discription",
  "ctaButtonText": "button",
  "ctaButtonLink": "/",
  "iconImage": "/image2.jpg",
  "pageImage": "image 2",
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
  return <Volunteerpage1 {...props} />;
}
