/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  brand: string;
  size: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const localCart = JSON.parse(localStorage.getItem("cartProducts") || "[]");

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    return localCart.map((product: any) => ({
      id: product.id,
      name: product.name,
      brand: "Lulu M",
      size: product.selectedSize || "",
      price: product.price,
      originalPrice: product.price,
      quantity: product.quantity || 1,
      image: product.images.main,
    }));
  });

  const updateQuantity = (id: number, newQuantity: number, size: string) => {
    const newItems =
      newQuantity === 0
        ? cartItems.filter((item) => !(item.id === id && item.size === size))
        : cartItems.map((item) =>
            item.id === id && item.size === size
              ? { ...item, quantity: newQuantity }
              : item
          );

    setCartItems(newItems);
    localStorage.setItem("cartProducts", JSON.stringify(newItems));
  };

  const removeItem = (id: number, size: string) => {
    const updatedItems = cartItems.filter(
      (item) => !(item.id === id && item.size === size)
    );
    setCartItems(updatedItems);
    localStorage.setItem("cartProducts", JSON.stringify(updatedItems));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 400 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-200">
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

      {cartItems.length === 0 ? (
        <div className="p-6 text-center text-gray-700 text-lg">
          Your cart is empty.
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="grid grid-cols-12 gap-4 p-6 border-b text-sm font-medium text-gray-600 uppercase">
                  <div className="col-span-6">Description</div>
                  <div className="col-span-2 text-center">Item Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Subtotal</div>
                </div>
                {cartItems.map((item: CartItem) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="grid grid-cols-12 gap-4 p-6 border-b items-center"
                  >
                    <div className="col-span-6 flex items-center space-x-4">
                      <div className="w-20 h-24 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600">{item.brand}</p>
                        <p className="text-sm text-gray-600">
                          Size {item.size}
                        </p>
                        <button
                          onClick={() => removeItem(item.id, item.size)}
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
                            updateQuantity(
                              item.id,
                              item.quantity - 1,
                              item.size
                            )
                          }
                          className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1,
                              item.size
                            )
                          }
                          className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>
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
                <button
                  className="w-full bg-[#8B5D3B] hover:bg-[#754C29] text-white font-medium py-3 px-4 rounded-lg mt-6 transition-colors"
                  onClick={() => {
                    alert("Proceeding to checkout...");
                    localStorage.removeItem("cartProducts");
                    setCartItems([]);
                  }}
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
