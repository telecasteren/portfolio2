import type { Project } from "./type";

export const projects: Project[] = [
  {
    id: 1,
    slug: "bits",
    title: "Bits Auctions",
    subtitle: "An auction platform for listing items and bidding on them.",
    description:
      "Sellers list items, buyers bid, and the highest bid wins when the timer runs out, with a dashboard to keep track of it all.",
    roles: ["Frontend", "UX Design"],
    stack: ["HTML", "Tailwind CSS", "TypeScript"],
    year: "2025",
    caption: "Bits Auctions home page displaying an image carousel.",
    detailCaption:
      "Overview page showing the metrics chart for trends and total bids per month.",
    coverImage: "/projects/bits/bits-home-light.webp",
    detailImage: "/projects/bits/bits-metrics-light.webp",
    repo: "https://github.com/telecasteren/bits-auctions",
    url: "https://bits.telecasternilsen.com",
    goal: "Build an auction site where users can create listings and bid on other peoples items. When an auction closes, the highest bidder wins.",
    process:
      "When planning the project, I put myself in the users shoes and asked what they'd want to keep an eye on. That led to the Overview dashboard, where users can track their bids month by month and see bidding trends across the year.",
    lesson:
      "I got more proficient in TypeScript, Tailwind CSS, and used my client-facing experience to spot and build supporting features that help users succeed.",
  },
  {
    id: 2,
    slug: "shopnet",
    title: "Shopnet",
    subtitle:
      "An e-commerce storefront with a smooth experience from browsing to checkout.",
    description:
      "A clean storefront for browsing products, filling a cart and checking out.",
    roles: ["Frontend", "UX Design", "Product Engineer"],
    stack: ["React", "TypeScript", "TanStack", "Redux", "Zod"],
    year: "2026",
    caption:
      "Shopnet storefront displaying marketing hero and product listings.",
    detailCaption:
      "Checkout page displaying payment details, added products and order confirmation summary.",
    coverImage: "/projects/shopnet/shopnet-home.webp",
    detailImage: "/projects/shopnet/shopnet-checkout.webp",
    repo: "https://github.com/NoroffFEU/jsfw-2025-v1-teles_jsf_ca_2026",
    url: "https://shopnet.telecasternilsen.com",
    goal: "Build an e-commerce storefront where users can browse and buy products in a clean, intuitive layout.",
    process:
      "While planning this project, I focused on making the journey from browsing to checkout feel effortless. I used Redux to keep the cart state consistent across pages, and Zod to validate checkout form, so users get clear, immediate feedback before placing an order.",
    lesson:
      "This project made me more confident in React and TypeScript, and learned how to structure state management and data validation so they scale with the app.",
  },
  {
    id: 3,
    slug: "foodiegram",
    title: "FOODIEGRAM.",
    subtitle: "A social media platform for food lovers.",
    description:
      "A social media platform for discovering food, sharing recipes and restaurant tips.",
    roles: ["Frontend", "UX Design"],
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    year: "2025",
    caption:
      "The feed page with the list of posts, sort options and a search bar.",
    detailCaption: "Post detail page showing the post and comment section.",
    coverImage: "/projects/foodiegram/foodiegram-feed-light.webp",
    detailImage: "/projects/foodiegram/foodiegram-post.webp",
    repo: "https://github.com/telecasteren/social-app-noroff",
    url: "https://foodiegram.telecasternilsen.com",
    goal: "Build a social media app where users post images and interact through likes and comments, using TypeScript and Tailwind CSS.",
    process:
      "My wife bakes sourdough, and her insights from the food community was that browsing is often quick and visual. So I prioritised an image-first feed, keeping interactions fast and layout uncluttered.",
    lesson:
      "This project strengthened my skills with Tailwind CSS and TypeScript, and gave me a good understanding of designing for engagement and interaction. Small details make a big difference to the user experience.",
  },
];

export const getProject = (slug?: string) =>
  projects.find((p) => p.slug === slug);
