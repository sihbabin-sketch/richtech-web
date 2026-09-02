import { Link } from "react-router-dom";
import newsData from "./data/newsData";
import { motion } from "framer-motion";
import fbIcon from "./assets/fb.png";
import phoneIcon from "./assets/2.png";
import lineIcon from "./assets/LINE.png";
export default function News() {
  return (
    <div className="bg-black min-h-screen text-white px-10 py-16 relative overflow-hidden">

  {/* ORANGE GLOW */}
  <motion.div
    className="
      absolute
      top-0
      right-0
      w-[800px]
      h-[800px]
      bg-orange-500/40
      blur-[180px]
      rounded-full
      pointer-events-none
      z-0
    "
    animate={{
      x: [0, 40, 0],
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <motion.div
    className="
      absolute
      bottom-0
      left-0
      w-[600px]
      h-[600px]
      bg-orange-600/20
      blur-[180px]
      rounded-full
      pointer-events-none
      z-0
    "
    animate={{
      x: [0, -30, 0],
      y: [0, 20, 0],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
  <div className="relative z-10">
  <h1 className="text-5xl font-black text-orange-500 mb-16">
    ข่าวสาร
  </h1>

  <div className="grid md:grid-cols-3 gap-8">
    {newsData.map((item) => (
      <div
        key={item.id}
        className="bg-[#111] rounded-3xl overflow-hidden border border-orange-500/10"
      >
        <img
          src={item.cover}
          alt=""
          className="w-full h-60 object-cover"
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-3">
            {item.title}
          </h2>

          <p className="text-neutral-400 mb-6">
            {item.shortDesc}
          </p>

          <Link
            to={`/news/${item.id}`}
            className="
              bg-orange-500
              hover:bg-orange-600
              px-5 py-3
              rounded-xl
              inline-block
              transition
            "
          >
            อ่านเพิ่มเติม
          </Link>
        </div>
      </div>
    ))}
    
    </div>

{/* ช่องทางติดต่อ */}
<section className="mt-20 pt-16 border-t border-orange-500/10">

  <h2 className="text-4xl font-black text-center mb-10">
    ติดต่อเรา
  </h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

    {/* Facebook */}
    <a
      href="https://www.facebook.com/Richtechpaint"
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        bg-black/40
        border border-orange-500/80
        rounded-3xl
        p-10
        text-center
        hover:border-orange-500
        hover:shadow-[0_0_35px_rgba(255,115,0,.25)]
        hover:scale-105
        transition-all duration-300
      "
    >
      <div className="mb-5 flex justify-center">
        <img
          src={fbIcon}
          alt="Facebook"
          className="w-14 h-14 object-contain"
        />
      </div>

      <h3 className="text-2xl font-bold">
        Facebook  
      </h3>
    </a>

    {/* Phone */}
    <a
      href="tel:0242052146"
      className="
        block
        bg-black/40
        border border-orange-500/80
        rounded-3xl
        p-10
        text-center
        hover:border-orange-500
        hover:shadow-[0_0_35px_rgba(255,115,0,.25)]
        hover:scale-105
        transition-all duration-300
      "
    >
      <div className="mb-5 flex justify-center">
        <img
          src={phoneIcon}
          alt="Phone"
          className="w-14 h-14 object-contain"
        />
      </div>

      <h3 className="text-2xl font-bold">
        Phone
      </h3>
    </a>

    {/* LINE */}
    <a
      href="https://line.me/ti/p/@321yqlrg"
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        bg-black/40
        border border-orange-500/80
        rounded-3xl
        p-10
        text-center
        hover:border-orange-500
        hover:shadow-[0_0_35px_rgba(255,115,0,.25)]
        hover:scale-105
        transition-all duration-300
      "
    >
      <div className="mb-5 flex justify-center">
        <img
          src={lineIcon}
          alt="LINE"
          className="w-14 h-14 object-contain"
        />
      </div>

      <h3 className="text-2xl font-bold">
        Line
      </h3>
    </a>

  </div>
</section>
  </div>

</div>

  );
}