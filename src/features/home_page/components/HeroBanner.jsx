// src/features/home_page/components/HeroBanner.jsx
import React from 'react';
import Slider from 'react-slick';
// Import CSS của thư viện react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Tùy chỉnh nhỏ cho dấu chấm của Slider
const SampleNextArrow = (props) => <div style={{...props.style, display: 'none'}} />
const SamplePrevArrow = (props) => <div style={{...props.style, display: 'none'}} />


function HeroBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // Tùy chỉnh dấu chấm bằng Tailwind
    appendDots: dots => (
      <div className="!bottom-4">
        <ul className="m-0"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 rounded-full bg-white opacity-50 transition-all duration-300 active:opacity-100"></div>
    )
  };

  return (
    <div className="mb-8 w-full">
      <Slider {...settings}>
        
        {/* Slide 1 */}
        <div className="relative !flex h-72 items-center rounded-lg overflow-hidden">
          <img src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=800" alt="AI Solver" className="absolute h-full w-full object-cover"/>
          <div className="absolute h-full w-full bg-gradient-to-r from-black/70 to-black/30"></div>
          <div className="relative z-10 p-10 text-white">
            <h3 className="text-3xl font-bold mb-2">Trợ lý AI Giải Bài Tập</h3>
            <p className="max-w-md text-lg mb-4">Giải mọi bài tập Tự nhiên, Xã hội chỉ trong 3 giây!</p>
            <button className="rounded-lg bg-yellow-500 px-5 py-2.5 font-semibold text-white transition-all hover:bg-yellow-600">
              Thử ngay!
            </button>
          </div>
        </div>
        
        {/* Slide 2 */}
        <div className="relative !flex h-72 items-center rounded-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800" alt="Top Tutors" className="absolute h-full w-full object-cover"/>
          <div className="absolute h-full w-full bg-gradient-to-r from-black/70 to-black/30"></div>
          <div className="relative z-10 p-10 text-white">
            <h3 className="text-3xl font-bold mb-2">Gia Sư Hàng Đầu</h3>
            <p className="max-w-md text-lg mb-4">Kết nối 1 kèm 1 với gia sư chuyên môn cao.</p>
            <button className="rounded-lg border-2 border-white bg-transparent px-5 py-2.5 font-semibold text-white transition-all hover:bg-white hover:text-black">
              Tìm gia sư
            </button>
          </div>
        </div>

      </Slider>
    </div>
  );
}

export default HeroBanner;