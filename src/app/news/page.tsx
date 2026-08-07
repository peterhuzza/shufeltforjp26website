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
  "pageImage": "/landscape8726.jpg",
  "items": [],
  "title": "",
  "content": [],
  "imageSrc": "/landscape8726.jpg",
  "campaignBadge": "",
  "imagealt": "/",
  "imageCap": "/",
  "candidateName": "Stephane Shufelt",
  "campaignName": "Stephanie Shufelt for JP 5",
  "email": "srs@shufeltforjp5.com",
  "facebookUrl": "https://www.facebook.com/shufelt.for.justice.of.the.peace",
  "instagramUrl": "",
  "tiktokUrl": "test",
  "blueskyUrl": "https://bsky.app/profile/libinar.bsky.social",
  "twitterUrl": "test",
  "volunteerUrl": "",
  "donationUrl": "https://secure.actblue.com/donate/shufeltforjp5"
};
  return <Newspage1 {...props} />;
}
