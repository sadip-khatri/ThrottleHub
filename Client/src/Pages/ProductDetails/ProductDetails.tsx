/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import products from "../../Data/Productsinfo.json";
import ProductGallery from "../../Components/Ui/ProductGallery";
import ProductPage from "../../Components/Ui/ProductInfo"; // renamed ProductInfo to ProductPage as per your code
import SimilarItems from "../../Components/Shared/SimilarItems/SimilarItems";
import YouMightAlsoLike from "../../Components/Shared/YouMIghtAlsoLike/YouMightAlsoLike";
import NewsLetter from "../../Components/Shared/Home/NewsLetter";
import { useCountry } from "../../Contexts/CountryContext"; // Adjust if needed

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { selectedCountry } = useCountry();

  const product = products.find((p) => Number(p.id) === Number(id));

  if (!product) return <p className="text-center mt-20">Product not found.</p>;

  // Calculate converted price but keep original price intact
  const convertedPrice = product.price * selectedCountry.rate;

  const handleAddToCart = (
    selectedProduct: any,
    selectedSize: string = "M",
    quantity: number = 1,
    selectedColor: string = ""
  ) => {
    const cartProduct = {
      id: selectedProduct.id,
      name: selectedProduct.title || selectedProduct.name,
      price: selectedProduct.price, // store original USD price here
      selectedSize,
      quantity,
      selectedColor,
      images: {
        main:
          selectedProduct.image ||
          selectedProduct.images?.main ||
          "/assets/images/default-product.png",
      },
    };

    const existingCart = JSON.parse(
      localStorage.getItem("cartProducts") || "[]"
    );

    const existingItemIndex = existingCart.findIndex(
      (item: any) =>
        item.id === selectedProduct.id &&
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor
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
    <>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: GALLERY */}
        <div className="flex flex-col md:flex-row gap-4">
          <ProductGallery product={product} />
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <ProductPage
          product={{ ...product, convertedPrice }}
          currencyCode={selectedCountry.currency} // e.g. "NPR", "USD"
          onAddToCart={handleAddToCart}
        />
      </div>
      <SimilarItems />
      <YouMightAlsoLike />
      <NewsLetter />
    </>
  );
};

export default ProductDetail;
