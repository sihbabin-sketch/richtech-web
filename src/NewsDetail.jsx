import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import newsData from "./data/newsData";

import newsVideo from "./assets/เวลสเวด2 PR.mp4";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function NewsDetail() {

  const { id } = useParams();

  const news = newsData.find(
    (item) => item.id === Number(id)
  );

  if (!news) {
    return <div>ไม่พบข่าว</div>;
  }

  return (
  <div className="bg-black min-h-screen text-white px-6 py-20 relative overflow-hidden">
{/* FLOATING ORANGE GLOW */}
    <motion.div
      className="
        absolute
        top-[20%]
        right-[10%]
        w-[500px]
        h-[500px]
        rounded-full
        bg-orange-500/20
        blur-[140px]
        pointer-events-none
      "

      animate={{
        x: [0, 40, 0],
        y: [0, -30, 0],
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
        bottom-[10%]
        left-[5%]
        w-[350px]
        h-[350px]
        rounded-full
        bg-orange-600/10
        blur-[120px]
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
      <h1 className="text-5xl font-black mb-10">
        {news.title}
      </h1>

      {/* SLIDER */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="rounded-3xl overflow-hidden mb-10"
      >

       {news.images?.map((img, index) => (
  <SwiperSlide key={index}>
    <img
      src={img}
      alt=""
      className="
        w-full
        h-[300px]
        md:h-[500px]
        object-contain
      "
    />
  </SwiperSlide>
))}

        </Swiper>

<div className="flex justify-center mb-10">
  <video
    controls
    playsInline
    className="w-full max-w-[400px] rounded-3xl"
  >
    <source src={newsVideo} type="video/mp4" />
  </video>
</div>
<p
  className="    max-w-2xl
    text-left
    text-neutral-400
    mt-4
    leading-relaxed
  "
>
  {news.content}
</p>

{news.driveLink && (
  <a
    href={news.driveLink}
    target="_blank"
    rel="noopener noreferrer"
    className="
      ml-auto
      mt-10
      bg-orange-500
      hover:bg-orange-600
      transition
      px-6 py-3
      rounded-2xl
      font-bold
      w-fit
      block
    "
  >
    ดูรูปเพิ่มเติม
  </a>
)}
    </div>
    
  );
}