import "./CategoryCard.css";
export default function CategoryCard({ category }) {
  // console.log(apiUrl);
  return (
    <div className="text-center flex flex-col justify-center items-center my-1">
      <div className="image w-[220px] h-[220px]  rounded-full mb-2  relative transform transition-all duration-1000 hover:scale-107">
        <img
          src={`http://localhost:1337${category.image.url}`}
          alt={category.description}
          className="w-full h-full "
        />
      </div>
      <p className="font-bold text-lg">{category.description}</p>
      <div className="orderLink">
        <a
          href="#"
          className="text-sm text-gray-500 hover:text-red-500 transition-colors w-full h-5 block"
        >
          <span className="hidden font-medium text-[16px] my-1">ORDER NOW</span>
        </a>
      </div>
    </div>
  );
}
