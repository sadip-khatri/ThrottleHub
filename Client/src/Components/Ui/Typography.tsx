import React from "react";

export const SectionHeading: React.FC<{ text: string }> = ({ text }) => (
  <h2 className="text-3xl font-semibold mb-2">{text}</h2>
);

export const ShopNowLink: React.FC<{ href: string }> = ({ href }) => (
  <a
    href={href}
    className="text-sm font-medium mt-2 hover:underline flex items-center gap-1"
  >
    SHOP NOW <span>→</span>
  </a>
);

export const ViewAllLink: React.FC<{ href: string }> = ({ href }) => (
  <a
    href={href}
    className="mt-3 inline-block text-sm font-medium text-gray-800 hover:underline"
  >
    VIEW ALL →
  </a>
);
