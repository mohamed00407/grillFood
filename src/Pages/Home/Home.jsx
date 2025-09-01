import DealOfTheWeek from "../../Component/DealOfTheWeek/DealOfTheWeek";
import OrderButton from "./../../Component/OrderButton/OrderButton";
import OwlStage from "./../../Component/Owlstage/OwlStage";
import ProductCard from "./../../Component/LatestProd/ProductCard";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Over from "../../Component/Over/Over";
import FeatureCard from "../../Component/FeaturCard/FeatureCard";
import Test from "./../../Component/Test/Test";
import FoodBanner from "../../Component/FoodBanner/FoodBanner";
import ClientsSays from "../../Component/ClientsSays/ClientsSays";

export default function Home() {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/products?populate=*")
      .then((reponse) => {
        setproduct(reponse.data.data);
        console.log(product);
      });
  }, []);
  console.log(product);
  // {const productsData = [
  //   {
  //     name: "Pizza Mania Veg Loaded Pizza",
  //     rating: 4,
  //     oldPrice: null,
  //     newPrice: 250,
  //     image:
  //       "https://grillfood-demo.myshopify.com/cdn/shop/files/6_ae46c7d2-4c64-41c3-98b0-219bf143f76b.jpg?v=1746868484&width=360",
  //     discount: null,
  //     buttonText: "OPTIONS",
  //   },
  //   {
  //     name: "Wendy's Spicy Chicken Nuggets",
  //     rating: 4,
  //     oldPrice: 400,
  //     newPrice: 350,
  //     image:
  //       "https://grillfood-demo.myshopify.com/cdn/shop/files/6_ae46c7d2-4c64-41c3-98b0-219bf143f76b.jpg?v=1746868484&width=360",
  //     discount: 13,
  //     buttonText: "OPTIONS",
  //   },
  //   {
  //     name: "McDonalds' Big Hug Burger",
  //     rating: 5,
  //     oldPrice: null,
  //     newPrice: 235,
  //     image:
  //       "https://grillfood-demo.myshopify.com/cdn/shop/files/6_ae46c7d2-4c64-41c3-98b0-219bf143f76b.jpg?v=1746868484&width=360",
  //     discount: null,
  //     buttonText: "OPTIONS",
  //   },
  //   {
  //     name: "Coca Cola With Ice Cubes",
  //     rating: 4,
  //     oldPrice: 97,
  //     newPrice: 90,
  //     image:
  //       "https://grillfood-demo.myshopify.com/cdn/shop/files/6_ae46c7d2-4c64-41c3-98b0-219bf143f76b.jpg?v=1746868484&width=360",
  //     discount: 7,
  //     buttonText: "ORDER NOW",
  //   },
  //   {
  //     name: "Pizza Mania Veg Loaded Pizza",
  //     rating: 4,
  //     oldPrice: null,
  //     newPrice: 250,
  //     image:
  //       "https://grillfood-demo.myshopify.com/cdn/shop/files/6_ae46c7d2-4c64-41c3-98b0-219bf143f76b.jpg?v=1746868484&width=360",
  //     discount: null,
  //     buttonText: "OPTIONS",
  //   },
  //   {
  //     name: "Wendy's Spicy Chicken Nuggets",
  //     rating: 4,
  //     oldPrice: 400,
  //     newPrice: 350,
  //     image:
  //       "https://grillfood-demo.myshopify.com/cdn/shop/files/6_ae46c7d2-4c64-41c3-98b0-219bf143f76b.jpg?v=1746868484&width=360",
  //     discount: 13,
  //     buttonText: "OPTIONS",
  //   },
  //   {
  //     name: "McDonalds' Big Hug Burger",
  //     rating: 5,
  //     oldPrice: null,
  //     newPrice: 235,
  //     image:
  //       "https://grillfood-demo.myshopify.com/cdn/shop/files/6_ae46c7d2-4c64-41c3-98b0-219bf143f76b.jpg?v=1746868484&width=360",
  //     discount: null,
  //     buttonText: "OPTIONS",
  //   },
  //   {
  //     name: "Coca Cola With Ice Cubes",
  //     rating: 4,
  //     oldPrice: 97,
  //     newPrice: 90,
  //     image:
  //       "https://grillfood-demo.myshopify.com/cdn/shop/files/6_ae46c7d2-4c64-41c3-98b0-219bf143f76b.jpg?v=1746868484&width=360",
  //     discount: 7,
  //     buttonText: "ORDER NOW",
  //   },
  // ];}
  const carouselRef = useRef(null);

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
  return (
    <div>
      <div className="carousel w-full h-[100vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="text absolute ">
            <h1 className="text-[var(--Second-color)]">Chicken Burger</h1>
            <p className="text-white">2 Mc Crispy Chicken Surprise Burger</p>
            <p className="text-[var(--Second-color)]">
              Two chicken burger only <span>$69</span>
            </p>
            <p className="text-white">
              There will be leftover pimento cheese, but who's complaining
              Spread it onto bread the next day for lunch.
            </p>
            <OrderButton />
          </div>
          <img
            src="https://grillfood-demo.myshopify.com/cdn/shop/files/main-banner-1.jpg?v=1746871993&width=550"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://grillfood-demo.myshopify.com/cdn/shop/files/main-banner-2.jpg?v=1746871993&width=375"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="banner grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        <div className="card   ">
          <div className="image w-full h-full relative">
            <img
              className=" w-full h-full"
              src="https://grillfood-demo.myshopify.com/cdn/shop/files/sub-banner-1.jpg?v=1746877062"
              alt=""
            />
          </div>
          <div className="text absolute">
            <h2>Delicious Pizza</h2>
            <p>Cheese Slice</p>
            <p>Italian Pizza</p>
            <p>oday Best Deals!</p>
            <OrderButton />
          </div>
        </div>
        <div className="card  ">
          <div className="image w-full h-full relative">
            <img
              className=" w-full h-full"
              src="https://grillfood-demo.myshopify.com/cdn/shop/files/sub-banner-1.jpg?v=1746877062"
              alt=""
            />
          </div>
          <div className="text absolute">
            <h2>Delicious Pizza</h2>
            <p>Cheese Slice</p>
            <p>Italian Pizza</p>
            <p>oday Best Deals!</p>
            <OrderButton />
          </div>
        </div>
        <div className="card  ">
          <div className="image w-full h-full relative">
            <img
              className=" w-full h-full"
              src="https://grillfood-demo.myshopify.com/cdn/shop/files/sub-banner-1.jpg?v=1746877062"
              alt=""
            />
          </div>
          <div className="text absolute">
            <h2>Delicious Pizza</h2>
            <p>Cheese Slice</p>
            <p>Italian Pizza</p>
            <p>oday Best Deals!</p>
            <OrderButton />
          </div>
        </div>
      </div>
      <div className="shopByCata">
        <OwlStage />
      </div>

      <div className="aboutUs">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto lg:flex lg:items-center lg:space-x-12">
            {/* القسم الأيسر: الصورة */}
            <div className="rounded w-1/2 mb-10 lg:mb-0 overflow-hidden">
              <img
                className="rounded shadow max-w-full h-auto transform transition-transform duration-300
                   hover:scale-110"
                src="https://grillfood-demo.myshopify.com/cdn/shop/files/cms-banner-1.jpg?v=1747032088&width=1500"
                alt="Delicious burger with fries and ketchup"
              />
            </div>

            {/* القسم الأيمن: المحتوى النصي والأيقونات */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Amazing & Quality Food <br className="hidden sm:inline-block" />{" "}
                For Your Good Health
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                Welcome too restaurant where culinary excellence meets
                hospitality in every dish we serve nestled in the heart of City
                Name our eatery invites you on a journey
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
                {/* أيقونة ومحتوى الجودة */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {/* يمكنك استبدال هذا بأيقونة SVG حقيقية */}
                    <span className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-orange-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">
                      Best Quality Food
                    </h4>
                    <p className="mt-1 text-base text-gray-500">
                      Our talented chefs craft dish precision
                    </p>
                  </div>
                </div>

                {/* أيقونة ومحتوى الطهاة */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {/* يمكنك استبدال هذا بأيقونة SVG حقيقية */}
                    <span className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">
                      Experience Chefs
                    </h4>
                    <p className="mt-1 text-base text-gray-500">
                      Our talented chefs craft dish precision
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="px-8 py-4 text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition duration-300">
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="latestProduct bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Latest Products
          </h2>
          {/* Left Arrow */}
          <button
            className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg transform -translate-x-1/2"
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

          <div className="flex space-x-4 overflow-x-hidden">
            {product.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg transform translate-x-1/2"
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
      <Over />
      <FeatureCard />
      <DealOfTheWeek />
      <FoodBanner />
      <ClientsSays />
    </div>
  );
}
