import type { Project } from "./type";

export const projects: Project[] = [
  {
    id: 1,
    slug: "bits",
    title: "Bits Auctions",
    subtitle: "A modern auction site for selling and bidding on listings.",
    description:
      "A modern auction site for seller and buyer, giving them a smooth transaction journey.",
    roles: ["Frontend", "UX Design", "Product Engineer"],
    stack: ["HTML", "Tailwind CSS", "TypeScript"],
    year: "2025",
    caption: "Bits Auctions home page displaying an image carousel.",
    coverImage: "/projects/bits/bits-home.webp",
    detailImage: "/projects/bits/bits-metrics.webp",
    repo: "https://github.com/telecasteren/bits-auctions",
    url: "https://bits.telecasternilsen.com",
    goal: "The goal of this project was to build a modern auction site, which allowed users to bid on listed items and create listings. The highest bidder wins the item once the auction deadline is met.",
    process:
      "During the planning phase of this project, I tried stepping into the shoes of the users. One of the high value features implemented was the overview dashboard. This is where users can monitor their bids on a monthly basis, and see bid-popularity and trends throughout the calendar year.",
    lesson:
      "This project made me more proficient in TypeScript, Tailwind CSS, and using my client-facing skills to implement supporting features to enable the user success.",
  },
  {
    id: 2,
    slug: "shopnet",
    title: "Shopnet",
    subtitle: "An e-commerce website for various products.",
    description:
      "A modern storefront for an e-commerce site for browsing and buying products.",
    roles: ["Frontend", "UX Design", "Product Engineer"],
    stack: ["React", "TypeScript", "TanStack", "Redux", "Zod"],
    year: "2026",
    caption:
      "Shopnet storefront displaying marketing hero and product listings.",
    coverImage: "/projects/shopnet/shopnet-home.webp",
    detailImage: "/projects/shopnet/shopnet-checkout.webp",
    repo: "https://github.com/NoroffFEU/jsfw-2025-v1-teles_jsf_ca_2026",
    url: "https://shopnet.telecasternilsen.com",
    goal: "Building a modern storefront for an e-commerce site, with state management and technology that allowed users to browse and purchase products in an intuitive and clean layout.",
    process:
      "While planning this project, I focused on making the journey from browsing to checkout feel effortless. I used Redux to keep the cart state consistent across pages, and Zod for validating checkout form, so users get clear and immediate feedback before placing an order.",
    lesson:
      "This project made me more confident in React and TypeScript, and taught me how to structure state management and data validation in a scalable way, supporting a smooth shopping experience.",
  },
  {
    id: 3,
    slug: "foodiegram",
    title: "FOODIEGRAM.",
    subtitle: "A SoMe platform for food lovers.",
    description:
      "A SoMe platform for discovering food, share recipes and restaurant tips.",
    roles: ["Frontend", "UX Design", "Product Engineer"],
    stack: ["HTML", "Tailwind CSS", "TypeScript"],
    year: "2025",
    caption: "Home page for FOODIEGRAM.",
    coverImage: "/projects/bits/bits-home.webp",
    detailImage: "/projects/bits/bits-metrics.webp",
    repo: "https://github.com/telecasteren/foodiegram/tree/css-frameworks",
    url: "missing_link",
    goal: "Building a SoMe platform where users can post images and interact with posts by commenting and liking them. And doing so by building with TypeScript and CSS Frameworks such as Tailwind CSS.",
    process:
      "During the planning phase, I looked at how people actually browse food content. My wife is a sourdough baker and she gave me good intel from the food community, of how its often quick and visual. I prioritised an image-first feed, where users can like and comment without leaving the post, keeping interactions fast and layout uncluttered.",
    lesson:
      "This project strengthened my skills with Tailwind CSS and TypeScript, and gave me a good understanding of designing for engagement and interaction. Small details make a big difference to the user experience.",
  },
];

export const getProject = (slug?: string) =>
  projects.find((p) => p.slug === slug);
