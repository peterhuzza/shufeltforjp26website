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
  "pageTitle": "",
  "pageSubtitle": "",
  "pageImage": "/",
  "items": [
    {
      "key": "test",
      "linkHref": "/news/test",
      "title": "test",
      "date": "2026-6-2",
      "summary": "test"
    }
  ],
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
