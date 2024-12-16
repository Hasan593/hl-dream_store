import { useLoaderData } from "react-router-dom";
import ProductCart from "./Product/ProductCart";

const Products = () => {
    const loaderData = useLoaderData();
    const products = loaderData.data || []; // Ensure products is always an array

    return (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product) => (
                <ProductCart key={product._id} product={product} />
            ))}
        </div>
    );
};

export default Products;