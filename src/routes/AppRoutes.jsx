import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// 1. IMPORT CÁC COMPONENT THẬT CHO TRANG CHỦ
import MainLayout from "../layouts/MainLayout.jsx"; // <-- "Cái Khung"
import HomePage from '../features/home_page/homepage' // <-- "Cái Ruột"

// --- Auth pages (Giữ nguyên placeholder) ---
const Login = () => <div className="p-10 text-center">Login Page</div>
const Register = () => <div className="p-10 text-center">Register Page</div>
const ForgotPassword = () => <div className="p-10 text-center">Forgot Password</div>

// --- Public pages (Giữ nguyên, chỉ xóa 'Home') ---
// const Home = () => <div className="p-10 text-center">Home Page</div> // <-- 2. XÓA DÒNG NÀY
const Tutors = () => <div className="p-10 text-center">Tutor List</div>
const TutorDetail = () => <div className="p-10 text-center">Tutor Detail</div>
const Courses = () => <div className="p-10 text-center">Course List</div>
const CourseDetail = () => <div className="p-10 text-center">Course Detail</div>
const CourseViewer = () => <div className="p-10 text-center">Course Viewer</div>
const Booking = () => <div className="p-10 text-center">Schedule Booking</div>
const PaymentResult = () => <div className="p-10 text-center">Payment Result</div>
const Faqs = () => <div className="p-10 text-center">FAQs</div>
const Blogs = () => <div className="p-10 text-center">Blogs</div>

// --- Dashboards (Giữ nguyên placeholder) ---
const StudentDashboard = () => <div className="p-10 text-center">Student Dashboard</div>
const MyCourses = () => <div className="p-10 text-center">My Courses</div>
const MyBookings = () => <div className="p-10 text-center">My Bookings</div>
const MyCertificates = () => <div className="p-10 text-center">My Certificates</div>
const AiAssistant = () => <div className="p-10 text-center">AI Assistant</div>
const Notifications = () => <div className="p-10 text-center">Notifications</div>

const TutorDashboard = () => <div className="p-10 text-center">Tutor Dashboard</div>
const TutorProfile = () => <div className="p-10 text-center">Tutor Profile</div>
const TutorSchedule = () => <div className="p-10 text-center">Tutor Schedule</div>
const TutorCourses = () => <div className="p-10 text-center">Tutor Courses</div>
const TutorBookings = () => <div className="p-10 text-center">Tutor Bookings</div>
const TutorReviews = () => <div className="p-10 text-center">Tutor Reviews</div>

const AdminOverview = () => <div className="p-10 text-center">Admin Overview</div>
const TutorApproval = () => <div className="p-10 text-center">Tutor Approval</div>
const ManageUsers = () => <div className="p-10 text-center">Manage Users</div>
const ManageCourses = () => <div className="p-10 text-center">Manage Courses</div>
const ManageTransactions = () => <div className="p-10 text-center">Manage Transactions</div>
const Reports = () => <div className="p-10 text-center">Reports</div>

export default function AppRoutes() {
  return (
    <Routes>
      
      {/* 3. THAY THẾ ROUTE TRANG CHỦ */}
      {/* Route này bọc trang chủ trong layout (Header/Sidebar) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* --- TẤT CẢ CÁC ROUTE CŨ VẪN GIỮ NGUYÊN --- */}
      
      {/* Public (trừ trang chủ) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/tutors" element={<Tutors />} />
      <Route path="/tutors/:id" element={<TutorDetail />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CourseDetail />} />
      <Route path="/dashboard/courses/:id" element={<CourseViewer />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/checkout/result" element={<PaymentResult />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/blogs" element={<Blogs />} />

      {/* Student Dashboard */}
      <Route path="/dashboard" element={<StudentDashboard />} />
      <Route path="/dashboard/courses" element={<MyCourses />} />
      <Route path="/dashboard/bookings" element={<MyBookings />} />
      <Route path="/dashboard/certificates" element={<MyCertificates />} />
      <Route path="/dashboard/ai" element={<AiAssistant />} />
      <Route path="/dashboard/notifications" element={<Notifications />} />

      {/* Tutor */}
      <Route path="/tutor" element={<TutorDashboard />} />
      <Route path="/tutor/profile" element={<TutorProfile />} />
      <Route path="/tutor/schedule" element={<TutorSchedule />} />
      <Route path="/tutor/courses" element={<TutorCourses />} />
      <Route path="/tutor/bookings" element={<TutorBookings />} />
      <Route path="/tutor/reviews" element={<TutorReviews />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminOverview />} />
      <Route path="/admin/tutors-approval" element={<TutorApproval />} />
      <Route path="/admin/users" element={<ManageUsers />} />
      <Route path="/admin/courses" element={<ManageCourses />} />
      <Route path="/admin/transactions" element={<ManageTransactions />} />
      <Route path="/admin/reports" element={<Reports />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}