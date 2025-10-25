// src/features/home_page/components/TutorCard.jsx
import React from 'react';
// 1. Thêm icon FaArrowRight
import { FaStar, FaVideo, FaArrowRight } from 'react-icons/fa'; 

// 2. Thêm prop 'isSeeMore'
function TutorCard({ tutor, isSeeMore }) {

  // 3. Nếu là card "Xem thêm"
 // SỬA LẠI THÀNH DÒNG NÀY
if (isSeeMore) {
  return (
    <div className="group flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:bg-gray-50 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-500 transition-transform group-hover:scale-110">
        <FaArrowRight className="h-5 w-5" />
      </div>
      <span className="mt-4 text-base font-semibold text-gray-800">Xem thêm</span>
    </div>
  );
}

  // 4. Nếu là card gia sư bình thường (Code cũ, không đổi)
  return (
    <div className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-44">
        <img src={tutor.imageUrl} alt={tutor.name} className="h-full w-full object-cover" />
        <span 
          className={`absolute top-2 left-2 rounded px-2 py-1 text-xs font-bold text-white ${
            tutor.isOnline ? 'bg-green-500' : 'bg-gray-500'
          }`}
        >
          {tutor.isOnline ? 'Online' : 'Offline'}
        </span>
        {tutor.isTeaching && (
          <div className="absolute bottom-2 left-2 flex items-center rounded bg-red-600 px-2 py-1 text-xs text-white">
             <FaVideo className="mr-1" /> 
             <span>Đang dạy</span>
          </div>
        )}
        <div className="absolute bottom-2 right-2 rounded bg-black bg-opacity-60 px-2 py-1 text-xs font-bold text-white">
           {tutor.price}K / giờ
        </div>
      </div>
      <div className="flex items-center p-3">
        <img src={tutor.avatarUrl} alt={tutor.name} className="h-10 w-10 flex-shrink-0 rounded-full object-cover" />
        <div className="ml-3 flex-grow">
          <h5 className="truncate text-sm font-semibold text-gray-900 group-hover:text-blue-600">
            {tutor.name}
          </h5>
          <p className="text-xs text-gray-600">{tutor.subject}</p>
        </div>
        <div className="flex flex-shrink-0 items-center text-xs font-bold text-gray-700">
            <FaStar className="mr-1 text-yellow-400" />
            <span>{tutor.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default TutorCard;