import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(
                    `https://sunnah-store-server-azure.vercel.app/product/${id}`
                );
                setProduct(data);
            } catch (error) {
                console.error('error fetching data', error)
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);


    const {
        status,
        image,
        name,
        category,
        description,
        price,
        individualRating,
        averageRating,
        keyFeatures = {},
    } = product || {};

    if (loading) {
        <p>loading......</p>
    }

    return (
        <div className="overflow-auto mt-16 inset-x-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
            <div className="bg-white relative rounded-lg shadow-lg max-w-3xl w-full p-6">
                {/* Close Button */}
                <Link to='/product'>
                    <button
                        className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
                        onClick=''
                    >
                        ✖
                    </button>
                </Link>

                {/* Stock Status */}
                <div className="absolute top-4 left-4">
                    {status ? (
                        <p className="text-pink-700 bg-pink-300 rounded-md mt-2 px-2 w-fit">In Stock</p>
                    ) : (
                        <p className="text-pink-700 bg-pink-300 rounded-md mt-2 px-2 w-fit">Out Of Stock</p>
                    )}
                </div>

                <div className="flex items-center flex-col lg:flex-row lg:space-x-6">
                    {/* Product Image */}
                    <div className="flex justify-center mb-4 lg:mb-0 lg:w-1/2">
                        <img
                            src={image || "https://via.placeholder.com/150"}
                            alt={name || "Product Image"}
                            className="object-cover rounded-lg max-w-full h-auto"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="lg:w-1/2 flex flex-col gap-1">
                        <h2 className="text-2xl font-bold mb-2">{name || "Product Name"}</h2>
                        {/* Description */}
                        <p className="text-gray-600 mb-4">{description || "Category"}</p>

                        {/* Key Features */}
                        <h1 className="text-[20px] font-bold">Key Features:</h1>
                        {
                            Object.entries(keyFeatures).length > 0 ? (
                                Object.entries(keyFeatures).map(([featureKey, fetureValue]) => (
                                    <div key={featureKey} className="font-bold capitalize text-xl">
                                        <span className="text-gray-600 text-[18px]">{featureKey}:</span> {' '}
                                        <span className="text-pink-600">{fetureValue}</span>
                                    </div>
                                ))
                            ) : (
                                <p>No specific key features available.</p>
                            )
                        }
                        {
                            <p className="font-bold text-xl text-gray-600">Category: <span className="text-pink-600">{category}</span></p>
                        }
                        {/* Ratings */}
                        <div className="gap-4">
                            <span className="text-gray-600 font-bold text-xl">
                                IndividualRating: {' '}
                                <span className="text-yellow-500">
                                    {"★".repeat(Math.floor(individualRating || 0))}
                                    {"☆".repeat(5 - Math.floor(individualRating || 0))}
                                </span>
                            </span>
                            <p className="text-gray-600 font-bold text-xl ">
                                averageRating:
                                <span className="text-pink-600">{' '}
                                    {averageRating ? `${averageRating}/5` : "No Ratings"}
                                </span>
                            </p>
                        </div>

                        {/* Price */}
                        <div className="text-xl font-bold text-green-600">
                            Price: ৳{price || "0.00"}
                        </div>

                        <p className="text-xs text-gray-500 my-3">*Shipping and taxes extra</p>

                        <div className="flex flex-wrap gap-4">
                            {/* Add to Wishlist Button */}
                            <button
                                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300 w-full lg:w-auto"
                                onClick={() => {
                                    console.log("Added to Wishlist");
                                    // Wishlist এ যুক্ত করার জন্য আপনার লজিক এখানে যুক্ত করুন।
                                }}
                            >
                                Add to Wishlist
                            </button>

                            {/* Add to Cart Button */}
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 w-full lg:w-auto"
                                onClick={() => {
                                    console.log("Added to Cart");
                                    // Cart এ যুক্ত করার জন্য আপনার লজিক এখানে যুক্ত করুন।
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
