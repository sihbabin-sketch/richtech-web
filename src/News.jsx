import { Link } from "react-router-dom";
import newsData from "./data/newsData";
import { motion } from "framer-motion";
export default function News() {
  return (
    <div className="
  bg-black
  min-h-screen
  text-white
  px-10
  py-16
  relative
  overflow-hidden
">

      <h1 className="text-5xl font-black text-orange-500 mb-16">
        ข่าวสาร
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
{/* ORANGE GLOW */}
<motion.div
  className="  
    absolute
    top-0
    right-0
    w-[500px]
    h-[500px]
    bg-orange-500/20
    blur-[90px] 
    rounded-full
    pointer-events-none
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
    w-[400px]
    h-[400px]
    bg-orange-600/10
    blur-[140px]
    rounded-full
    pointer-events-none
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

    </div>
  );
}