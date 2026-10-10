import type { Project } from "./type";

export const projects: Project[] = [
  {
    id: 1,
    slug: "bits",
    title: "Bits Auctions",
    subtitle:
      "Auctions platform with live bids and a personal dashboard that charts your bidding trends month by month.",
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
      "I used my client-facing experience to spot and build supporting features that help users succeed. Building on this, is knowing when 'not' to build, that way I make sure features give real value to the user.",
  },
  {
    id: 2,
    slug: "shopnet",
    title: "Shopnet",
    subtitle:
      "A storefront with cart persistence and search filtering, built with type-safe routing and Zod-validated checkout.",
    description:
      "A clean storefront where cart state stays consistent across pages and checkout errors appear before you place the order, to make a smooth shopping experience.",
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
      "Shoppers abandon checkout when the form fails late or the cart loses its state. So I focused on making the journey from browsing to checkout feel effortless. I used Redux to keep the cart state consistent across pages, and Zod to validate checkout form. This makes the users get clear, immediate feedback before placing an order.",
    lesson:
      "Working with the checkout process and state, I learnt to value how to structure state management and data validation so they scale with the app.",
  },
  {
    id: 3,
    slug: "foodiegram",
    title: "FOODIEGRAM.",
    subtitle:
      "A social feed where you can post, follow, like and comment on recipes and food photos.",
    description:
      "An image first feed for food-lovers, designed around how people actually browse food: quickly and visually. Discover food, share recipes and restaurant tips with your followers.",
    roles: ["Frontend", "UX Design"],
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    year: "2025",
    caption:
      "The feed page with the list of posts, sort, search and the settings menu open.",
    detailCaption: "Post detail page showing the post and comment section.",
    coverImage: "/projects/foodiegram/foodiegram-feed-dark.webp",
    coverImage2: "/projects/foodiegram/foodiegram-feed-light.webp",
    detailImage: "/projects/foodiegram/foodiegram-post-dark.webp",
    detailImage2: "/projects/foodiegram/foodiegram-post-light.webp",
    repo: "https://github.com/telecasteren/social-app-noroff",
    url: "https://foodiegram.telecasternilsen.com",
    goal: "Build a social media app where users post images and interact through likes and comments, using TypeScript and Tailwind CSS.",
    process:
      "My wife bakes sourdough, and her insights from the food community was that browsing is often quick and visual. So I prioritised an image-first feed, keeping interactions fast and layout uncluttered.",
    lesson:
      "Working on 'FOODIEGRAM.' gave me a good understanding of designing for engagement and interaction. Small details make a big difference to the user experience, such as optimistic likes and image loading performance.",
  },
];

export const getProject = (slug?: string) =>
  projects.find((p) => p.slug === slug);
