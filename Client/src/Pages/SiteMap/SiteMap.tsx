import React from "react";
import {
  ShoppingBag,
  User,
  ShoppingCart,
  Info,
  ShieldCheck,
  Lock,
  FileText,
  LogIn,
  UserPlus,
  Search,
  BookOpen,
  Mail,
  Truck,
  Undo,
  Tag,
  TrendingUp,
  Star,
  Briefcase,
} from "lucide-react";

const SiteMap: React.FC = () => {
  const iconMap: { [key: string]: React.ReactNode } = {
    Home: <ShoppingBag size={16} />,
    "Season Event": <Tag size={16} />,
    "New Arrival": <Star size={16} />,
    "Bag Collection": <Briefcase size={16} />,
    "Men's Collection": <ShoppingBag size={16} />,
    Trending: <TrendingUp size={16} />,
    Exclusive: <Star size={16} />,
    Accessories: <ShoppingBag size={16} />,

    Register: <UserPlus size={16} />,
    Login: <LogIn size={16} />,
    Profile: <User size={16} />,
    "Forgot Password": <Lock size={16} />,

    Cart: <ShoppingCart size={16} />,
    "Track My Order": <Truck size={16} />,
    Search: <Search size={16} />,

    "Our Story": <Info size={16} />,
    Blogs: <BookOpen size={16} />,
    "Contact Us": <Mail size={16} />,
    "How to Buy": <FileText size={16} />,

    "Terms & Conditions": <ShieldCheck size={16} />,
    "Privacy Policy": <Lock size={16} />,
    "Return & Refund": <Undo size={16} />,
  };

  const categories = [
    {
      title: "Shop",
      links: [
        { name: "Home", path: "/" },
        { name: "Season Event", path: "/season-event" },
        { name: "New Arrival", path: "/new-arrival" },
        { name: "Bag Collection", path: "/bag-collection" },
        { name: "Men's Collection", path: "/mens-collection" },
        { name: "Trending", path: "/trending" },
        { name: "Exclusive", path: "/exclusive" },
        { name: "Accessories", path: "/accessories" },
      ],
    },
    {
      title: "Account",
      links: [
        { name: "Register", path: "/register" },
        { name: "Login", path: "/login" },
        { name: "Profile", path: "/profile" },
        { name: "Forgot Password", path: "/forgot-password" },
      ],
    },
    {
      title: "Shopping",
      links: [
        { name: "Cart", path: "/cart" },
        { name: "Track My Order", path: "/order-look-up" },
        { name: "Search", path: "/search" },
      ],
    },
    {
      title: "Information",
      links: [
        { name: "Our Story", path: "/our-story" },
        { name: "Blogs", path: "/blog" },
        { name: "Contact Us", path: "/contact" },
        { name: "How to Buy", path: "/how-to-buy" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms & Conditions", path: "/terms-and-condition" },
        { name: "Privacy Policy", path: "/privacy-and-policy" },
        { name: "Return & Refund", path: "/return-and-refund" },
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-[#F5EBDD] border border-[#4B2D18] rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-[#4B2D18] text-center mb-10">
          Site Map
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <h2 className="text-xl font-semibold text-[#4B2D18] mb-4 border-b border-[#4B2D18]/20 pb-2">
                {category.title}
              </h2>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.path}
                      className="flex items-center gap-2 text-[#4B2D18] font-medium text-sm py-2 px-3 rounded-md hover:bg-[#4B2D18] hover:text-white transition duration-300"
                    >
                      {iconMap[link.name] || <FileText size={16} />}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SiteMap;
