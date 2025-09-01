import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const deals = [
  {
    name: "Chees Italian chicken Pizza",
    image: "https://i.ibb.co/6P6Xy2Q/pizza.jpg",
    originalPrice: 290,
    salePrice: 250,
    discount: 14,
    rating: 5,
    rationgfill: 3,
    buttonText: "OPTIONS",
    remainingTime: { days: 619, hours: 9, minutes: 20, seconds: 425 },
  },
  {
    name: "Chees Loaded A.I Burger",
    image: "https://i.ibb.co/VMyh512/burger.jpg",
    originalPrice: 390,
    salePrice: 370,
    discount: 5,
    rating: 5,
    rationgfill: 3,
    buttonText: "ORDER NOW",
    remainingTime: { days: 647, hours: 9, minutes: 20, seconds: 425 },
  },
  {
    name: "Chees Italian chicken Pizza",
    image: "https://i.ibb.co/6P6Xy2Q/pizza.jpg",
    originalPrice: 290,
    salePrice: 250,
    discount: 14,
    rating: 5,
    rationgfill: 3,
    buttonText: "OPTIONS",
    remainingTime: { days: 619, hours: 9, minutes: 20, seconds: 425 },
  },
  {
    name: "Chees Loaded A.I Burger",
    image: "https://i.ibb.co/VMyh512/burger.jpg",
    originalPrice: 390,
    salePrice: 370,
    discount: 5,
    rating: 5,
    rationgfill: 3,
    buttonText: "ORDER NOW",
    remainingTime: { days: 647, hours: 9, minutes: 20, seconds: 425 },
  },
  {
    name: "McDonald's Chicken McCrispy",
    image: "https://i.ibb.co/hCKqP1b/chicken.jpg",
    originalPrice: 390,
    salePrice: 370,
    discount: 5,
    rating: 5,
    rationgfill: 3,
    buttonText: "ORDER NOW",
    remainingTime: { days: 565, hours: 10, minutes: 20, seconds: 425 },
  },
  {
    name: "Coca Cola With Ice Cubes",
    image: "https://i.ibb.co/D8d3w99/coke.jpg",
    originalPrice: 97,
    salePrice: 90,
    discount: 7,
    rating: 5,
    rationgfill: 3,
    buttonText: "ORDER NOW",
    remainingTime: { days: 754, hours: 9, minutes: 25, seconds: 425 },
  },
  // يمكنك إضافة المزيد من العناصر هنا
];

const DealCard = ({ deal }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mx-2">
      <div className="relative">
        <img
          src={deal.image}
          alt={deal.name}
          className="w-full h-auto rounded-lg mb-4"
        />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          -{deal.discount}%
        </div>
      </div>
      <div className="text-center">
        <div className="flex justify-center items-center mb-2">
          {Array(deal.rating)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="text-yellow-400">
                ★
              </span>
            ))}
        </div>
        <p className="font-bold text-lg mb-1">{deal.name}</p>
        <div className="mb-2">
          <span className="line-through text-gray-500 mr-2">
            ${deal.originalPrice}
          </span>
          <span className="font-bold text-red-500">${deal.salePrice}</span>
        </div>
        <button
          className="w-full py-2 rounded-md font-bold transition-colors duration-200"
          style={{
            backgroundColor:
              deal.buttonText === "OPTIONS" ? "#ffc107" : "#ffac2c",
            color: "white",
          }}
        >
          {deal.buttonText}
        </button>
      </div>
    </div>
  );
};

// مكونات الأسهم المخصصة
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-2 md:right-1 -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <BsArrowRight className="text-3xl text-gray-800 bg-white p-1 rounded-full shadow-md" />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-2 md:left-1 -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <BsArrowLeft className="text-3xl text-gray-800 bg-white p-1 rounded-full shadow-md" />
    </div>
  );
};

const DealOfTheWeekCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-stone-100 p-8 font-sans">
      <h2 className="text-4xl font-bold text-center mb-8">Deal Of The Week</h2>
      <div className="relative">
        <Slider {...settings}>
          {deals.map((deal, index) => (
            <DealCard key={index} deal={deal} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DealOfTheWeekCarousel;
