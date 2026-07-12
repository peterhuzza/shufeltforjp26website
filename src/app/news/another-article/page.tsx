/**
 * AUTO-GENERATED FILE. Route: /news/another-article
 */
import NewsArticlePage1 from "@/components/pageType/NewsArticlePage1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "another article",
};

export default function GenPage() {
  const props = {
  "articleTitle": "another article",
  "publishDate": "nottoday",
  "articleSummary": "this is another summery",
  "articleContent": [
    "test test test"
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
