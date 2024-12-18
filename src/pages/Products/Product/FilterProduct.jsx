/* eslint-disable react/prop-types */

const FilterProduct = ({handleSortChange}) => {

    const sortOptin = [
        {id: 0, label: 'Select Shorting Option'},
        {id: 1, label: 'Price: Low to High'},
        {id: 2, label: 'Price: High to Low'},
        {id: 3, label: 'Rating'},
        {id: 4, label: 'Top Sales'}
    ];

    return (
        <div className="flex justify-between items-center border-pink-500 border-b-2 pb-2 m-4">
            <h1 className="text-2xl font-bold">Filter Products</h1>
            <select className="rounded-md border-2" name="" id="" onChange={handleSortChange}>
                {
                    sortOptin.map(option => (
                        <option key={option.id} value={option.id}>{option.label}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default FilterProduct;