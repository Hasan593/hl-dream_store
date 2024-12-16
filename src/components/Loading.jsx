
const Loading = () => {
    return (
        <>
            {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="relative flex items-center justify-center">
                    <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="absolute text-blue-500 m-5 font-semibold">Loading</span>
                </div>
            </div> */}

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 bg-blue-500 rounded-full animate-step w-0%"></div>
                </div>
            </div>


        </>
    );
};

export default Loading;

