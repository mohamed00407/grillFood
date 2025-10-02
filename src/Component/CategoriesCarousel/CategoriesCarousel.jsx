import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import CategoryCard from "./../CategoryCard/CategoryCard";

const CategoriesCarousel = () => {
  const [categories, setGategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("http://localhost:1337/api/categories", {
          params: {
            populate: "*",
          },
        });
        setGategories(res.data.data);

        // res.data.data.image[0].url;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="bg-[var(--bg-color)] py-16 px-4 flex justify-center ">
      <div className="container">
        <h2 className="text-5xl font-bold text-center mb-8">
          Shop By Categories
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCarousel;
