import React from "react";

const features = [
  {
    title: "Cam kết điểm thi đầu ra",
    desc: "Cam kết cải thiện rõ rệt kết quả học tập với lộ trình rõ ràng, minh bạch.",
  },
  {
    title: "Giáo viên trường chuyên",
    desc: "Đội ngũ giáo viên nhiều kinh nghiệm, đến từ các trường chuyên uy tín.",
  },
  {
    title: "Hỗ trợ ngoài giờ 24/7",
    desc: "Giải đáp thắc mắc của học sinh ngoài giờ học, nhắc nhở & đồng hành.",
  },
  {
    title: "Học tương tác trực tiếp",
    desc: "Tương tác 2 chiều, đặt câu hỏi & được giải đáp ngay trong buổi học.",
  },
];

export default function CourseFeaturesSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center">
        <div className="md:w-2/5">
          <div className="relative mx-auto max-w-xs">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=900&q=80"
              alt="Học sinh năng động"
              className="w-full rounded-[40px] object-cover shadow-2xl"
            />
          </div>
        </div>

        <div className="md:w-3/5">
          <h2 className="text-center text-2xl font-extrabold uppercase text-[#00b8d4] md:text-left">
            ĐIỂM ĐẶC BIỆT CỦA KHÓA HỌC
          </h2>
          <div className="mt-2 mb-6 flex items-center justify-center md:justify-start">
             <span className="h-[2px] w-[175px] bg-[#00b8d4]" />
             <span className="mx-2 h-2 w-2 rounded-sm bg-[#008fa1]" />
             <span className="h-[2px] w-[175px] bg-[#00b8d4]" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-emerald-700/60 bg-white p-4 shadow-sm"
              >
                <h3 className="text-sm font-bold uppercase text-[#00b8d4]">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700">{f.desc}</p>
              </div>
            ))}
          </div>

          <button className="mt-6 rounded-full bg-[#00b8d4] px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#00a3bd] transition">
            HỌC NGAY
          </button>
        </div>
      </div>
    </section>
  );
}
