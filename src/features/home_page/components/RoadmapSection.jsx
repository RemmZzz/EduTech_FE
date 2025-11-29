import React from "react";

const steps = [
  {
    label: "01",
    title: "XÂY DỰNG KIẾN THỨC NỀN TẢNG",
    points: [
      "Củng cố lại kiến thức cơ bản theo chương trình.",
      "Ghi nhớ các khái niệm trọng tâm, tránh hổng kiến thức.",
      "Hệ thống bằng sơ đồ, mindmap dễ hiểu.",
    ],
    color: "bg-[#00b8d4]",
  },
  {
    label: "02",
    title: "BỔ SUNG KIẾN THỨC NÂNG CAO",
    points: [
      "Làm quen dạng bài nâng cao, đề thi chọn lọc.",
      "Áp dụng nhiều phương pháp giải nhanh.",
      "Phù hợp học sinh mục tiêu điểm 8+.",
    ],
    color: "bg-[#00b8d4]",
  },
  {
    label: "03",
    title: "LUYỆN ĐỀ THỰC CHIẾN",
    points: [
      "Giải đề bám sát cấu trúc đề thi thật.",
      "Rèn kỹ năng phân bổ thời gian.",
      "Ôn lỗi sai, tối ưu chiến lược làm bài.",
    ],
    color: "bg-[#00b8d4]",
  },
  {
    label: "04",
    title: "THI THỬ & RÚT KINH NGHIỆM",
    points: [
      "Thi thử định kỳ như thi thật.",
      "Phân tích kết quả cùng giáo viên.",
      "Chốt chiến lược cho kỳ thi chính thức.",
    ],
    color: "bg-[#00b8d4]",
  },
];

export default function RoadmapSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-extrabold uppercase text-[#00b8d4]">
          
          LỘ TRÌNH ĐỂ CON ĐẠT ĐIỂM CAO
        </h2>
        <div className="mt-2 mb-8 flex items-center justify-center">
           <span className="h-[2px] w-[190px] bg-[#00b8d4]" />
           <span className="mx-2 h-2 w-2 rounded-sm bg-[#008fa1]" />
           <span className="h-[2px] w-[190px] bg-[#00b8d4]" />
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.label}
              className="flex flex-col rounded-2xl border border-[#00b8d4] bg-white shadow-sm"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`-mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-md ${step.color}`}
                >
                  {step.label}
                </div>
                <h3 className="mt-3 px-3 py-2 text-center text-xs font-bold uppercase text-white bg-[#00b8d4] rounded-full">
                  {step.title}
                </h3>
              </div>
              <ul className="mt-3 space-y-2 px-4 pb-4 pt-1 text-xs text-gray-700">
  {step.points.map((p, idx) => (
    <li key={idx} className="flex gap-2">
      <span className="text-[#00b8d4] leading-[18px] flex-none">
        ✔
      </span>
      <span className="leading-[18px]">{p}</span>
    </li>
  ))}
</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
