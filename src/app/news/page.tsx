/**
 * AUTO-GENERATED FILE. Route: /news
 */
import Newspage1 from "@/components/pageType/newsPage1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates",
};

export default function GenPage() {
  const props = {
  "pageTitle": "Announcements",
  "pageSubtitle": "",
  "pageImage": "/",
  "items": [],
  "title": "",
  "content": [],
  "imageSrc": "/",
  "campaignBadge": "",
  "imagealt": "/",
  "imageCap": "/",
  "candidateName": "Stephane Shufelt",
  "campaignName": "Stephanie Shufelt for JP 5",
  "email": "jamesshufelt@gmail.com",
  "facebookUrl": "test",
  "instagramUrl": "test",
  "tiktokUrl": "test",
  "blueskyUrl": "blueksystuff",
  "twitterUrl": "test",
  "volunteerUrl": "test"
};
  return <Newspage1 {...props} />;
}
