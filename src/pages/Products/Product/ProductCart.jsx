/* eslint-disable react/prop-types */
import { TbCurrencyTaka } from "react-icons/tb";
import { BsCartPlus } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { Rating } from '@smastrom/react-rating';

const ProductCart = ({ product }) => {
    const { image, name, price, individualRating } = product || {};
    return (
        <>
            <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                {/* Product Image */}
                <div className="mb-4">
                    <img
                        src={image || 'https://via.placeholder.com/150'}
                        alt={name || 'Product image'}
                        className="w-full h-48 object-cover rounded-lg"
                    />
                </div>

                {/* Product Details */}
                <div className="flex-grow">
                    {/* Product Name */}
                    <h3 className="font-semibold text-lg mb-2 text-center line-clamp-2">
                        {name || 'Product Name'}
                    </h3>

                    {/* Product Rating */}
                    <div className="flex justify-center gap-4 items-center mb-2">
                        <span className="text-yellow-500">
                        <Rating style={{ maxWidth: 100 }} readOnly value={individualRating} />                            {"☆".repeat(5 - (individualRating || 0))} {/* Empty stars */}
                        </span>
                        {individualRating.toFixed(1)}/5
                    </div>

                    {/* Product Price */}
                    <p className="text-lg font-bold text-gray-800 flex justify-center items-center">
                        Price: <TbCurrencyTaka className="inline-block ml-1" />{price || '0.00'}
                    </p>
                </div>

                {/* Button */}
                <div className="flex items-center mt-4">
                    <button className="w-full flex items-center gap-4 justify-center border-pink-700 border-2 text-pink-700 hover:bg-pink-800 hover:text-white py-2 rounded-lg font-bold">
                        See Details <FaArrowRightLong />
                    </button>
                    <BsCartPlus className="px-2 w-14 py-2 h-10 rounded-md ml-2 text-white bg-pink-600 hover:bg-pink-800" />
                </div>
            </div>
        </>


    );
};

export default ProductCart;