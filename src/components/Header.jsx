// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const actions = [
  { label: "CÁC KHÓA HỌC", to: "/khoa-hoc" },
  { label: "GIA SƯ", to: "/gia-su-gioi" },
  { label: "AI HỌC TẬP", to: "/ai" },
  { label: "ĐĂNG NHẬP", to: "/dang-nhap" },
];

function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white shadow-sm">
      {/* H header cố định, không dùng margin âm / translate */}
      <div className="flex h-[72px] w-full items-center justify-between px-6">
        {/* Logo bên trái */}
        <Link to="/" className="flex h-full items-center">
          <img
            src="/logo.png"
            alt="EduTech logo"
            className="block h-[70px] w-auto object-contain"
          />
        </Link>

        {/* Menu bên phải */}
        <nav className="flex items-center gap-4">
          {actions.map((item) => (
            <div key={item.label} className="relative">
              <div className="absolute inset-0 translate-x-[3px] translate-y-[3px] rounded-md border-2 border-[#008fa1]" />
              <Link
                to={item.to}
                className="relative inline-flex items-center justify-center rounded-md bg-[#00b8d4] px-6 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#00a3bd]"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
