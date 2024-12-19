import { useParams } from "react-router-dom";
import ProductCart from "../Products/Product/ProductCart";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axios_instance";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";

function Products() {
  const { key } = useParams();
  const [sortBy, setSortBy] = useState(0);
  const [sortedProducts, setSortedProducts] = useState([]);

  const { data: products = [], isLoading, error } = useQuery({
    queryKey: key ? ["products", key] : ["products"],
    queryFn: async () => {
      const url = key ? `products/${key}` : "products";
      const res = await axiosInstance.get(url);
      return res.data.data;
    },
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (error) {
      return <p>Error loading products: {error.message}</p>;
    }

    if (!products || products.length === 0) return;

    let sorted = [...products];
    switch (sortBy) {
      case 1:
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 2:
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 3:
        sorted.sort((a, b) => b.averageRating - a.averageRating);
        break;
      case 4:
        sorted.sort((a, b) => a.individualRating - b.individualRating);
        break;
      default:
        break;
    }
    setSortedProducts(sorted);
  }, [sortBy, products, error]);

  const handleSortChange = (e) => {
    setSortBy(parseInt(e.target.value));
  };

  return (
    <>
      <div className="flex justify-between items-center mt-20">
        <select
          onChange={handleSortChange}
          value={sortBy}
          className="border rounded p-2"
        >
          <option value={0}>Default</option>
          <option value={1}>Price: Low to High</option>
          <option value={2}>Price: High to Low</option>
          <option value={3}>Rating</option>
        </select>
      </div>

      <h1 className="text-2xl capitalize font-bold border-b-4 border-fuchsia-700 w-fit ml-4">
        {key ? (key === "groceries" ? "Groceries & Foods" : key) : "All Products"} (
        {products?.length || 0})
      </h1>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {sortedProducts.map((product) => (
            <ProductCart key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default Products;
