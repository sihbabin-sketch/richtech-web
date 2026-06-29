import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import newsData from "./data/newsData";
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

  <motion.div
    className="
      absolute
      top-[10%]
      right-[-10%]
      w-[1000px]
      h-[1000px]
      rounded-full
      bg-orange-500/40
      blur-[220px]
      pointer-events-none
      z-0
    "
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
      z-0
    "
  />
     {/* เนื้อหาข่าว */}
  <div className="relative z-10">

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

{news.video && (
  <div className="flex justify-center mb-10">
    <div className="relative">

      <div
        className="
          absolute
          inset-0
          bg-orange-500/40
          blur-[100px]
          scale-125
          rounded-full
        "
      />

      <video
        controls
        playsInline
        className="
          relative
          z-10
          w-full
          max-w-[400px]
          rounded-3xl
        "
      >
        <source src={news.video} type="video/mp4" />
      </video>

    </div>
  </div>
)}
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
  </div>
  );
}