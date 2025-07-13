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
    slug: "how-to-choose-the-right-smartphone-in-2025",
    title: "How to Choose the Right Smartphone in 2025",
    excerpt: "Confused by the latest smartphones? Learn how to pick the perfect device based on your needs and budget.",
    content: `Choosing a smartphone in 2025 is about more than just specs. Look for battery life, camera quality, software support, and ecosystem compatibility.\n\nFrom flagship powerhouses to mid-range marvels, we break down what really matters so you can make a confident choice.`,
    image: "/blog01.jpg",
    author: "Tech Advisor",
    date: "2025-06-28",
  },
  {
    id: 2,
    slug: "laptop-buying-guide-for-students-and-creators",
    title: "Laptop Buying Guide for Students and Creators",
    excerpt: "Need a laptop for school or content creation? Here’s what to look for when choosing your next machine.",
    content: `The right laptop should fit your workload and workflow. Students need portability and long battery life, while creators demand power and high-resolution displays.\n\nLearn which specs matter, and get our top recommendations across various price ranges.`,
    image: "/blog02.jpg",
    author: "246 Impex Team",
    date: "2025-06-22",
  },
  {
    id: 3,
    slug: "why-accessories-matter-the-unsung-heroes-of-your-tech-kit",
    title: "Why Accessories Matter: The Unsung Heroes of Your Tech Kit",
    excerpt: "From phone cases to wireless chargers, the right accessories enhance and protect your tech investment.",
    content: `Your tech deserves support. A good case, quality earphones, and charging solutions can extend device life and improve your daily use.\n\nDiscover must-have accessories that elevate functionality and style—without breaking the bank.`,
    image: "/blog03.jpg",
    author: "Gadget Guru",
    date: "2025-06-15",
  },
  {
    id: 4,
    slug: "the-rise-of-wireless-audio-and-best-options-in-2025",
    title: "The Rise of Wireless Audio and Best Options in 2025",
    excerpt: "Wireless audio is taking over. We review the top wireless earbuds and headphones of the year.",
    content: `Gone are the days of tangled cords. With improvements in Bluetooth connectivity and battery life, wireless audio is now essential.\n\nExplore the best wireless earbuds and headphones in 2025—from budget picks to audiophile-grade options.`,
    image: "/blog04.jpg",
    author: "Audio Expert",
    date: "2025-06-01",
  },
  {
    id: 5,
    slug: "tech-maintenance-tips-to-extend-your-device-life",
    title: "Tech Maintenance Tips to Extend Your Device Life",
    excerpt: "Your tech can last longer with a little care. Learn how to keep your devices running like new.",
    content: `Cleaning your devices regularly, managing software updates, and avoiding overcharging can all contribute to longer device lifespan.\n\nWe share easy maintenance tips for phones, laptops, and accessories so you get the most from your investment.`,
    image: "/blog05.jpeg",
    author: "246 Impex Team",
    date: "2025-05-20",
  },
  {
    id: 6,
    slug: "future-of-tech-what-to-expect-in-the-next-5-years",
    title: "Future of Tech: What to Expect in the Next 5 Years",
    excerpt: "From AI to foldable devices, here’s what the future holds for consumer tech.",
    content: `Technology is evolving fast—AI-powered devices, foldable phones, and sustainable tech are becoming mainstream.\n\nGet a glimpse into the next wave of innovations and how they might reshape how we work, play, and live.`,
    image: "/blog06.jpg",
    author: "Trend Watch",
    date: "2025-05-05",
  },
];
