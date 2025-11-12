import React from 'react';

const ListingCard = ({listing}) => {
    return (
        <div>
              <>
            <div className="relative bg-gradient-to-br from-red-100 to-red-200 rounded-2xl shadow-md hover:shadow-xl transition p-4 mx-auto">
      {/* Favorite Icon */}
      <button className="absolute top-3 right-3 bg-white rounded-full p-1 shadow hover:bg-purple-100 transition">
        
      </button>

      {/* Image */}
      <div className="bg-white rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
          alt={listing.name}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Details */}
      <div className="bg-white -mt-4 p-4 rounded-xl">
        <h3 className="font-semibold pt-4 text-lg text-gray-800">{listing.name}</h3>
        <div className="flex gap-2 mt-1 mb-2">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-700">
            {listing.category}
          </span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-700">
            {listing.location}
          </span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2">
          {listing.description}
        </p>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-xs text-gray-400">PRICE</p>
            <p className="text-lg font-semibold text-gray-900">
              {listing.price === 0 ? "Free" : `৳${listing.price}`}
            </p>
          </div>
          <button className="bg-[#30b5b2] text-white px-4 py-2 rounded-lg transition">
            See Details
          </button>
        </div>
      </div>
    </div>
                    </>
        </div>
    );
};

export default ListingCard;