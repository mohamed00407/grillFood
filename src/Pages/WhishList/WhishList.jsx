import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../Component/ProductCard/ProductCard";

export default function WhishList() {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("http://localhost:1337/api/wishlists", {
          params: {
            populate: {
              products: {
                populate: "*",
              },
            },
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setproducts(res.data.data[0].products);
        console.log(products);
        // res.data.data.image[0].url;
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(products);
  if (loading) {
    return "Loading....";
  }

  return (
    <div className="bg-stone-100 p-8 font-sans ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
