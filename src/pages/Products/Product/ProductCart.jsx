/* eslint-disable react/prop-types */
const ProductCart = ({ product }) => {
    const { image, name, price, individualRating } = product || {};
    return (
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Product Image */}
                <div className="mb-4">
                    <img
                        src={image || 'https://via.placeholder.com/150'}  // Fallback if no image
                        alt={name || 'Product image'}
                        className="w-full h-48 object-cover rounded-lg"
                    />
                </div>

                {/* Product Details */}
                <div>
                    {/* Product Name */}
                    <h3 className="font-semibold text-xl mb-2">{name || 'Product Name'}</h3>

                    {/* Product Rating */}
                    <div className="flex items-center mb-2">
                        <span className="text-yellow-500">
                            {"★".repeat(Math.floor(individualRating))} {/* Render full stars */}
                            {"☆".repeat(5 - Math.floor(individualRating))} {/* Render empty stars */}
                        </span>
                    </div>

                    {/* Product Price */}
                    <p className="text-lg font-bold text-gray-800 mb-4">Price: ${price || '0.00'}</p>
                </div>
            </div>
    );
};

export default ProductCart;