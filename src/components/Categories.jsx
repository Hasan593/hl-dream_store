import { useEffect, useState } from "react";
import { NavLink, useParams, Navigate, Link } from "react-router-dom";
import Loading from "./Loading"; // লোডিং কম্পোনেন্ট, লোডিং অবস্থায় দেখানোর জন্য
import ProductCart from "../pages/Products/Product/ProductCart";

// ক্যাটাগরি ডেটা (স্ট্যাটিক ডেটা, যা API থেকে পরিবর্তিত হতে পারে)
const categoryData = [
  { catName: "Books", path: "/books" },
  { catName: "Electronics", path: "/electronics" },
  { catName: "Groceries & Foods", path: "/groceries" },
  { catName: "Clothing", path: "/clothing" },
  { catName: "Offers", path: "/offers" },
  { catName: "Others", path: "/others" },
];

function Categories() {
  // প্রোডাক্ট এবং লোডিং স্টেট সংরক্ষণ
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // প্রোডাক্ট ডেটা ফেচ করা হচ্ছে
  useEffect(() => {
    setLoading(true);
    fetch("https://sunnah-store-server-azure.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data); // API থেকে আসা প্রোডাক্ট ডেটা সেট করা হচ্ছে
      })
      .catch((err) => console.log(err)) // কোনো ইরর থাকলে লগ করা হচ্ছে
      .finally(() => {
        setLoading(false); // লোডিং শেষ হয়েছে
      });
  }, []);

  const { key } = useParams(); // ডাইনামিক URL প্যারামিটার `key` রিসিভ করা হচ্ছে
  const category = categoryData.find((cat) => cat.path === `/${key}`); // URL থেকে ক্যাটাগরি ম্যাপ করা হচ্ছে

  // যদি কোনো ক্যাটাগরি নির্দিষ্ট না থাকে, `/books` এ রিডাইরেক্ট করবে
  if (!key) {
    return <Navigate to="/books" replace />;
  }

  // যদি `key` অবৈধ হয়, একটি ইরর থ্রো করা হচ্ছে
  if (!category) {
    throw new Error("Invalid key");
  }

  // প্রোডাক্ট ফিল্টার করা হচ্ছে, যেখানে ক্যাটাগরি মিলছে
  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === category?.catName.toLowerCase()
  );

  // লোডিং স্টেট দেখানোর জন্য
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {/* ক্যাটাগরি ট্যাব */}
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

      {/* ক্যাটাগরি কন্টেন্ট */}
      <div className="p-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          {category?.catName}
        </h2>
        {/* প্রোডাক্ট লিস্ট */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts
              .slice(0, 5) // প্রথম পাঁচটি প্রোডাক্ট দেখানো হচ্ছে
              .map((product) => (
                <ProductCart key={product?._id} product={product} /> // প্রোডাক্ট কার্ড কম্পোনেন্ট
              ))
          ) : (
            <p>No products available in this category.</p> // যদি প্রোডাক্ট না থাকে
          )}
        </div>
        {/* প্রোডাক্টের "Load More" বাটন */}
        {filteredProducts && (
          <Link to={`/products/${key}`}>
            {" "}
            <button className="bg-primary mt-6">Load More</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Categories;
