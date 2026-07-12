/**
 * AUTO-GENERATED FILE. Route: /news/test-article
 */
import NewsArticlePage1 from "@/components/pageType/NewsArticlePage1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "test article",
};

export default function GenPage() {
  const props = {
  "articleTitle": "test article",
  "publishDate": "today",
  "articleSummary": "this is a test ya ya ya",
  "articleContent": [
    "this is a test article"
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
