import React from "react";
import NewIn from "./NewIn";

const mensProducts = [
  {
    image: "/assets/images/mens1.jpg",
    title: "Denim Utility Jacket",
    price: 4500,
  },
  {
    image: "/assets/images/mens2.jpg",
    title: "Classic Fit Cotton Shirt",
    price: 2200,
  },
  {
    image: "/assets/images/mens3.jpg",
    title: "Slim Fit Blazer",
    price: 5000,
  },
  {
    image: "/assets/images/mens3.jpg",
    title: "Slim Fit Blazer",
    price: 5000,
  },
  {
    image: "/assets/images/mens3.jpg",
    title: "Slim Fit Blazer",
    price: 5000,
  },
  {
    image: "/assets/images/mens3.jpg",
    title: "Slim Fit Blazer",
    price: 5000,
  },
];

function MensCollection() {
  return (
    <NewIn
      products={mensProducts}
      heading="Men's Collection"
      description="Discover all men clothes."
    />
  );
}

export default MensCollection;
