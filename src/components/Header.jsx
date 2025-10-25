// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 h-20 md:h-24 overflow-hidden">
      {/* Logo */}
      <div className="flex-shrink-0 h-full">
        <Link to="/" className="flex items-center h-full">
          {/* logo nằm trong public: /logo.png */}
          <img
            src="/logo3.png"
            alt="EduTech logo"
            className="h-full w-auto block object-contain scale-[1.2]"
          />
        </Link>
      </div>

      {/* Search */}
      <div className="flex-grow max-w-lg mx-4">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FaSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Tìm kiếm gia sư, môn học..."
            className="block w-full rounded-md border border-gray-300 bg-gray-50 py-2 pl-10 pr-3 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Nav phải */}
      <nav className="flex items-center gap-x-4">
        <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <FaBell className="h-5 w-5" />
        </button>
        <button className="flex items-center gap-x-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          <FaUserCircle className="h-5 w-5" />
          <span>Đăng nhập</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
