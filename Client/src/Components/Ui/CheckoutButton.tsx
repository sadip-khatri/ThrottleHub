
import { useCountry } from "../../Contexts/CountryContext";
import axios from "axios";

const CheckoutButton = ({ cartItems }) => {
  const { selectedCountry } = useCountry();

  const handleCheckout = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/payment/create-checkout-session", {
        cartItems: cartItems.map((item) => ({
          title: item.title,
          image: item.image || item.mainImage,
          price: item.price * selectedCountry.rate,
          quantity: item.quantity || 1,
        })),
      });

      window.location.href = res.data.url;
    } catch (err) {
      console.error("Checkout error", err);
      alert("Payment failed");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Proceed to Checkout
    </button>
  );
};

export default CheckoutButton;
