import { useState, useEffect, useRef } from "react";
import axios from "axios";

// This component is responsible for fetching data and managing the carousel logic
export default function LatestProducts() {
  const [products, setProducts] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Fetch products once when the component mounts
    axios
      .get("http://localhost:1337/api/products?populate=*")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // This is the ProductCard sub-component, now defined inside the main component
  const ProductCard = ({ product }) => {
    // Destructure the product attributes directly from the props
    const { name, rating, oldPrice, newPrice, image, discount, buttontext } =
      product;

    const imageUrl = image.data[0].url;

    return (
      <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="relative">
          {discount && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              -{discount}%
            </span>
          )}
          <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
        </div>

        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
          <div className="flex justify-center text-yellow-400 mb-2">
            {Array(rating)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.786.57-1.844-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
          </div>

          <div className="mb-4">
            {oldPrice && (
              <span className="text-sm text-gray-400 line-through mr-2">
                ${oldPrice.toFixed(2)}
              </span>
            )}
            <span className="text-lg font-bold text-red-600">
              ${newPrice.toFixed(2)}
            </span>
          </div>
          <button className="w-full py-2 rounded-lg bg-yellow-500 text-gray-800 font-bold hover:bg-yellow-600 transition-colors">
            {buttontext}
          </button>
        </div>
      </div>
    );
  };

  // Main component JSX
  return (
    <div className="latestProduct bg-gray-100 py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest Products
        </h2>
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 z-10 p-2 rounded-full bg-white shadow-lg transform -translate-x-1/2 -translate-y-1/2"
          onClick={scrollLeft}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <div ref={carouselRef} className="flex space-x-4 overflow-x-hidden">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product.attributes} />
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 z-10 p-2 rounded-full bg-white shadow-lg transform translate-x-1/2 -translate-y-1/2"
          onClick={scrollRight}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
