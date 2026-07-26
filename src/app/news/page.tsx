/**
 * AUTO-GENERATED FILE. Route: /news
 */
import NewsPage1 from "@/components/pageType/NewsPage1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates",
};

export default function GenPage() {
  const props = {
  "pageTitle": "Announcements from the Transition",
  "pageSubtitle": "Press Room",
  "items": [],
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
  return <NewsPage1 {...props} />;
}
