const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <div className="text-center animate-fade-in">
                <h1 className="text-6xl font-bold text-red-500 animate-bounce">404</h1>
                <p className="text-2xl mt-4">Page Not Found</p>
                <p className="text-gray-600 mt-2">
                    Sorry, the page you are looking for does not exist.
                </p>
                <button
                    onClick={() => window.location.href = '/'}
                    className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transform transition-all duration-300 hover:scale-110"
                >
                    Go Back Home
                </button>
            </div>
        </div>
    );
};

export default NotFound;