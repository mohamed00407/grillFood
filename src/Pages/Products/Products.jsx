import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../Component/ProductCard/ProductCard";

export default function Products() {
  const [products, setProduts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [filters, setFilters] = useState({
    availability: "all",
    price: { from: "", to: "" },
    brand: [],
    size: [],
  });
  useEffect(() => {
    const fetctData = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/products", {
          params: {
            populate: "*",
          },
        });
        setProduts(res.data.data);
        setFilterProducts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetctData();
  }, []);
  const handleAvailabilityChange = (e) => {
    let twmp = [];
    setFilters((prevFilters) => ({
      ...prevFilters,
      availability: e,
    }));
    console.log(filters);
    if (filters.availability !== "all") {
      twmp = filterProducts.filter((p) => {
        return p.in_stoct === true;
      });
    }
    console.log(twmp);
  };

  return (
    <div className="flex bg-gray-100 p-8 min-h-screen">
      {/* 1. Filter Sidebar */}
      <aside className="w-1/4 p-4 bg-white rounded-lg shadow-md mr-8 h-fit">
        <h3 className="text-2xl font-bold mb-4">Filter:</h3>

        {/* Availability Filter */}
        <div className="filter-group mb-6">
          <h4 className="font-bold text-lg mb-2">Availability</h4>
          {["in-stock", "out-of-stock"].map((optionValue) => (
            <div key={optionValue} className="flex items-center mb-2">
              <input
                type="radio"
                name="availability"
                value={optionValue}
                // Add your `checked` prop here
                checked={filters.availability === optionValue}
                // Add your `onChange` handler here
                onChange={(e) => handleAvailabilityChange(e.target.value)}
              />
              <label className="ml-2 capitalize">
                {optionValue.replace("-", " ")}
              </label>
            </div>
          ))}
        </div>

        {/* Price Filter (Placeholder for your component) */}
        {/* <PriceFilter price={filters.price} onPriceChange={handlePriceChange} /> */}
        <div className="filter-group mb-6">
          <h4 className="font-bold text-lg mb-2">Price</h4>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="From"
              className="w-1/2 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="To"
              className="w-1/2 p-2 border rounded"
            />
          </div>
        </div>

        {/* Product Type Filter (Placeholder for your component) */}
        {/* <CheckboxFilter 
          title="Product Type" 
          options={["Burger", "Pizza", "Chicken"]} 
          onFilterChange={handleCheckboxChange('productType')} 
          selected={filters.productType}
        /> */}
        <div className="filter-group mb-6">
          <h4 className="font-bold text-lg mb-2">Product Type</h4>
          {["Burger", "Pizza", "Chicken"].map((option) => (
            <div key={option} className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <label>{option}</label>
            </div>
          ))}
        </div>

        {/* Brand Filter (Placeholder for your component) */}
        {/* <CheckboxFilter 
          title="Brand" 
          options={["Burger King", "Domino's", "McDonald's"]} 
          onFilterChange={handleCheckboxChange('brand')} 
          selected={filters.brand}
        /> */}
        <div className="filter-group mb-6">
          <h4 className="font-bold text-lg mb-2">Brand</h4>
          {["Burger King", "Domino's", "McDonald's"].map((option) => (
            <div key={option} className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <label>{option}</label>
            </div>
          ))}
        </div>
      </aside>

      {/* 2. Product Grid */}
      <main className="w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
