/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import { handleAddToCart } from "../../utils/addToCart";

interface Product {
  id: number;
  title: string;
  price: number;
  size: string[];
  color: string;
  mainImage: string;
  thumbnails: string[];
  description: string;
  condition: string;
  fit: string;
  story: string;
}

const CartTry: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [addToCart, setAddToCart] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("8");
  const [productData, setProductData] = useState<Product | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("src/Data/Productsinfo.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        // You can dynamically pick which product to show here, using ID or other logic
        setProductData(data[0]); // Change index or use route params to select product
      })
      .catch((error) => console.error("Error loading product:", error));
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(e.target.value);
  };

  const handleAddToCart = () => {
    if (!productData) return;

    setAddToCart(true);

    const newProduct = {
      id: productData.id,
      name: productData.title,
      price: productData.price,
      selectedSize,
      images: productData.thumbnails,
      quantity: 1,
    };

    const existingCart = JSON.parse(
      localStorage.getItem("cartProducts") || "[]"
    );

    const existingIndex = existingCart.findIndex(
      (item: any) =>
        item.id === newProduct.id &&
        item.selectedSize === newProduct.selectedSize
    );

    if (existingIndex !== -1) {
      existingCart[existingIndex].quantity += 1;
    } else {
      existingCart.push(newProduct);
    }

    localStorage.setItem("cartProducts", JSON.stringify(existingCart));

    navigate("/cart");
  };

  if (!productData) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="font-sans text-gray-800 min-h-screen">
      <main className="container mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image Section */}
          <div className="flex md:flex-row flex-col gap-4 w-full max-w-md mx-auto">
            <div className="flex md:flex-col flex-row justify-center gap-2">
              {productData.thumbnails.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-14 h-14 object-cover rounded border border-gray-300"
                />
              ))}
            </div>
            <div className="aspect-[3/4] w-full">
              <img
                src={productData.mainImage}
                alt={productData.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="max-w-lg w-full mx-auto md:mx-0 px-2 md:px-0">
            <h2 className="text-2xl font-semibold mb-2">{productData.title}</h2>
            <p className="text-sm mb-1">Size {selectedSize}</p>
            <p className="text-sm text-gray-600 mb-4">
              Rs. {productData.price}
            </p>

            {/* Color */}
            <div className="mb-4">
              <span className="font-medium">Color:</span>
              <div className="flex space-x-2 mt-2">
                <div
                  className="w-6 h-6 rounded-full border-2 border-black"
                  style={{ backgroundColor: productData.color }}
                  title="Selected color"
                ></div>
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <label className="block mb-1 font-medium">Size</label>
              <select
                className="border px-3 py-2 rounded w-32"
                onChange={handleSelectChange}
                value={selectedSize}
              >
                {productData.size.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="bg-[#8B5D3B] hover:bg-[#754C29] text-white px-6 py-3 rounded-full font-medium w-full mb-6"
            >
              {addToCart ? "Added to Cart" : "Add to Cart"}
            </button>

            {/* Expandable Sections */}
            {[
              { title: "Description", content: productData.description },
              { title: "Condition", content: productData.condition },
              { title: "Style & Fit", content: productData.fit },
              { title: "My Love Story", content: productData.story },
            ].map((section, i) => (
              <div key={i} className="border-b py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection(section.title)}
                >
                  <span className="font-medium">{section.title}</span>
                  {openSection === section.title ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
                {openSection === section.title && (
                  <p className="mt-2 text-sm text-gray-700">
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartTry;
