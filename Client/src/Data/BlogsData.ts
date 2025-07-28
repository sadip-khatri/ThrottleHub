export interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "how-to-choose-the-right-bike-for-your-lifestyle",
    title: "How to Choose the Right Bike for Your Lifestyle",
    excerpt: "From cruisers to sport bikes, find the perfect ride for your needs, style, and terrain.",
    content: `At ThrottleHub, we believe the right bike should match your lifestyle. Are you a city commuter, a weekend explorer, or a speed enthusiast?\n\nThis guide breaks down key features like engine capacity, comfort, and fuel efficiency to help you ride smart.`,
    image: "/blog01.jpg",
    author: "ThrottleHub Team",
    date: "2025-06-28",
  },
  {
    id: 2,
    slug: "essential-car-parts-every-driver-should-know",
    title: "Essential Car Parts Every Driver Should Know",
    excerpt: "Want to understand your car better? Here's a quick breakdown of must-know components.",
    content: `ThrottleHub isn't just about selling parts — we're here to educate too. Knowing your spark plugs from your suspension system can make a huge difference.\n\nThis article covers essential car parts, what they do, and when to replace them.`,
    image: "/blog02.jpg",
    author: "ThrottleHub Garage",
    date: "2025-06-22",
  },
  {
    id: 3,
    slug: "why-auto-accessories-matter-more-than-you-think",
    title: "Why Auto Accessories Matter More Than You Think",
    excerpt: "From safety to style, accessories elevate your drive and protect your investment.",
    content: `ThrottleHub offers more than engines and wheels. Accessories like protective covers, phone mounts, and tire inflators improve safety and convenience.\n\nFind out which accessories are worth the hype and how they boost your riding experience.`,
    image: "/blog03.jpg",
    author: "ThrottleHub Experts",
    date: "2025-06-15",
  },
  {
    id: 4,
    slug: "top-5-bike-upgrades-for-performance-and-style",
    title: "Top 5 Bike Upgrades for Performance and Style",
    excerpt: "Want to make your bike stand out? Here are the best upgrades for better looks and power.",
    content: `From performance exhausts to LED lighting kits, ThrottleHub stocks upgrades that turn heads and boost performance.\n\nCheck out our top picks for modifications that enhance your ride without compromising safety.`,
    image: "/blog04.jpg",
    author: "ThrottleHub Mods",
    date: "2025-06-01",
  },
  {
    id: 5,
    slug: "how-to-maintain-your-vehicle-like-a-pro",
    title: "How to Maintain Your Vehicle Like a Pro",
    excerpt: "Keep your bike or car in top shape with these simple but effective maintenance tips.",
    content: `Proper maintenance can add years to your vehicle's life. At ThrottleHub, we emphasize regular oil changes, tire checks, and part replacements.\n\nLearn our best practices to ensure your ride runs smoothly and safely every day.`,
    image: "/blog05.jpg",
    author: "ThrottleHub Service Team",
    date: "2025-05-20",
  },
  {
    id: 6,
    slug: "future-of-automotive-tech-in-nepal",
    title: "Future of Automotive Tech in Nepal",
    excerpt: "Electric bikes, smart dashboards, and more — here’s what’s next for Nepali roads.",
    content: `ThrottleHub is staying ahead of the curve. The rise of EVs, GPS-enabled systems, and AI-assisted riding is transforming transportation.\n\nExplore the innovations shaping the future of driving and riding in Nepal and how we’re bringing them to you.`,
    image: "/blog06.jpg",
    author: "ThrottleHub Trends",
    date: "2025-05-05",
  },
];
