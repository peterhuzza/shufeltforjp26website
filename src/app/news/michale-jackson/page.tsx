/**
 * AUTO-GENERATED FILE. Route: /news/michale-jackson
 */
import NewsArticlePage1 from "@/components/pageType/NewsArticlePage1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "michael jackson",
};

export default function GenPage() {
  const props = {
  "articleTitle": "michael jackson",
  "publishDate": "2026",
  "articleSummary": "michle rocks",
  "articleContent": [
    "[skibidi](https://www.youtube.com/watch?v=h_D3VFfhvs4)"
  ],
  "backLinkText": "Back to News",
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
  return <NewsArticlePage1 {...props} />;
}
