import React from 'react';

function PackageCard({ packageData }) {
  const { title, description, price, duration, image, popular } = packageData;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative h-52">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${image})` }}
        />
        {popular && (
          <div className="absolute top-4 left-0 bg-emerald-600 text-white px-3 py-1 text-sm font-semibold shadow-md">
            Popular
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <div className="text-emerald-600 font-bold">${price}</div>
        </div>

        <div className="flex items-center text-gray-500 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{duration}</span>
        </div>

        <p className="text-gray-600 text-sm">{description}</p>
        
        <div className="pt-3 flex justify-between items-center gap-2">
          <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md transition-colors text-sm font-medium">
            Book Now
          </button>
          <button className="border border-gray-300 hover:border-emerald-600 p-2 rounded-md text-gray-600 hover:text-emerald-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;