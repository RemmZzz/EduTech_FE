// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaRobot, FaChalkboardTeacher, FaFire } from 'react-icons/fa';
import { IoCalculator } from "react-icons/io5";

// Hàm helper để gán class cho NavLink
const getNavLinkClass = ({ isActive }) =>
  isActive
    ? 'flex items-center p-2 rounded-lg bg-blue-100 text-blue-700 font-medium'
    : 'flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-100';

function Sidebar() {
  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200 p-4 overflow-y-auto">
      <nav className="flex flex-col gap-y-4">
        
        {/* Nhóm 1 */}
        <div className="flex flex-col gap-y-1">
          <NavLink to="/" className={getNavLinkClass} end>
            <FaHome className="mr-3 h-5 w-5" />
            <span>Trang chủ</span>
          </NavLink>
        </div>

        {/* Nhóm 2 */}
        <div className="flex flex-col gap-y-1">
          <h4 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
            Dịch vụ
          </h4>
          <NavLink to="/ai-solver" className={getNavLinkClass}>
            <FaRobot className="mr-3 h-5 w-5" />
            <span>AI Giải Bài</span>
            <span className="ml-auto text-xs bg-red-500 text-white font-bold px-2 py-0.5 rounded">
              MỚI
            </span>
          </NavLink>
          <NavLink to="/tutors" className={getNavLinkClass}>
            <FaChalkboardTeacher className="mr-3 h-5 w-5" />
            <span>Tìm Gia Sư</span>
          </NavLink>
          <NavLink to="/tutors-hot" className={getNavLinkClass}>
            <FaFire className="mr-3 h-5 w-5 text-red-500" />
            <span>Gia sư HOT</span>
          </NavLink>
        </div>

        {/* Nhóm 3 */}
        <div className="flex flex-col gap-y-1">
          <h4 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
            Gia sư theo môn
          </h4>
          <NavLink to="/tutors/toan" className={getNavLinkClass}>
            <IoCalculator className="mr-3 h-5 w-5" />
            <span>Toán</span>
          </NavLink>
          {/* ... Thêm các môn khác ... */}
        </div>

      </nav>
    </aside>
  );
}

export default Sidebar;