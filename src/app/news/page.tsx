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
  "pageTitle": "Announcements",
  "pageSubtitle": "",
  "pageImage": "/",
  "items": [
    {
      "key": "test-article",
      "linkHref": "/news/test-article",
      "title": "test article",
      "date": "today",
      "summary": "this is a test ya ya ya"
    },
    {
      "key": "another-article",
      "linkHref": "/news/another-article",
      "title": "another article",
      "date": "nottoday",
      "summary": "this is another summery"
    },
    {
      "key": "michale-jackson",
      "linkHref": "/news/michale-jackson",
      "title": "michael jackson",
      "date": "2026",
      "summary": "michle rocks"
    },
    {
      "key": "michael-jackson",
      "linkHref": "/news/michael-jackson",
      "title": "michael jackson",
      "date": "2026",
      "summary": "michael rocks"
    }
  ],
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
  return <NewsPage1 {...props} />;
}
