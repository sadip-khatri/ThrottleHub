/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import ProductGallery from "../../Components/Ui/ProductGallery";
import ProductInfo from "../../Components/Ui/ProductInfo";
import SimilarItems from "../../Components/Shared/SimilarItems/SimilarItems";
import YouMightAlsoLike from "../../Components/Shared/YouMIghtAlsoLike/YouMightAlsoLike";
import NewsLetter from "../../Components/Shared/Home/NewsLetter";
import { useCountry } from "../../Contexts/CountryContext";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { selectedCountry } = useCountry();

  const [product, setProduct] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Failed to load product", err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-20">Loading product...</p>;
  if (!product) return <p className="text-center mt-20">Product not found.</p>;

  const convertedPrice = product.price * selectedCountry.rate;

  const handleAddToCart = (
    selectedProduct: any,
    selectedSize: string = "M",
    quantity: number = 1,
    selectedColor: string = ""
  ) => {
    const cartProduct = {
      id: selectedProduct._id,
      name: selectedProduct.title || selectedProduct.name,
      price: selectedProduct.price,
      selectedSize,
      quantity,
      selectedColor,
      images: {
        main:
          selectedProduct.image ||
          selectedProduct.images?.main ||
          selectedProduct.mainImage ||
          "/assets/images/default-product.png",
      },
    };

    const existingCart = JSON.parse(
      localStorage.getItem("cartProducts") || "[]"
    );

    const existingItemIndex = existingCart.findIndex(
      (item: any) =>
        item.id === selectedProduct._id &&
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor
    );

    if (existingItemIndex > -1) {
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      existingCart.push(cartProduct);
    }

    localStorage.setItem("cartProducts", JSON.stringify(existingCart));

    // 🔄 Notify navbar or global state to update cart count
    window.dispatchEvent(new Event("cartUpdated"));

    alert(`${selectedProduct.title} added to cart!`);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: GALLERY */}
        <div className="flex flex-col md:flex-row gap-4">
          <ProductGallery product={product} />
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <ProductInfo
          product={{ ...product, convertedPrice }}
          currencyCode={selectedCountry.currency}
          onAddToCart={handleAddToCart}
        />
      </div>

      {/* Related Sections */}
      <SimilarItems />
      <YouMightAlsoLike />
      <NewsLetter />
    </>
  );
};

export default ProductDetail;
