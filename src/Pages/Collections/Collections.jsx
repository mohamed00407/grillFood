import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./../../Component/CategoryCard/CategoryCard";

export default function Collections() {
  const [categories, setGategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/categories", {
          params: {
            populate: "*",
          },
        });

        setGategories(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h2 className="text-5xl font-bold text-center mb-8 bg-white w-full h-[150px] pt-5">
        Categories
      </h2>
      <div className="bg-[var(--bg-color)] py-16 px-4 ">
        <div className="container  mx-auto px-4 ">
          <div className="relative  grid  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
