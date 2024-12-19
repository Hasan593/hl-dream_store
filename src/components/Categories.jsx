import { NavLink, useParams, Navigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import { axiosInstance } from "../api/axios_instance";
import ProductCart from "../pages/Products/Product/ProductCart";

const categoryData = [
  { catName: "Books", path: "/books" },
  { catName: "Electronics", path: "/electronics" },
  { catName: "Groceries & Foods", path: "/groceries" },
  { catName: "Clothing", path: "/clothing" },
  { catName: "Offers", path: "/offers" },
  { catName: "Others", path: "/others" },
];

function Categories() {
  const { key } = useParams();

  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ["products", key],
    queryFn: async () => {
      const res = await axiosInstance.get(key ? `products/${key}` : "products");
      return res.data.data;
    },
    staleTime: 5 * 60 * 1000,
  });

  if (error) {
    return <p>Error loading products: {error.message}</p>;
  }

  if (!key) {
    return <Navigate to="/books" replace />;
  }

  const category = categoryData.find((cat) => cat.path === `/${key}`);

  if (!category) {
    throw new Error("Invalid category key");
  }

  if (isLoading) {
    return <Loading />;
  }

  const filteredProducts = Array.isArray(products)
    ? products.filter(
        (product) =>
          product.category?.toLowerCase() === category.catName.toLowerCase()
      )
    : [];

  return (
    <div>
      <div className="border-b border-gray-300 mt-8">
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {categoryData.map((category) => (
            <NavLink
              key={category.path}
              to={category.path}
              className={({ isActive }) =>
                `px-4 py-2 text-sm sm:text-base font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-green-500 font-bold border-b-4 border-green-500"
                    : "text-gray-700 hover:text-green-500"
                }`
              }
            >
              {category.catName}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          {category.catName}
        </h2>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, 5).map((product) => (
              <ProductCart key={product._id} product={product} />
            ))
          ) : (
            <p>No products available in this category.</p>
          )}
        </div>

        {filteredProducts.length > 0 && (
          <Link to={`/products/${key}`}>
            <button className="bg-primary mt-6">Load More</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Categories;
