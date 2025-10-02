// This function should be outside your component or in a custom hook
const applyFilters = (products, filters) => {
  let tempProducts = [...products];

  // 1. Filter by Availability (e.g., in stock)
  if (filters.availability !== "all") {
    tempProducts = tempProducts.filter((p) => {
      // Logic for in-stock/out-of-stock
      // This might depend on a property like p.attributes.stock
      return true; // Replace with your actual logic
    });
  }

  // 2. Filter by Price Range
  if (filters.price.from || filters.price.to) {
    tempProducts = tempProducts.filter((p) => {
      const price = p.attributes.newPrice; // Assuming this is your price field
      const from = parseFloat(filters.price.from) || 0;
      const to = parseFloat(filters.price.to) || Infinity;
      return price >= from && price <= to;
    });
  }

  // 3. Filter by Checkbox Categories (Product Type, Brand, etc.)
  ["productType", "size", "brand"].forEach((filterKey) => {
    if (filters[filterKey].length > 0) {
      tempProducts = tempProducts.filter((p) =>
        filters[filterKey].includes(p.attributes[filterKey])
      );
    }
  });

  return tempProducts;
};
