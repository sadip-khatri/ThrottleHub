/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import api from "../../Utils/api";
import { useCountry } from "../../Contexts/CountryContext";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { formatPrice } from "../../utils/formatPrice";

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

function CartCard() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { selectedCountry } = useCountry();

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
  const shipping = cartItems.length > 0 ? 4 : 0;
  const total = subtotal + shipping;

  if (!localStorage.getItem("authToken")) {
    return (
      <div className="text-center p-10 text-gray-700">
        Please{" "}
        <Link to="/login" className="text-blue-600 underline">
          log in
        </Link>{" "}
        to view your cart.
      </div>
    );
  }

  if (loading) return <div className="p-10 text-center">Loading cart...</div>;

  if (!selectedCountry) {
    return (
      <div className="p-10 text-center">Loading country information...</div>
    );
  }

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="p-6 text-center text-gray-700 text-lg">
          Your cart is empty.
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-8">
          
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
           
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b text-sm font-medium text-gray-600 uppercase">
                  <div className="col-span-6">Description</div>
                  <div className="col-span-2 text-center">Item Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Subtotal</div>
                </div>
                {cartItems.map((item) => (
                  <div
                    key={item.product._id}
                    className="border-b p-4 md:p-6"
                  >
                    <div className="flex flex-col md:grid md:grid-cols-12 md:gap-4 items-center">
                      <div className="md:col-span-6 flex items-center space-x-4 mb-4 md:mb-0">
                        <div className="w-20 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.product.mainImage}
                            alt={item.product.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-[#2563eb]">
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

                      <div className="md:col-span-2 text-center mb-2 md:mb-0">
                        <span className="text-[#2563eb]">
                          {formatPrice(
                            item.product.price * selectedCountry.rate,
                            selectedCountry.currency
                          )}
                        </span>
                      </div>

                      <div className="md:col-span-2 text-center mb-2 md:mb-0">
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

                      <div className="md:col-span-2 text-center">
                        <span className="text-[#2563eb]">
                          {formatPrice(
                            item.product.price *
                              item.quantity *
                              selectedCountry.rate,
                            selectedCountry.currency
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="mt-10 lg:mt-0 lg:w-1/3">
  <div className="bg-white rounded-xl shadow-md p-6 border">
    <h2 className="text-lg font-semibold text-[#2563eb] mb-4">Order Summary</h2>
    <div className="space-y-3 text-sm">
      <div className="flex justify-between text-gray-700">
        <span>Subtotal</span>
        <span>{formatPrice(subtotal * selectedCountry.rate, selectedCountry.currency)}</span>
      </div>
      <div className="flex justify-between text-gray-700">
        <span>Shipping</span>
        <span>{formatPrice(shipping * selectedCountry.rate, selectedCountry.currency)}</span>
      </div>
    </div>
    <hr className="my-4" />
    <div className="flex justify-between text-base font-bold text-[#2563eb]">
      <span>Total</span>
      <span>{formatPrice(total * selectedCountry.rate, selectedCountry.currency)}</span>
    </div>
    <button
      className="w-full mt-6 bg-[#8B5D3B] hover:bg-[#754C29] text-white py-3 rounded-lg transition"
      onClick={() => {
        alert("Proceeding to checkout...");
        localStorage.removeItem("cartProducts");
        setCartItems([]);
        window.dispatchEvent(new Event("cartUpdated"));
      }}
    >
      PROCEED TO CHECKOUT
    </button>
  </div>
</div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartCard;
