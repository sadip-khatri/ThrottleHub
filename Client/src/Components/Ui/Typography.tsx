import React from "react";

export const SectionHeading: React.FC<{ text: string }> = ({ text }) => (
  <h2 className="text-3xl font-semibold mb-2 text-accent">{text}</h2>
);

export const ShopNowLink: React.FC<{ href: string }> = ({ href }) => (
  <a
    href={href}
    className="text-sm font-medium mt-2 hover:underline flex items-center gap-1 text-accent hover:text-button-hover"
  >
    SHOP NOW <span>→</span>
  </a>
);

export const ViewAllLink: React.FC<{ href: string }> = ({ href }) => (
  <a
    href={href}
    className="mt-3 inline-block text-sm font-medium text-accent hover:underline hover:text-button-hover"
  >
    VIEW ALL →
  </a>
);
