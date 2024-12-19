/* eslint-disable react/prop-types */

const FilterProduct = ({ handleSortChange }) => {

    const sortOptin = [
        { id: 0, label: 'Select Shorting Option' },
        { id: 1, label: 'Price: Low to High' },
        { id: 2, label: 'Price: High to Low' },
        { id: 3, label: 'Rating' },
        { id: 4, label: 'Top Sales' }
    ];

    return (
        <div className="flex mt-20 flex-col sm:flex-row justify-between items-center border-pink-500 border-b-2 pb-2 m-4 gap-4">
            {/* শিরোনাম */}
            <h1 className="text-2xl font-bold text-center sm:text-left">Filter Products</h1>

            {/* সিলেক্ট বক্স */}
            <select
                className="rounded-md border-2 p-2 w-full sm:w-auto"
                name=""
                id=""
                onChange={handleSortChange}
            >
                {sortOptin.map(option => (
                    <option key={option.id} value={option.id}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>

    );
};

export default FilterProduct;