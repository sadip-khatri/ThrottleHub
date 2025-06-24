// src/Pages/ProductDetail.tsx
import { useParams } from "react-router-dom";
import { products } from "../../Data/Product";
import ProductGallery from "../../Components/Ui/ProductGallery";
import ProductInfo from "../../Components/Ui/ProductInfo";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p className="text-center mt-20">Product not found.</p>;

  // Function to handle adding product to cart
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

    // Get existing cart items
    const existingCart = JSON.parse(
      localStorage.getItem("cartProducts") || "[]"
    );

    // Check if product with same ID and size already exists
    const existingItemIndex = existingCart.findIndex(
      (item: any) =>
        item.id === selectedProduct.id && item.selectedSize === selectedSize
    );

    if (existingItemIndex > -1) {
      // Update quantity if item exists
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      // Add new item to cart
      existingCart.push(cartProduct);
    }

    // Save to localStorage
    localStorage.setItem("cartProducts", JSON.stringify(existingCart));

    // Optional: Show confirmation message
    alert(`${selectedProduct.title || selectedProduct.name} added to cart!`);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* <ProductGallery product={product} /> */}
      <ProductInfo product={product} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ProductDetail;
