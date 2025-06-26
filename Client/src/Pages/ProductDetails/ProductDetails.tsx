/* eslint-disable @typescript-eslint/no-explicit-any */
// src/Pages/ProductDetail.tsx
import { useParams } from "react-router-dom";
import products from "../../Data/Productsinfo.json";
import ProductGallery from "../../Components/Ui/ProductGallery";
import ProductInfo from "../../Components/Ui/ProductInfo";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p className="text-center mt-20">Product not found.</p>;

  const handleAddToCart = (
    selectedProduct: any,
    selectedSize: string = "M",
    quantity: number = 1
  ) => {
    const cartProduct = {
      id: selectedProduct.id,
      name: selectedProduct.title || selectedProduct.name,
      price: selectedProduct.price,
      selectedSize: selectedSize,
      quantity: quantity,
      images: {
        main: selectedProduct.image || selectedProduct.images?.main,
      },
    };

    const existingCart = JSON.parse(
      localStorage.getItem("cartProducts") || "[]"
    );
    const existingItemIndex = existingCart.findIndex(
      (item: any) =>
        item.id === selectedProduct.id && item.selectedSize === selectedSize
    );

    if (existingItemIndex > -1) {
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      existingCart.push(cartProduct);
    }

    localStorage.setItem("cartProducts", JSON.stringify(existingCart));
    alert(`${selectedProduct.title || selectedProduct.name} added to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* LEFT: GALLERY */}
      <div className="flex flex-col md:flex-row gap-4">
        <ProductGallery product={product} />
      </div>

      {/* RIGHT: PRODUCT INFO */}
      <ProductInfo product={product} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ProductDetail;
