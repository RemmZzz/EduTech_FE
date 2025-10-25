// src/features/home_page/components/TutorList.jsx

import React from 'react'; // Bỏ 'useRef'
import TutorCard from './TutorCard';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick'; // 1. Import Slider

// 2. Định nghĩa mũi tên tùy chỉnh (Style ngoài, cân bằng với ảnh)
// Class 'top-22' (88px) là khoảng 1/2 chiều cao của ảnh (h-44 / 176px)
const ArrowBaseClasses = "absolute top-24 z-10 -translate-y-1/2 transform rounded-full bg-white/30 p-2.5 text-gray-700 transition-all duration-300 hover:bg-white/60 hover:shadow-lg focus:outline-none";

const CustomPrevArrow = (props) => {
  const { onClick, currentSlide } = props;
  if (currentSlide === 0) {
    return null;
  }
  return (
    <button 
      className={`${ArrowBaseClasses} -left-4`}
      onClick={onClick}
      aria-label="Scroll left"
    >
      <FaChevronLeft className="h-4 w-4" />
    </button>
  );
};

const CustomNextArrow = (props) => (
  <button 
    className={`${ArrowBaseClasses} -right-4`} // Đẩy ra ngoài bên phải
    onClick={props.onClick}
    aria-label="Scroll right"
  >
    <FaChevronRight className="h-4 w-4" />
  </button>
);


function TutorList({ title, tutors, layout = 'grid' }) {
  
  const seeAllLink = title.includes('Top') ? '/tutors/top' : '/tutors/online';

  // 3. Định nghĩa Cài đặt cho Slider
  const settings = {
    dots: false, // <-- Bỏ thanh cuộn/dots ở dưới
    infinite: false, // <-- Quan trọng: vì có card "Xem thêm" ở cuối
    speed: 500,
    slidesToShow: 4, // Hiển thị 4 card
    slidesToScroll: 1, // Cuộn 1 card mỗi lần
    nextArrow: <CustomNextArrow />, // Dùng mũi tên tùy chỉnh
    prevArrow: <CustomPrevArrow />, // Dùng mũi tên tùy chỉnh
    responsive: [ // Cấu hình cho màn hình nhỏ hơn
      {
        breakpoint: 1024, // Dưới 1024px
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, // Dưới 768px
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640, // Dưới 640px
        settings: {
          slidesToShow: 1,
          arrows: false, // Ẩn mũi tên trên điện thoại
        }
      }
    ]
  };

  // Hàm render danh sách
  const renderTutors = () => {
    if (!tutors || tutors.length === 0) {
      return <p className="text-gray-600">Không tìm thấy gia sư nào.</p>;
    }

    // NẾU layout là 'scroll', DÙNG SLIDER
    if (layout === 'scroll') {
      return (
        // 4. Thêm padding ngang (px-10) để có chỗ cho mũi tên
        <div className="relative px-10"> 
<Slider {...settings}>
  {/* Map qua các gia sư */}
  {tutors.map(tutor => (
    <div key={tutor.id} className="px-2.5"> {/* <-- Đã bỏ py-2 */}
      <TutorCard tutor={tutor} />
    </div>
  ))}
  
  {/* Thêm card "Xem thêm" vào cuối */}
  <div className="px-2.5"> {/* <-- Đã bỏ py-2 */}
    <Link to={seeAllLink} className="block h-full">
      <TutorCard isSeeMore={true} /> 
    </Link>
  </div>
</Slider>
        </div>
      );
    }

    // MẶC ĐỊNH (layout='grid'), render kiểu lưới (Không đổi)
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tutors.map(tutor => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>
    );
  };

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        
        {/* 7. Chỉ hiển thị link "Xem tất cả" cho layout 'grid' */}
        {layout === 'grid' && (
          <Link 
            to={seeAllLink} 
            className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 group"
          >
            Xem tất cả
            <FaArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
      
      {renderTutors()}
      
    </section>
  );
}

export default TutorList;