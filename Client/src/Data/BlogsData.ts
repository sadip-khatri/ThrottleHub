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
    slug: "how-does-writing-influence-your-personal-brand",
    title: "How Does Writing Influence Your Personal Brand?",
    excerpt: "How does writing influence your personal brand? Discover the impact of storytelling and content creation on your professional image.",
    content: `Where we find ourselves in the world today, the influence of storytelling is powerful—whether through a blog, a tweet, or a LinkedIn post. Writing is a tool that can shape perceptions, build trust, and establish authority.\n\nSustainable Patterns\n\nConsistent writing helps reinforce your brand values and beliefs in readers. Sharing your thoughts regularly establishes you as a thought leader in your field.\n\nVisuals and Stories\n\nPairing your writing with visuals and stories can build trust and inspire a following. They help your thoughts resonate and stick with your audience.`,
    image: "/public/assets/img/ourstory/hero.jpg",
    author: "Admin",
    date: "2024-06-01",
  },
  {
    id: 2,
    slug: "best-things-to-do-in-cancun-with-kids",
    title: "Best Things To Do In Cancun With Kids",
    excerpt: "A family-friendly guide to Cancun's top attractions and activities for kids.",
    content: `Cancun is a paradise for families! From beautiful beaches to adventure parks, there's something for everyone.\n\nDon't miss the interactive aquariums, eco-parks, and delicious local cuisine.\n\nPlan your trip to make the most of your family vacation!`,
    image: "/public/assets/img/Home/hero.jpg",
    author: "Travel Guru",
    date: "2024-05-20",
  },
  {
    id: 3,
    slug: "minimalist-travel-essentials-for-2024",
    title: "Minimalist Travel Essentials for 2024",
    excerpt: "Pack light and smart! Discover the must-have items for minimalist travelers this year.",
    content: `Traveling with less is liberating. In 2024, focus on versatile clothing, compact tech, and eco-friendly toiletries.\n\nA minimalist approach saves time, money, and stress—leaving more room for adventure.`,
    image: "/public/assets/img/ourstory/ourmission.jpg",
    author: "Nomad Notes",
    date: "2024-04-15",
  },
  {
    id: 4,
    slug: "the-art-of-reusable-fashion",
    title: "The Art of Reusable Fashion",
    excerpt: "Explore how reusable fashion is changing the way we shop and dress.",
    content: `Reusable fashion is more than a trend—it's a movement. By choosing quality over quantity, you help the planet and your wallet.\n\nLook for timeless pieces and support brands that prioritize sustainability.`,
    image: "/public/assets/img/ourstory/aboutus.png",
    author: "Eco Style",
    date: "2024-03-10",
  },
  {
    id: 5,
    slug: "how-to-choose-the-perfect-bag-for-any-occasion",
    title: "How to Choose the Perfect Bag for Any Occasion",
    excerpt: "From work to weekend getaways, find out how to pick the right bag for your needs.",
    content: `Consider size, material, and functionality. A good bag should be stylish yet practical.\n\nThink about what you carry daily and select a bag that fits your lifestyle.`,
    image: "/public/assets/img/Home/hero.jpg",
    author: "Bag Expert",
    date: "2024-02-25",
  },
  {
    id: 6,
    slug: "exploring-the-benefits-of-digital-nomad-life",
    title: "Exploring the Benefits of Digital Nomad Life",
    excerpt: "Is the digital nomad lifestyle right for you? Learn about the perks and challenges.",
    content: `Remote work has opened doors to a new way of living. Digital nomads enjoy freedom, flexibility, and the chance to explore the world.\n\nBut it's not without challenges—staying productive and finding community are key.`,
    image: "/public/assets/img/ourstory/ourmission.jpg",
    author: "Remote Life",
    date: "2024-01-30",
  },
]; 