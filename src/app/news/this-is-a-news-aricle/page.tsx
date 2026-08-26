/**
 * AUTO-GENERATED FILE. Route: /news/this-is-a-news-aricle
 */
import Newsarticlepage1 from "@/components/pageType/newsArticlePage1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "this is a news aricle",
};

export default function GenPage() {
  const props = {
  "articleTitle": "this is a news aricle",
  "publishDate": "2026-17-08",
  "articleSummary": "this is a test article",
  "articleContent": [
    "# header1",
    "## header1",
    "### header1",
    "#### header1",
    "##### header1",
    "* this is a bullent point",
    "[about image](about.jpg)",
    "[mr beast](https://www.youtube.com/watch?v=Af6i6ChAVTw)"
  ],
  "backLinkText": "Back to News",
  "candidateName": "Stephane Shufelt",
  "campaignName": "Stephanie Shufelt for JP 5",
  "email": "srs@shufeltforjp5.com",
  "facebookUrl": "https://www.facebook.com/shufelt.for.justice.of.the.peace",
  "instagramUrl": "",
  "tiktokUrl": "https://www.tiktok.com/@stephanieshufelt6",
  "blueskyUrl": "https://bsky.app/profile/libinar.bsky.social",
  "twitterUrl": "test",
  "volunteerUrl": "",
  "donationUrl": "https://secure.actblue.com/donate/shufeltforjp5"
};
  return <Newsarticlepage1 {...props} />;
}
