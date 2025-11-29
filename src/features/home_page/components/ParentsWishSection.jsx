import React from "react";

const wishes = [
  "Con có điểm số vượt trội so với năm trước.",
  "Tìm được giáo viên giỏi kèm cặp và đồng hành lâu dài.",
  "Có lộ trình học rõ ràng, không phải học quá tải mà vẫn hiệu quả.",
  "Thường xuyên được báo cáo tình hình học tập của con.",
  "Con tìm được phương pháp học chủ động, bớt áp lực hơn.",
  "Tích hợp cộng cụ AI hỗ trợ học tập hiện đại.",
];

export default function ParentsWishSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center">
        <div className="md:w-3/5">
          <h2 className="text-center text-2xl font-extrabold uppercase text-[#00b8d4] md:text-left">
  PHỤ HUYNH MONG MUỐN
</h2>
          <div className="mt-2 mb-4 flex items-center justify-center md:justify-start">
  <span className="h-[2px] w-[150px] bg-[#00b8d4]" />
  <span className="mx-2 h-2 w-2 rounded-sm bg-[#008fa1]" />
  <span className="h-[2px] w-[150px] bg-[#00b8d4]" />
</div>


          <ul className="space-y-2 text-sm md:text-base text-gray-700">
            {wishes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1 text-red-500">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm italic text-gray-600">
            EduTech hiểu những mong muốn đó và xây dựng chương trình học cá
            nhân hoá, giúp con tiến bộ từng ngày.
          </p>

          <button className= "mt-6 rounded-full bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-md  border-2 border-[#008fa1] hover:bg-[#00a3bd] transition">
            ĐĂNG KÝ NGAY
          </button>
        </div>

        <div className="md:w-2/5">
          <div className="relative mx-auto max-w-md">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=900&q=80"
              alt="Phụ huynh & học sinh"
              className="w-full rounded-[40px] border border-gray-200 object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
