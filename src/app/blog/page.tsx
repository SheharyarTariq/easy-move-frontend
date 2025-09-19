import Blog from "@/components/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moving Tips & Guides | Galaxy Removals",
  description:
    "Read expert moving tips, packing guides, and relocation advice from Galaxy Removals. Make your move stress-free with our professional insights.",
  keywords: [
    "moving tips",
    "packing tips",
    "removals blog",
    "house moving advice",
    "relocation guide",
    "Galaxy Removals blog",
  ],
  openGraph: {
    title: "Moving Tips & Guides | Galaxy Removals",
    description:
      "Expert advice, practical tips, and guides to make your move smooth and stress-free.",
    url: "https://galaxyremovals.co.uk/blog",
    siteName: "Galaxy Removals",
    images: [
      {
        url: "/assets/blueLogo.png",
        width: 1200,
        height: 630,
        alt: "Galaxy Removals Blog",
      },
    ],
    type: "website",
  },
};

const Page = () => {
  return (<Blog/>)
}
export default Page;