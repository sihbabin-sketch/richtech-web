import { useNavigate } from "react-router-dom";

import companyImage from "./assets/company-floor.png";
import factoryImage from "./assets/product-design/original.png";
import parkingImage from "./assets/product-design/parking.jpg";
import sportsImage from "./assets/product-design/sports.jpg";
import outdoorImage from "./assets/product-design/outdoor.jpg";

const projects = [
  {
    id: "factory",
    title: "พื้นโรงงานอุตสาหกรรม",
    subtitle: "INDUSTRIAL FLOOR",
    image: factoryImage,
  },
  {
    id: "parking",
    title: "สนามกีฬา",
    subtitle: "SPORTS FLOOR",
    image: parkingImage,
  },
  {
    id: "sports",
    title: "พื้นลู่วิ่ง",
    subtitle: "RUNNING TRACK",
    image: sportsImage,
  },
  {
    id: "coldroom",
    title: "พื้นห้องเย็น",
    subtitle: "COLD ROOM FLOOR",
    // ใช้ภาพตัวอย่างจริงจาก public/masks/COLD ROOM/1001.png
    image: "/masks/COLD%20ROOM/1001.png",
  },
  {
    id: "outdoor",
    title: "พื้นดาดฟ้า",
    subtitle: "Rooftop deck",
    image: outdoorImage,
  },
];

export default function ProductDesignHome() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-10 md:px-10 md:pt-14">
        <div className="mb-8 flex flex-col justify-between gap-5 border-b border-white/15 pb-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold tracking-[0.45em] text-orange-500">
              RICHTECH PAINT
            </p>
            <h1 className="text-3xl font-black tracking-wide md:text-4xl">
              PROJECTS
            </h1>
            <p className="mt-3 text-sm text-neutral-400">
              เลือกพื้นที่ที่คุณต้องการทดลองออกแบบสีพื้น
            </p>
          </div>
          <div className="text-xs tracking-widest text-neutral-500">
            <span className="text-orange-500">{String(projects.length).padStart(2, "0")}</span>
            {" "}PROJECTS
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => navigate(`/product-design/${project.id}`)}
              className="group relative overflow-hidden border border-white/10 bg-[#101010] text-left transition duration-300 hover:-translate-y-1 hover:border-orange-500/80 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading={index > 3 ? "lazy" : "eager"}
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = companyImage;
                    }}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#282b30] via-[#14171d] to-[#080a0c] transition duration-700 group-hover:scale-105">
                    <span className="-translate-y-5 text-5xl text-sky-200/60" aria-hidden="true">❄</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <p className="mb-2 text-[9px] tracking-[0.25em] text-orange-400">
                    {project.subtitle}
                  </p>
                  <h2 className="text-base font-bold text-white md:text-lg">
                    {project.title}
                  </h2>
                  <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-3">
                    <span className="text-xs text-neutral-300">ออกแบบพื้นที่นี้</span>
                    <span className="flex h-8 w-8 items-center justify-center border border-orange-500 text-orange-400 transition group-hover:bg-orange-500 group-hover:text-black">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-white/10 pt-5 text-[10px] tracking-wider text-neutral-600 sm:flex-row">
          <span>© RICHTECH PAINT CO., LTD.</span>
          <span>PROFESSIONAL FLOOR COLOR DESIGN</span>
        </div>
      </section>
    </main>
  );
}
