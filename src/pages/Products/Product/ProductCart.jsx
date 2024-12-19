/* eslint-disable react/prop-types */
import { BsCartPlus } from "react-icons/bs";
import { FaArrowRightLong, FaBangladeshiTakaSign } from "react-icons/fa6";
import { Rating } from '@smastrom/react-rating';
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCart = ({ product }) => {
    const { _id, image, name, price, individualRating, status } = product || {};
    return (
        <>
            <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                {/* Product Price */}
                <div className="flex justify-between items-center">
                    <p className="flex justify-between text-lg font-bold bg-pink-300 text-pink-700 w-fit px-2 rounded-md items-center">
                        <FaBangladeshiTakaSign className="mr-1" />{price || '0.00'}
                    </p>
                    <FaHeart className="text-pink-700 w-8 h-8" />
                </div>
                {/* Product Image */}
                <Link to={`/product/${_id}`}>
                    <div className="mb-4">
                        <img
                            src={image || 'https://via.placeholder.com/150'}
                            alt={name || 'Product image'}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                    </div>
                </Link>

                {/* Product Details */}
                <div className="flex-grow">
                    {/* Product Name */}
                    <h3 className="font-semibold text-lg mb-2 text-center line-clamp-2">
                        {name || 'Product Name'}
                    </h3>
                </div>
                {/* Product Rating */}
                <div className="flex gap-4 items-center mb-2">
                    <span className="text-yellow-500">
                        <Rating style={{ maxWidth: 100 }} readOnly value={individualRating} />                            {"☆".repeat(5 - (individualRating || 0))} {/* Empty stars */}
                    </span>
                    {individualRating.toFixed(1)}/5
                </div>

                {/** Product Status */}
                {
                    status
                        ?
                        <p className="text-pink-700 bg-pink-300 rounded-md mt-2 px-2 w-fit">In Sotck</p>
                        :
                        <p className="text-pink-700 bg-pink-300 rounded-md mt-2 px-2 w-fit">Out Of Sotck</p>
                }

                {/* Button */}
                <div className="flex items-center mt-4">
                    <Link className="w-full" to={`/product/${_id}`}>
                    <button className="w-full flex items-center gap-4 justify-center border-pink-700 border-2 text-pink-700 hover:bg-pink-800 hover:text-white py-2 rounded-lg font-bold">
                        See Details <FaArrowRightLong />
                    </button>
                    </Link>
                    <BsCartPlus title="Add to cart" className={
                        `px-2 w-14 py-2 h-10 rounded-md ml-2 text-white bg-pink-600 
                        ${status ? "hover:bg-pink-800 hover:text-white" : "hover: cursor-not-allowed"}`
                    } />
                </div>
            </div>
        </>


    );
};

export default ProductCart;