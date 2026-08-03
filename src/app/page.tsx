/**
 * AUTO-GENERATED FILE. Route: /
 */
import HomePage1 from "@/components/pageType/HomePage1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jane Doe - Home",
};

export default function GenPage() {
  const props = {
  "title": "",
  "content": [],
  "imageSrc": "/",
  "aboutMe": {
    "moto": "",
    "backgroundSrc": "/image2.jpg",
    "imageSrc": "/image.jpg",
    "altText": "",
    "emblemSrc": "/image3.jpg",
    "emblemAlt": "",
    "textunderbutton": "",
    "primaryLinkHref": "",
    "primaryLinkLabel": "",
    "secondaryLinkHref": "",
    "secondaryLinkLabel": ""
  },
  "midsectionContent": {
    "mapSrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12884.981083547385!2d-94.1535347700119!3d36.16058570658362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c96b542f67f11f%3A0x85632024ba4e7f97!2sThe%20Geek%20Realms!5e0!3m2!1sen!2sus!4v1785720222006!5m2!1sen!2sus",
    "content": [
      "# test",
      "## test",
      "### test",
      "this is a markdown test lololol"
    ]
  },
  "campaignBadge": "",
  "imageCap": "/",
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
  return <HomePage1 {...props} />;
}
