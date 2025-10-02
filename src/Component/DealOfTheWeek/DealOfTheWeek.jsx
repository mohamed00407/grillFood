import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";

// const deals = [
//   {
//     name: "Chees Italian chicken Pizza",
//     image: "https://i.ibb.co/6P6Xy2Q/pizza.jpg",
//     originalPrice: 290,
//     salePrice: 250,
//     discount: 14,
//     rating: 5,
//     rationgfill: 3,
//     buttonText: "OPTIONS",
//     remainingTime: { days: 619, hours: 9, minutes: 20, seconds: 425 },
//   },
//   {
//     name: "Chees Loaded A.I Burger",
//     image: "https://i.ibb.co/VMyh512/burger.jpg",
//     originalPrice: 390,
//     salePrice: 370,
//     discount: 5,
//     rating: 5,
//     rationgfill: 3,
//     buttonText: "ORDER NOW",
//     remainingTime: { days: 647, hours: 9, minutes: 20, seconds: 425 },
//   },
//   {
//     name: "Chees Italian chicken Pizza",
//     image: "https://i.ibb.co/6P6Xy2Q/pizza.jpg",
//     originalPrice: 290,
//     salePrice: 250,
//     discount: 14,
//     rating: 5,
//     rationgfill: 3,
//     buttonText: "OPTIONS",
//     remainingTime: { days: 619, hours: 9, minutes: 20, seconds: 425 },
//   },
//   {
//     name: "Chees Loaded A.I Burger",
//     image: "https://i.ibb.co/VMyh512/burger.jpg",
//     originalPrice: 390,
//     salePrice: 370,
//     discount: 5,
//     rating: 5,
//     rationgfill: 3,
//     buttonText: "ORDER NOW",
//     remainingTime: { days: 647, hours: 9, minutes: 20, seconds: 425 },
//   },
//   {
//     name: "McDonald's Chicken McCrispy",
//     image: "https://i.ibb.co/hCKqP1b/chicken.jpg",
//     originalPrice: 390,
//     salePrice: 370,
//     discount: 5,
//     rating: 5,
//     rationgfill: 3,
//     buttonText: "ORDER NOW",
//     remainingTime: { days: 565, hours: 10, minutes: 20, seconds: 425 },
//   },
//   {
//     name: "Coca Cola With Ice Cubes",
//     image: "https://i.ibb.co/D8d3w99/coke.jpg",
//     originalPrice: 97,
//     salePrice: 90,
//     discount: 7,
//     rating: 5,
//     rationgfill: 3,
//     buttonText: "ORDER NOW",
//     remainingTime: { days: 754, hours: 9, minutes: 25, seconds: 425 },
//   },
//   // يمكنك إضافة المزيد من العناصر هنا
// ];

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
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("http://localhost:1337/api/products", {
          params: {
            populate: "*",
          },
        });
        setproducts(res.data.data);

        // res.data.data.image[0].url;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-stone-100 p-8 font-sans flex flex-col justify-center items-center ">
      <h2 className="text-4xl font-bold text-center mb-8">Deal Of The Week</h2>
      <div className="container p-4  ">
        <div className="relative ">
          <Slider {...settings}>
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheWeekCarousel;
