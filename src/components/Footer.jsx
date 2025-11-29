// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-10 bg-[#003545] text-white">
      {/* phần trên */}
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Cột 1: logo + mô tả ngắn */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="EduTech logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-lg font-bold tracking-wide">
                EduTech
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-200">
              Nền tảng gia sư & khóa học trực tuyến giúp học sinh
              cá nhân hóa lộ trình và bứt phá điểm số.
            </p>
          </div>

          {/* Cột 2: Về EduTech */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-[#00b8d4]">
              Về EduTech
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li>
                <Link to="/about" className="hover:text-[#00b8d4]">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/tutors" className="hover:text-[#00b8d4]">
                  Đội ngũ gia sư
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#00b8d4]">
                  Các khóa học
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-[#00b8d4]">
                  Blog & Tin tức
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-[#00b8d4]">
              Hỗ trợ
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li>
                <Link to="/faqs" className="hover:text-[#00b8d4]">
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-[#00b8d4]">
                  Đặt lịch học thử
                </Link>
              </li>
              <li>
                <Link to="/checkout/result" className="hover:text-[#00b8d4]">
                  Tra cứu thanh toán
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00b8d4]">
                  Liên hệ hỗ trợ
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 4: Liên hệ */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-[#00b8d4]">
              Liên hệ
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li>Email: <span className="text-[#00b8d4]">support@edutech.vn</span></li>
              <li>Hotline: <span className="text-[#00b8d4]">1900 1 chiếc dép tông</span></li>
              <li>Thời gian: 8:00 – 21:00 (T2 – CN)</li>
              <li>Địa chỉ: Quận Liên Chiểu, Đà Nẵng</li>
            </ul>
          </div>
        </div>
      </div>

      {/* gạch phân cách + bản quyền */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-xs text-gray-300 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} EduTech. All rights reserved.</p>
          <p className="text-[11px]">
           Công ty TNHH 3 thành viên DMP
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
