import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, ChevronRight } from "lucide-react";
import { Route } from "react-router-dom";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Navy Blue Wedding Dress",
      brand: "Lulu M",
      size: "L",
      price: 2700,
      originalPrice: 2700,
      quantity: 1,
      image: "/api/placeholder/80/100",
    },
    {
      id: 2,
      name: "Blue Wedding Dress",
      brand: "Lulu M",
      size: "M",
      price: 2700,
      originalPrice: 2700,
      quantity: 1,
      image: "/api/placeholder/80/100",
    },
  ]);

  const recommendedProducts = [
    {
      id: 1,
      name: "CRINKLE STRIPE DRESS",
      price: 2000,
      image: "/api/placeholder/150/200",
      bgColor: "bg-gray-600",
    },
    {
      id: 2,
      name: "CRINKLE STRIPE DRESS",
      price: 2000,
      image: "/api/placeholder/150/200",
      bgColor: "bg-orange-800",
    },
    {
      id: 3,
      name: "CRINKLE STRIPE DRESS",
      price: 2000,
      image: "/api/placeholder/150/200",
      bgColor: "bg-blue-200",
    },
    {
      id: 4,
      name: "CRINKLE STRIPE DRESS",
      price: 2000,
      image: "/api/placeholder/150/200",
      bgColor: "bg-orange-400",
    },
    {
      id: 5,
      name: "CRINKLE STRIPE DRESS",
      price: 2000,
      image: "/api/placeholder/150/200",
      bgColor: "bg-gray-700",
    },
  ];

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 400;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-200 ">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/">
              <span>Home</span>
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Cart</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Cart Header */}
              <div className="grid grid-cols-12 gap-4 p-6 border-b text-sm font-medium text-gray-600 uppercase">
                <div className="col-span-6">Description</div>
                <div className="col-span-2 text-center">Item Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Subtotal</div>
              </div>

              {/* Cart Items */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 gap-4 p-6 border-b items-center"
                >
                  <div className="col-span-6 flex items-center space-x-4">
                    <div className="w-20 h-24 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                      <div
                        className={`w-full h-full ${
                          item.id === 1 ? "bg-red-600" : "bg-teal-700"
                        } rounded-lg`}
                      ></div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.brand}</p>
                      <p className="text-sm text-gray-600">Size {item.size}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-red-600 hover:text-red-800 flex items-center mt-2"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete From List
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="text-gray-900">
                      Rs. {item.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="col-span-2 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>
                    <button className="text-sm text-blue-600 hover:text-blue-800 mt-2">
                      Remove
                    </button>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="text-gray-900">
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                ORDER SUMMARY
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sub Total</span>
                  <span className="text-gray-900">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">Rs. {shipping}</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">
                    Rs. {total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#8B5D3B] hover:bg-[#754C29] text-white font-medium py-3 px-4 rounded-lg mt-6 transition-colors">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>

        {/* You Might Also Like */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                YOU MIGHT ALSO LIKE
              </h2>
              <p className="text-gray-600">
                The perfect staple or a minimalist & timeless bag that fits a
                classic silhouette that represents a bag that can do it all.
                Comfortable & convenient, this bag is an essential.
              </p>
            </div>
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <span className="mr-2">SHOP NOW</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {recommendedProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div
                  className={`aspect-[3/4] ${product.bgColor} rounded-lg mb-4 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-900">
                  Rs. {product.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
