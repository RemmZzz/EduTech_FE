import React from "react";

const tutorCourses = [
  {
    title: "Gia sư kèm 1-1 môn Toán",
    desc: "Phù hợp học sinh cần củng cố kiến thức & luyện đề thi học kỳ, thi chuyển cấp.",
  },
  {
    title: "Gia sư kèm 1-1 môn Văn",
    desc: "Rèn kỹ năng đọc hiểu, phân tích & viết bài, phù hợp học sinh từ lớp 6-12.",
  },
  {
    title: "Gia sư kèm 1-1 Tiếng Anh",
    desc: "Tập trung phát âm, ngữ pháp & từ vựng trọng tâm, hướng tới điểm 8+.",
  },
];

export default function FeaturedTutorCourses() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-extrabold uppercase text-[#00b8d4]">
          CÁC KHÓA GIA SƯ NỔI BẬT
        </h2>
        <div className="mt-2 mb-8 flex items-center justify-center">
          <span className="h-[2px] w-[150px] bg-[#00b8d4]" />
          <span className="mx-2 h-2 w-2 rounded-sm bg-[#008fa1]" />
          <span className="h-[2px] w-[150px] bg-[#00b8d4]" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tutorCourses.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-2xl border border-emerald-700/60 bg-white p-5 shadow-sm"
            >
              <h3 className="mb-3 rounded-full bg-[#00b8d4] px-4 py-2 text-center text-sm font-bold uppercase text-white">
                {c.title}
              </h3>
              <ul className="flex-1 space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-orange-500">★</span>
                  <span>{c.desc}</span>
                </li>
              </ul>
              <button className="mt-4 w-full rounded-full bg-[#00b8d4] py-2 text-sm font-semibold text-white hover:bg-[#00a3bd]">
                ĐĂNG KÝ HỌC 
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
