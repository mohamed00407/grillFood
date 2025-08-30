import OrderButton from "../OrderButton/OrderButton";

export default function ProductCard(product) {
  const { name, rating, oldPrice, newPrice, image, discount, buttontext } =
    product.product;

  console.log(product);
  console.log(image[0]["url"]);
  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative">
        {discount && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
        <img
          src={image[0]["url"]}
          alt={name}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        {/* Rating Stars - يمكنك استبدالها بمكون مخصص للنجوم */}
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
}
