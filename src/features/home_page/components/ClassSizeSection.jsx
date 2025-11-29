import React from "react";

export default function ClassSizeSection() {
  return (
    <section className="bg-orange-50 py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center text-2xl font-extrabold uppercase text-[#00b8d4]">
          SĨ SỐ LỚP HỌC TỐI ƯU NHẤT
        </h2>
        <div className="mt-2 mb-8 flex items-center justify-center">
          <span className="h-[2px] w-[160px] bg-[#00b8d4]" />
          <span className="mx-2 h-2 w-2 rounded-sm bg-[#008fa1]" />
          <span className="h-[2px] w-[160px] bg-[#00b8d4]" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-[#00b8d4] p-6 text-white shadow-lg">
            <h3 className="text-center text-3xl font-extrabold">1 : 1</h3>
            <ul className="mt-4 space-y-1 text-sm">
              <li>✔ Lộ trình riêng cho từng học sinh.</li>
              <li>✔ Giáo viên kèm sát, theo dõi tiến bộ từng buổi.</li>
              <li>✔ Lịch học linh hoạt, dễ sắp xếp.</li>
              <li>✔ Phù hợp học sinh cần cải thiện nhanh.</li>
            </ul>
            <button className="mt-5 w-full rounded-full bg-white py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-50">
              ĐĂNG KÝ NGAY
            </button>
          </div>

          <div className="rounded-3xl border border-[#00b8d4] bg-white p-6 shadow-lg">
            <h3 className="text-center text-3xl font-extrabold text-[#00b8d4]">
              1 : N
            </h3>
            <ul className="mt-4 space-y-1 text-sm text-gray-800">
              <li>✔ Lớp nhỏ, tối đa 4 học sinh.</li>
              <li>✔ Học phí tối ưu hơn nhưng vẫn được tương tác nhiều.</li>
              <li>✔ Học theo cùng lộ trình, dễ tạo động lực nhóm.</li>
              <li>✔ Phù hợp nhóm bạn học cùng lớp / cùng mục tiêu.</li>
            </ul>
            <button className="mt-5 w-full rounded-full bg-[#00b8d4] py-2 text-sm font-semibold text-white hover:bg-[#00a3bd]">
              ĐĂNG KÝ NGAY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
