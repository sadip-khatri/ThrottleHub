// src/Pages/ProductDetail.tsx
import { useParams } from "react-router-dom";
import products from "../../Data/Productsinfo.json";
import ProductGallery from "../../Components/Ui/ProductGallery";
import ProductInfo from "../../Components/Ui/ProductInfo";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p className="text-center mt-20">Product not found.</p>;

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-10">
      <ProductGallery product={product} />
      <ProductInfo product={product} />
    </div>
  );
};

export default ProductDetail;
