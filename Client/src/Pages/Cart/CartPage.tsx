/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import api from "../../utils/api";

interface CartItem {
  _id: string;
  product: {
    _id: string;
    title: string;
    mainImage: string;
    price: number;
    size?: string[];
  };
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

 const fetchCart = async () => {
  try {
    const res = await api.get("/cart");
    const data = Array.isArray(res.data) ? res.data : [];
    setCartItems(data);
  } catch (err) {
    console.error("Failed to fetch cart", err);
    setCartItems([]); 
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (productId: string, quantity: number) => {
    if (quantity <= 0) return removeItem(productId);
    try {
      await api.patch(`/cart/${productId}`, { quantity });
      fetchCart();
    } catch (err) {
      console.error("Failed to update quantity");
    }
  };

  const removeItem = async (productId: string) => {
    try {
      await api.delete(`/cart/${productId}`);
      fetchCart();
    } catch (err) {
      console.error("Failed to remove item");
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 400 : 0;
  const total = subtotal + shipping;

  if (!localStorage.getItem("authToken")) {
    return (
      <div className="text-center p-10 text-gray-700">
        Please <Link to="/login" className="text-blue-600 underline">log in</Link> to view your cart.
      </div>
    );
  }

  if (loading) return <div className="p-10 text-center">Loading cart...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/">Home</Link>
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
                {cartItems.map((item) => (
                  <div
                    key={item.product._id}
                    className="grid grid-cols-12 gap-4 p-6 border-b items-center"
                  >
                    <div className="col-span-6 flex items-center space-x-4">
                      <div className="w-20 h-24 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={item.product.mainImage}
                          alt={item.product.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {item.product.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Size: {item.product.size?.[0] || "Default"}
                        </p>
                        <button
                          onClick={() => removeItem(item.product._id)}
                          className="text-sm text-red-600 hover:text-red-800 flex items-center mt-2"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">
                      Rs. {item.product.price.toLocaleString()}
                    </div>
                    <div className="col-span-2 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product._id, item.quantity - 1)
                          }
                          className="w-8 h-8 border border-gray-300 rounded-md"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product._id, item.quantity + 1)
                          }
                          className="w-8 h-8 border border-gray-300 rounded-md"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">
                      Rs. {(item.product.price * item.quantity).toLocaleString()}
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
                  className="w-full bg-[#8B5D3B] hover:bg-[#754C29] text-white font-medium py-3 px-4 rounded-lg mt-6"
                  onClick={() => alert("Proceeding to checkout...")}
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
