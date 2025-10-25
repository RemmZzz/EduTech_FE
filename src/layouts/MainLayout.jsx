// src/features/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
// Import từ thư mục components chung
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";

function MainLayout() {
  return (
    // "flex flex-col" làm cho Header luôn ở trên, nội dung ở dưới
    <div className="flex h-screen flex-col">
      
      {/* Header cố định */}
      <Header />
      
      {/* "flex-grow" làm cho phần thân chiếm hết chiều cao còn lại */}
      <div className="flex flex-grow overflow-hidden">
        
        {/* Sidebar cố định */}
        <Sidebar />
        
        {/* "flex-grow" + "overflow-y-auto" làm cho chỉ nội dung chính cuộn */}
        <main className="flex-grow overflow-y-auto bg-gray-50 p-6">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}

export default MainLayout;