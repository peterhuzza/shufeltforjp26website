/**
 * AUTO-GENERATED FILE. Route: /privacy
 */
import Privacypage1 from "@/components/pageType/privacyPage1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jane Doe - Privacy",
};

export default function GenPage() {
  const props = {
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
  return <Privacypage1 {...props} />;
}
