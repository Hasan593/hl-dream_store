/* eslint-disable react-hooks/exhaustive-deps */

import { useLoaderData, useParams } from "react-router-dom";
import ProductCart from "./Product/ProductCart";
import FilterProduct from "./Product/FilterProduct";
import { useEffect, useState } from "react";

const Products = () => {
    const loaderData = useLoaderData();
    const products = loaderData.data || []; // Ensure products is always an array

    const [sortBy, setSortBy] = useState(0);
    const [sortProducts, setSortProducts] = useState(products);

    const { key } = useParams();

    useEffect(() => {
        let sorted = [...products];
        switch (sortBy) {
            case 1:
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 2:
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 3:
                sorted.sort((a, b) => a.averageRating - b.averageRating);
                break;
            case 4:
                sorted.sort((a, b) => a.individuaRating - b.individuaRating);
                break;

            default:
                break;
        };
        setSortProducts(sorted);
    }, [sortBy, products]);

    const handleSortChange = e => {
        const selectedValue = parseInt(e.target.value);
        setSortBy(selectedValue);
    };

    return (
        <>
            <FilterProduct handleSortChange={handleSortChange} />
            <h1 className="text-2xl capitalize font-bold border-b-4 border-fuchsia-700 w-fit ml-4">
                {
                    key ? key === "groceries" ? "groceries & foods" : key : "all products"
                }
                {" "}
                ({
                    products.length
                })
            </h1>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {sortProducts.map((product) => (
                    <ProductCart key={product._id} product={product} />
                ))}
            </div>
        </>
    );
};

export default Products;