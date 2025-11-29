import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer";


function MainLayout() {
  return (
    // Dùng min-h-screen để trang *có thể cao hơn* màn hình
    <div className="min-h-screen bg-white">
      <Header />

      {/* Phần nội dung cho phép cuộn */}
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
