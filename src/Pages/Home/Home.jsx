import DealOfTheWeek from "../../Component/DealOfTheWeek/DealOfTheWeek";
import OrderButton from "./../../Component/OrderButton/OrderButton";
import OwlStage from "../../Component/CategoriesCarousel/CategoriesCarousel";
import ProductCard from "./../../Component/LatestProd/ProductCard";

import Over from "../../Component/Over/Over";
import FeatureCard from "../../Component/FeaturCard/FeatureCard";
import Test from "./../../Component/Test/Test";
import FoodBanner from "../../Component/FoodBanner/FoodBanner";
import ClientsSays from "../../Component/ClientsSays/ClientsSays";
import SopifySection from "../../Component/SopifySection/SopifySection";
import CategoriesCarousel from "../../Component/CategoriesCarousel/CategoriesCarousel";
import "./Home.css";
import Carousal from "../../Component/Carousal/Carousal";
import Banner from "../../Component/Banner/Banner";
import LatestProducts from "./../../Component/LatestProd/ProductCard";
import BlogCarousel from "../../Component/BlogCarousel/BlogCarousel";

export default function Home() {
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

  return (
    <div>
      <Carousal />
      <Banner />
      <CategoriesCarousel />

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
      {/* <LatestProducts /> */}
      <Over />
      <FeatureCard />
      <DealOfTheWeek />
      <FoodBanner />
      <ClientsSays />
      <SopifySection />
      <BlogCarousel />
    </div>
  );
}
