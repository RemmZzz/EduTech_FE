
# 🎓 EduTech - Frontend (React + TailwindCSS + Vite)

## 📘 Overview
EduTech là nền tảng học tập trực tuyến giúp kết nối giữa **học viên**, **gia sư**, và **quản trị viên**.  
Frontend được xây dựng bằng **ReactJS**, **Vite**, **TailwindCSS**, và tích hợp với backend Spring Boot qua REST API.

---

## 🏗️ Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend Framework** | ReactJS (Vite) |
| **UI Framework** | TailwindCSS, DaisyUI / Bootstrap Grid (Responsive) |
| **Routing** | React Router v6 |
| **State Management** | Redux Toolkit / Context API |
| **HTTP Client** | Axios |
| **Auth** | JWT + Google OAuth2 |
| **Build Tool** | Vite |
| **Deployment** | Vercel / Netlify / Render |

---

## 📂 Project Structure

```
edutech-fe/
│
├── src/
│   ├── api/                  # Axios instance & API calls
│   ├── assets/               # Hình ảnh, biểu tượng, logo
│   ├── components/           # Component dùng chung (Navbar, Footer, Button, ...)
│   ├── features/
│   │   ├── auth/             # Login, Register, Forgot Password
│   │   ├── dashboard/        # Giao diện học viên
│   │   ├── tutor/            # Giao diện gia sư
│   │   ├── admin/            # Giao diện quản trị viên
│   │   ├── courses/          # Danh sách & chi tiết khóa học
│   │   ├── booking/          # Đặt lịch & thanh toán
│   │   ├── notifications/    # Thông báo hệ thống
│   │   ├── ai/               # AI Chat / AI Exercises
│   │   └── blogs/            # Bài viết & kiến thức
│   ├── layouts/              # Layout tổng thể (Public, Dashboard, Admin)
│   ├── routes/               # Cấu hình router
│   ├── store/                # Redux store
│   ├── utils/                # Helpers, constants
│   ├── App.jsx
│   └── main.jsx
│
├── public/
│   └── index.html
│
├── package.json
└── vite.config.js
```

---

## 🌐 Pages & Routes

| Page / Module | Route | Description |
|----------------|--------|-------------|
| **Home Page** | `/` | Trang chủ: banner, tìm kiếm, top gia sư, khóa học nổi bật |
| **Login Page** | `/login` | Form đăng nhập, nút Google, validate lỗi |
| **Register Page** | `/register` | Form đăng ký tài khoản (student/tutor) |
| **Forgot Password** | `/forgot-password` | Gửi email reset mật khẩu |
| **Tutor List** | `/tutors` | Danh sách gia sư, lọc theo môn, trình độ, giá |
| **Tutor Detail** | `/tutors/:id` | Trang chi tiết gia sư: thông tin, reviews, slot trống |
| **Course List** | `/courses` | Danh sách khóa học, lọc theo môn, cấp độ |
| **Course Detail** | `/courses/:id` | Chi tiết khóa học, lessons, nút mua/học |
| **Course Viewer** | `/dashboard/courses/:id` | Xem video bài học, progress bar |
| **Schedule Booking** | `/booking` | Đặt lịch học, xác nhận, thanh toán |
| **Payment Result** | `/checkout/result` | Hiển thị kết quả thanh toán thành công/thất bại |
| **Student Dashboard** | `/dashboard` | Giao diện chính của học viên |
| **My Courses** | `/dashboard/courses` | Danh sách khóa học đã mua |
| **My Bookings** | `/dashboard/bookings` | Lịch học đã đặt, trạng thái buổi học |
| **My Certificates** | `/dashboard/certificates` | Hiển thị chứng chỉ PDF sau khi hoàn thành khóa |
| **AI Assistant** | `/dashboard/ai` | Chat AI, upload ảnh bài tập, sinh kết quả |
| **Notifications** | `/dashboard/notifications` | Thông báo hệ thống |
| **Tutor Dashboard** | `/tutor` | Trang tổng quan của gia sư |
| **Tutor Profile** | `/tutor/profile` | Chỉnh sửa hồ sơ, upload video, cập nhật thông tin |
| **Tutor Schedule** | `/tutor/schedule` | Tạo/xóa slot dạy, bật/tắt lịch trống |
| **Tutor Courses** | `/tutor/courses` | Quản lý khóa học & bài học do gia sư tạo |
| **Tutor Bookings** | `/tutor/bookings` | Danh sách buổi học, confirm/complete/cancel |
| **Tutor Reviews** | `/tutor/reviews` | Xem review học viên |
| **Admin Overview** | `/admin` | Dashboard tổng quan admin |
| **Tutor Approval** | `/admin/tutors-approval` | Duyệt hồ sơ gia sư |
| **Manage Users** | `/admin/users` | Quản lý user (student/tutor/admin) |
| **Manage Courses** | `/admin/courses` | Quản lý khóa học, ẩn/hiện |
| **Manage Transactions** | `/admin/transactions` | Lịch sử thanh toán, tìm kiếm theo mã |
| **Reports** | `/admin/reports` | Báo cáo, khiếu nại, trạng thái |
| **Blogs** | `/blogs` | Tin tức, bài viết kiến thức học tập |
| **FAQs** | `/faqs` | Câu hỏi thường gặp |
| **Responsive** | `Mobile/Tablet` | Responsive UI theo Bootstrap Grid & Tailwind |

---

## ⚙️ Installation & Setup

### 1. Clone Project
```bash
git clone https://github.com/<your-username>/edutech-fe.git
cd edutech-fe
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Project
```bash
npm run dev
```
Frontend chạy tại: [http://localhost:5173](http://localhost:5173)

---

## 🔗 Integration with Backend
- Backend URL (Spring Boot): `http://localhost:9000/api`
- Cấu hình trong `.env`:
```env
VITE_API_BASE_URL=http://localhost:9000/api
```

---

## 💡 Features Summary

### 👩‍🎓 Student
- Đăng ký, đăng nhập, reset password  
- Đặt lịch học, thanh toán, học online  
- Nhận chứng chỉ và đánh giá gia sư  

### 👨‍🏫 Tutor
- Quản lý hồ sơ và khóa học  
- Thiết lập lịch dạy, quản lý học viên  
- Theo dõi đánh giá và thu nhập  

### 🧑‍💼 Admin
- Quản lý toàn bộ người dùng, khóa học, giao dịch  
- Duyệt hồ sơ gia sư  
- Thống kê, báo cáo, phản hồi  

---

## 📱 Responsive
Giao diện được tối ưu cho:  
✅ Desktop (≥1024px)  
✅ Tablet (768–1023px)  
✅ Mobile (≤767px)

Sử dụng **TailwindCSS Grid + Bootstrap responsive classes** để đảm bảo hiển thị đồng nhất.

---

## 👨‍💻 Contributors
- **Rem** – Frontend Developer  
- (Thêm các thành viên khác nếu có)

---

## 📄 License
This project is licensed under the MIT License.
