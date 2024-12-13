import { useEffect, useState } from "react";

const OfferModal = () => {

    const [isOpen, setIsOpen] = useState(false);

    // Modal automatically opens when the page loads
    useEffect(() => {
        setIsOpen(true);
    }, []);

    // Function to close the modal
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
            <div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-xl font-semibold mb-4">Special Offer Just for You!</h2>
                        <p className="mb-4">Get 20% off on your first purchase. Use code: <strong>WELCOME20</strong></p>
                        <button
                            onClick={closeModal}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OfferModal;