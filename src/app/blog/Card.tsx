const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 ">
      <img
        className="w-full h-48 object-cover rounded-t"
        src="https://source.unsplash.com/random"
        alt="Card header"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          Best food spots near campus
        </div>
        <p className="text-gray-700 text-base">
          Discover the top 10 food spots near campus that you need to try.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          5 days ago
        </span>
      </div>
    </div>
  );
};

export default Card;
