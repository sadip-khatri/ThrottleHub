/* eslint-disable @typescript-eslint/no-explicit-any */
// src/Pages/ProductDetail.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import ProductInfo from "../../Components/Ui/ProductInfo";

const ProductDetail = () => {
  const { id } = useParams();
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

  const handleAddToCart = async (
  selectedProduct: any,
  selectedSize: string = "M",
  quantity: number = 1
) => {
  try {
    await api.post("/cart", {
      productId: selectedProduct._id,
      size: selectedSize,
      quantity,
    });

    alert(`${selectedProduct.title} added to cart!`);
  } catch (err) {
    console.error("Failed to add to cart", err);
    alert("Failed to add to cart.");
  }
};


  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* You can enable ProductGallery later if needed */}
      {/* <ProductGallery product={product} /> */}
      <ProductInfo product={product} onAddToCart={handleAddToCart} currencyCode={""} />
    </div>
  );
};

export default ProductDetail;