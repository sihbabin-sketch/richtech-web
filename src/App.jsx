import News from "./News";
import CourtDesigner from "./CourtDesigner";
import NewsDetail from "./NewsDetail";
import React, { useState } from "react";
import fbIcon from "./assets/fb.png";
import phoneIcon from "./assets/2.png";
import lineIcon from "./assets/LINE.png";
import { motion, AnimatePresence } from "framer-motion";  
import Products from "./Products.jsx";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import paintImage from "./assets/paint.png";  
import countImg from "./assets/Q-PQAL UKAS.jpg";
import countImg2 from "./assets/มอก.png"; 
import interiorImage from "./assets/color-tank-open2.png";  
import interiorImage2 from "./assets/RTP-Logo-01.png";
import countImg3 from "./assets/GHPs_0.png";
import countImg4 from "./assets/HACCP_0.png";
import productR300 from "./assets/R300.png";
import productR400 from "./assets/R400 BU.png";
import productS201 from "./assets/W100.png";
import productS300 from "./assets/PUMF35(G).png";
import productS302 from "./assets/PULF12 (G).png";
import productS303 from "./assets/s341.png";
import productS304 from "./assets/R500.png";
import productS305 from "./assets/W600.png";

import "swiper/css";
import "swiper/css/navigation"; 
import { Swiper, SwiperSlide } from "swiper/react";     
import { Autoplay,Navigation } from "swiper/modules";
const recommendedProducts = [
  {
    code: "RTP-R300",
    name: "สีอีพ็อกซี่ชนิดฟิล์มบาง",
    description:  
      "สีอีพ็อกซี่สำหรับเคลือบพื้นผิว ให้ความแข็งแรง ทนทานต่อการใช้งาน",
    image: productR300,
  },

  {
    code: "RTP-R400",
    name: "สีเคลือบผิวอีพ็อกซี่ อัตราส่วน 4 ต่อ 1",
    description:
      "สีอีพ็อกซี่คุณภาพสูง สำหรับงานพื้นอุตสาหกรรมและพื้นที่ใช้งานทั่วไป",
    image: productR400,
  },

  {
    code: "RTP-S201",
    name: "สีอีพ็อกซี่ปรับระดับด้วยตัวเอง",
    description:
      "อีพ็อกซี่ปรับระดับด้วยตัวเอง ชนิดใส เหมาะสำหรับงานพื้นอุตสาหกรรม",
    image: productS201,
  },

  { 
    code: "RTP-PUMF35(G)",
    name: "โพลียูรีเทนคอนกรีต 3-5 มม. ชนิดเงา",
    description:  
      "เหมาะสําหรับพื้นคอนกรีตในโรงงานอุตสาหกรรม เพื่อรองรับ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             การใช้งานที่หนักและทนทานต่อการเปลี่ยนแปลงของอุณหภูมิ",
    image: productS300,
  },

  {
    code: "RTP-PULF12(G)",
    name: "โพลียูรีเทนคอนกรีต 1-2 มม. ชนิดเงา",
    description: "เป็นระบบโพลียูรีเทนคอนกรีต เหมาะสําหรับงานพื้นคอนกรีตทั่วไป เพื่อเพิ่มความทนทานและสวยงาม",
    image: productS302,
  },

  {
    code: "RTP-S341",
    name: "สีทับหน้าอีพ็อกซี่ปรับระดับ 2 ส่วน",
    description: "เป็นสีทับหน้าอีพ็อกซี่ปรับระดับ 2 ส่วน ชนิดนำไฟฟ้าได้ มีสมบัติการถ่ายเทประจุไฟฟ้าได้ดี ",
    image: productS303,
  },  

  {
    code: "RTP-R500",
    name: "สีโพลียูรีเทน ชนิดความเงาสูง สำหรับงานภายนอก",
    description: "เป็นสีทับหน้าโพลียูรีเทน 2 ส่วน มีตัวทำละลาย ชนิดความเงาสูง ใช้สำหรับงานพื้นคอนกรีตที่ต้องการพื้นที่เงา สามารถใช้งานภายนอกได้",
    image: productS304,
  },

  {
    code: "RTP-W600",
    name: "สีกันรั่วซึมโพลียูรีเทนความยืดหยุ่นสูง",
    description: "เป็นสีกันรั่วซึมโพลียูรีเทน 2 ส่วน สูตรน้ำ เป็นมิตรต่อสิ่งแวดล้อม เหมาะสำหรับระบบกันซึมที่ต้องการฟิล์มบาง",
    image: productS305,
  },
];
const palettes = [
  { name: "Pure Green", hex: "#057e0b" },
  { name: "Yello Orange", hex: "#e89607" }, 
  { name: "Sky Blue", hex: "#008fe1" },
  { name: "White", hex: "#ffffff" },                  
];      
/* ================= PAGE TRANSITION ================= */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
function PageTransition({ children }) {
  return (  
    <motion.div                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      initial={{ opacity: 0, y: 25 }}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{
        duration: 0.45,
        ease: "easeInOut",
      }}  
    >
      {children}    
    </motion.div>
  );
}
/* ================= NAVBAR ================= */
function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="border-b border-neutral-800 bg-black relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

      <Link to="/">
  <img
    src={interiorImage2}
    alt="logo"
    className="
      w-[180px]
      object-contain
      cursor-pointer
      hover:scale-105
      transition
    "
  />
</Link>
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-white">
          <Link to="/" className="hover:text-orange-500">หน้าหลัก</Link>
          <Link to="/products" className="hover:text-orange-500">ผลิตภัณฑ์</Link>
          <Link to="/news" className="hover:text-orange-500">ข่าวสาร</Link>
          <Link to="/about" className="hover:text-orange-500">เกี่ยวกับเรา</Link>
          <Link to="/contact" className="hover:text-orange-500">ติดต่อ</Link> 
          <Link to="/court" className="hover:text-orange-500">ออกแบบสนาม</Link>

        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-orange-500/20 px-6 py-4 flex flex-col gap-4 text-white">

          <Link to="/" onClick={() => setOpen(false)}>
            หน้าหลัก
          </Link>

          <Link to="/products" onClick={() => setOpen(false)}>
            ผลิตภัณฑ์
          </Link>

          <Link to="/news" onClick={() => setOpen(false)}>
            ข่าวสาร
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            เกี่ยวกับเรา
          </Link>

          <Link to="/contact" onClick={() => setOpen(false)}>
            ติดต่อ
          </Link>
          <Link to="/court" onClick={() => setOpen(false)}>
            ออกแบบสนาม
          </Link>

        </div>
      )}
    </header>
  );
}

/* ================= HOME ================= */
function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">  

      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* Glow Background */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full" />

        {/* LEFT */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            สีคุณภาพสูง
            <span className="block text-orange-500">
              สำหรับทุกพื้นผิว
            </span>
          </h1>

          <p className="text-neutral-400 text-lg leading-relaxed mb-10 max-w-xl">
            ผู้เชี่ยวชาญด้านสีอุตสาหกรรม สีอีพ็อกซี่
            สีพียู สีสนามกีฬาและระบบกันซึม
              ตามมาตรฐานระดับมืออาชีพ
          </p>

          {/* BUTTONS */}
          <div className="flex gap-5">

            <Link to="/products">
              <button
                className="
                  bg-orange-500
                  hover:bg-orange-600
                  px-8 py-4
                  rounded-2xl
                  font-bold
                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(255,115,0,0.5)]
                "
              >
                ดูสินค้า
              </button>
            </Link>

            <Link to="/contact">
  <button
    className="
      border border-orange-500/40
      hover:border-orange-500
      px-8 py-4
      rounded-2xl
      font-bold
      transition-all duration-300
      hover:bg-orange-500/10
    "
  >
    ติดต่อเรา
  </button>
</Link>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative z-10 flex justify-center">

          <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[100px] rounded-full" />

          <img
            src={paintImage}
            alt="paint"
            className="
              relative
             w-full max-w-[850px] object-contain
              object-contain
              drop-shadow-[0_0_80px_rgba(255,115,0,.45)]
              hover:scale-105
              transition-all duration-500
            "
          />

        </div>

      </section>

      {/* ================= ABOUT SECTION ================= */}
    <section className="py-12 px-6">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT: IMAGE */}
    <div className="relative w-full flex justify-center lg:justify-start">
      <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full" />

      <img
        src={interiorImage}
        alt="about"
        className="
          w-[320px] md:w-[220px] lg:w-[500px]
          object-contain
          rounded-3xl
          border border-orange-500/20
          shadow-[0_0_50px_rgba(255,115,0,0.15)]
          relative
        "
      />
    </div>

    {/* RIGHT: CONTENT */}
    <div>
      <p className="text-orange-500 uppercase text-3xl tracking-[5px] mb-4">
        COMPANY HISTORY
      </p>

      <h2 className="text-3xl font-black mb-8 leading-tight">
        ความเป็นมา
      </h2>

      <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
        <p>บริษัท ริชเทค เพ้นท์ จำกัด ก่อตั้งขึ้นในปี พ.ศ. 2552
                  และมีประสบการณ์ด้านสีอุตสาหกรรมมากกว่า 20 ปี
                  โดยดำเนินธุรกิจด้านการผลิตสีอุตสาหกรรมคุณภาพสูง
                  อาทิเช่น สีอีพ็อกซี่ สีโพลียูรีเทน สีอะคริลิก
                  สีอัลคิด สีไวนิล และสีงานเฉพาะทางต่างๆ</p>
        <p>ผลิตภัณฑ์ของบริษัทได้รับการยอมรับด้านคุณภาพ
                  และการบริการภายใต้มาตรฐานอุตสาหกรรม (มอก.)
                  จากสำนักงานมาตรฐานผลิตภัณฑ์อุตสาหกรรม (สมอ.)
                  ด้วยความเชี่ยวชาญในการผลิตและพัฒนาผลิตภัณฑ์
                  โดยใช้อุปกรณ์และเทคโนโลยีที่ทันสมัย</p>
        <p> บริษัทได้รับความไว้วางใจจากผู้รับเหมาก่อสร้าง
                  เจ้าของโครงการ ที่ปรึกษาโครงการ
                  รวมถึงผู้ใช้งานทั่วไปทั่วประเทศ
                  พร้อมทั้งมุ่งเน้นการพัฒนาองค์กรและผลิตภัณฑ์
                  ให้เป็นมิตรต่อธรรมชาติและสิ่งแวดล้อมอย่างยั่งยืน</p>
      </div>

{/* STATS */}
<div className="grid gap-2 mt-2">
  <div className="flex flex-col items-start mt-6">

    {/* CERTIFICATE */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* รูปที่ 1 */}
      <div className="w-[260px] h-[180px] rounded-3xl border border-orange-500 overflow-hidden flex items-center justify-center bg-white">
        <img
          src={countImg}
          alt="ISO"
          className="w-[240px] h-[160px] object-contain"
        />
      </div>

      {/* รูปที่ 2 */}
      <div className="w-[260px] h-[180px] rounded-3xl border border-orange-500 overflow-hidden flex items-center justify-center bg-white">
        <img
          src={countImg2}
          alt="มอก."
          className="w-[240px] h-[160px] object-contain"
        />
      </div>

      {/* รูปที่ 3 */}
      <div className="w-[260px] h-[180px] rounded-3xl border border-orange-500 overflow-hidden flex items-center justify-center bg-white">
        <img
          src={countImg3}
          alt="GHPs."
          className="w-[240px] h-[160px] object-contain"
        />
      </div>

      {/* รูปที่ 4 */}
      <div className="w-[260px] h-[180px] rounded-3xl border border-orange-500 overflow-hidden flex items-center justify-center bg-white">
        <img
          src={countImg4}
          alt="HACCP."
          className="w-[240px] h-[160px] object-contain"
        />
      </div>

    </div>

    <Link
      to="/about"
      className="mt-4 text-orange-500 hover:underline"
    >
      อ่านเพิ่มเติม →
    </Link>

  </div>
</div>
    </div>

  </div>
</section>

<section className="py-15 px-6 bg-black text-white">

  <div className="max-w-7xl mx-auto">

    {/* TITLE */}
    <div className="text-center mb-12">

      <p className="text-orange-500 uppercase tracking-[5px] text-4xl mb-3">
        Recommended Products
      </p>

      <h2 className="text-4xl md:text-3xl font-black">
        สินค้าแนะนำ
      </h2>

    </div>

    {/* SLIDER */}
    <div className="relative px-4 md:px-10">

    <Swiper
  modules={[Autoplay, Navigation]}
  
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}

  loop={true}
  speed={1000}

  spaceBetween={30}

  slidesPerView={1}
  slidesPerGroup={1}

  breakpoints={{
    640: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },

    1280: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
  }}

  navigation={{
    nextEl: ".product-next",
    prevEl: ".product-prev",
  }}

  className="recommendedSwiper"
>

        {recommendedProducts.map((product) => (

          <SwiperSlide key={product.code}>

          <div
  className="
    h-[470px]
    bg-[#111111]
    border-2
    border-orange-500
    rounded-[22px]
    shadow-[0_0_20px_rgba(249,115,22,0.15)]
    overflow-hidden
    flex
    flex-col
    p-6
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-orange-400
    hover:shadow-[0_0_30px_rgba(249,115,22,0.35)]
  "
>

              {/* PRODUCT IMAGE */}
              <div className="h-[200px] flex items-center justify-center">

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    max-w-[220px]
                    max-h-[190px]
                    object-contain
                    transition-transform
                    duration-300
                    hover:scale-105
                  "
                />

              </div>

              {/* CODE */}
              <p className="text-sm text-gray-400 font-semibold mt-3">
                {product.code}
              </p>

              {/* NAME */}
              <h3
                className="
                  text-xl
                  font-bold
                  text-orange-500
                  leading-7
                  mt-1
                  min-h-[56px]
                "
              >
                {product.name}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  text-gray-500
                  text-[15px]
                  leading-6
                  mt-2
                  line-clamp-3
                  flex-1
                "
              >
                {product.description}
              </p>

              {/* BUTTON */}
              <div className="flex justify-center mt-4">

                <Link
                  to={`/products`}
                  className="
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    font-bold
                    px-8
                    py-3
                    rounded-full
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  ดูผลิตภัณฑ์
                </Link>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

      {/* LEFT */}
      <button
        className="
          product-prev
          absolute
          left-[-10px]
          top-1/2
          -translate-y-1/2
          z-20
          text-gray-600
          hover:text-orange-500
          text-6xl
          font-light
          transition
        "
      >
        ‹
      </button>

      {/* RIGHT */}
      <button
        className="
          product-next
          absolute
          right-[-10px]
          top-1/2
          -translate-y-1/2
          z-20
          text-gray-600
          hover:text-orange-500
          text-6xl
          font-light
          transition
        "
      >
        ›
      </button>

    </div>

  </div>

</section>

      {/* ================= PRODUCT CATEGORY ================= */}
      <section className="py-8 px-6">

        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <div className="text-center mb-20">

            <p className="text-orange-500 uppercase text-3xl tracking-[5px] mb-4">
              Products
            </p>

            <h2 className="text-3xl font-black">
              หมวดหมู่สินค้า
            </h2>

          </div>

          {/* GRID */}
      
{/* GRID */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{[
  {
    name: "สีพื้นอุตสาหกรรม EPOXY",
  },
  {
    name: "สีโครงสร้างเหล็ก",
  },
  {
    name: "สีน้ำทาอาคาร",
  },
  {
    name: "สีกันรั่วซึม",
  },
  { 
    name: "สีสำหรับงานสนามกีฬา",
  },
].map((item, i) => (
  <Link
    to="/products"
    key={i}
    className="
      group
      block
      bg-[#111]
      border border-orange-500/20
      rounded-3xl
      p-8
    "
  >

   <h3 className="text-2xl font-bold mb-4 text-orange-500">
  {item.name}
</h3>

    <p className="text-neutral-1500 leading-relaxed">
      ผลิตภัณฑ์คุณภาพสูง
      สำหรับงานอุตสาหกรรมและงานมืออาชีพ
    </p>

  </Link>
))}

</div>
        </div>

      </section>

      {/* ================= FEATURE SECTION ================= */}
      <section className="py-28 bg-[#0d0d0d]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

          {[
  {
    title: "Facebook",
     icon: fbIcon,
    link: "https://www.facebook.com/Richtechpaint"
  },
  {
    title: "Phone",
     icon: phoneIcon,
    link: "tel:024205214"
  },
  {
    title: "Line",
     icon: lineIcon,
    link: "https://line.me/ti/p/@321yqlrg"
  },
].map((item, i) => (

           <a
  key={i}
  href={item.link}
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
  src={item.icon}
  alt={item.title}
  className="
    w-14
    h-14
    object-contain
    transition-all
    duration-300
    group-hover:scale-110
  "
/>
</div>

<h3 className="text-2xl font-bold mb-4">
  {item.title}
</h3>

                <p className="text-neutral-400">
                  {item.desc}
                </p>

              </a>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-orange-500/10 py-10">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

          <h2 className="text-2xl font-black text-orange-500">
            Richtech Paint
          </h2>

          <p className="text-neutral-500 mt-4 md:mt-0">
            © 2025 Richtech Paint. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

/* ================= OTHER PAGES ================= */


function About() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">


      {/* HERO */}
      <section className="relative py-20 px-6 border-b border-orange-500/10">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">

          <p className="text-orange-500 uppercase tracking-[6px] text-4xl lg:text-5xl font-black leading-tight mb-8">
            About Richtech Paint
          </p>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl mx-auto">
            ผู้นำด้านสีอุตสาหกรรม สีเคลือบพื้น และระบบป้องกันพื้นผิว
            ด้วยประสบการณ์มากกว่า 20 ปี
          </p>

        </div>

      </section>

    {/* COMPANY HISTORY */}
 <section className="py-8 px-6">

  <div className="max-w-5xl mx-auto">

    {/* COMPANY HISTORY */}
    <div className="max-w-4xl mx-auto text-center">

      <p className="text-orange-500 uppercase text-2xl tracking-[5px] mb-4">
        Company History
      </p>

      <h2 className="text-xl font-black leading-tight mb-4">
        ความเป็นมา
      </h2>

      <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">

        <p>
          บริษัท ริชเทค เพ้นท์ จำกัด ก่อตั้งขึ้นในปี พ.ศ. 2552
          และมีประสบการณ์ด้านสีอุตสาหกรรมมากกว่า 20 ปี
          โดยดำเนินธุรกิจด้านการผลิตสีอุตสาหกรรมคุณภาพสูง
          อาทิเช่น สีอีพ็อกซี่ สีโพลียูรีเทน สีอะคริลิก
          สีอัลคิด สีไวนิล และสีงานเฉพาะทางต่างๆ
        </p>

        <p>
          ผลิตภัณฑ์ของบริษัทได้รับการยอมรับด้านคุณภาพ
          และการบริการภายใต้มาตรฐานอุตสาหกรรม (มอก.)
          จากสำนักงานมาตรฐานผลิตภัณฑ์อุตสาหกรรม (สมอ.)
          ด้วยความเชี่ยวชาญในการผลิตและพัฒนาผลิตภัณฑ์
          โดยใช้อุปกรณ์และเทคโนโลยีที่ทันสมัย
        </p>

        <p>
          บริษัทได้รับความไว้วางใจจากผู้รับเหมาก่อสร้าง
          เจ้าของโครงการ ที่ปรึกษาโครงการ
          รวมถึงผู้ใช้งานทั่วไปทั่วประเทศ
          พร้อมทั้งมุ่งเน้นการพัฒนาองค์กรและผลิตภัณฑ์
          ให้เป็นมิตรต่อธรรมชาติและสิ่งแวดล้อมอย่างยั่งยืน
        </p>
            </div>
   {/* รูปภาพ */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">

    {/* รูป 1 */}
    <div className="bg-[#111] border border-orange-500/20 rounded-3xl p-5">
      <div className="h-64 rounded-3xl border border-orange-500/40 overflow-hidden">
        <img
  src={countImg}
  alt="มอก."
  onClick={() => setSelectedImage(countImg)}
  className="w-full h-full object-contain p-8 cursor-pointer hover:scale-105 transition-transform duration-300"
/>
      </div>
    </div>

    {/* รูป 2 */}
    <div className="bg-[#111] border border-orange-500/20 rounded-3xl p-5">
      <div className="h-64 rounded-3xl border border-orange-500/40 overflow-hidden">
        <img
          src={countImg2}
          alt="เพิ่มเติม"
          onClick={() => setSelectedImage(countImg2)}
  className="w-full h-full object-contain p-1 cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>

    {/* รูป 3 */}
    <div className="bg-[#111] border border-orange-500/20 rounded-3xl p-5">
      <div className="h-64 rounded-3xl border border-orange-500/40 overflow-hidden">
        <img
          src={countImg3}
          alt="เพิ่มเติม"
        onClick={() => setSelectedImage(countImg3)}
  className="w-full h-full object-contain p-8 cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>

    {/* รูป 4 */}
    <div className="bg-[#111] border border-orange-500/20 rounded-3xl p-5">
      <div className="h-64 rounded-3xl border border-orange-500/40 overflow-hidden">
        <img
          src={countImg4}
          alt="เพิ่มเติม"
        onClick={() => setSelectedImage(countImg4)}
  className="w-full h-full object-contain p-8 cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>

  </div>

</div> 
   </div>
            
            {/* POPUP ขยายรูป */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="ขยายรูป"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-orange-500 transition"
          >
            ✕
          </button>
        </div>
      )}

    </section>
      {/* VISION & MISSION */}
      <section className="py-14 px-6 bg-[#0a0a0a]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-orange-500 uppercase tracking-[5px] text-3xl mb-4">
              Vision & Mission
            </p>

            <h2 className="text-2xl font-black">
              วิสัยทัศน์ และพันธกิจ
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* VISION */}
            <div className="bg-[#111] border border-orange-500/20 rounded-3xl p-5">

              <h3 className="text-3xl font-black text-orange-500 mb-6">
               Vision
              </h3>

              <p className="text-neutral-400 text-lg leading-relaxed">
                พร้อมก้าวสู่การเป็นผู้นำในเรื่องเคลือบผิว
                ให้กับผู้รับเหมา บริษัท และผู้ใช้งานทั่วไป
                ทั้งภายในและต่างประเทศ
              </p>

            </div>

            {/* MISSION */}
            <div className="bg-[#111] border border-orange-500/20 rounded-3xl p-10">

              <h3 className="text-3xl font-black text-orange-500 mb-6">
               Mission
              </h3>

              <ul className="space-y-4 text-neutral-400 text-lg">

                <li>
                  1. มุ่งเน้นการทำธุรกิจที่ซื่อสัตย์ สุจริต และเที่ยงธรรม
                </li>

                <li>
                  2. มุ่งเน้นตอบสนองครบวงจรเรื่องของสีให้กับลูกค้า
                </li>

                <li>
                  3. มุ่งเน้นการเพิ่มประสิทธิภาพขององค์กรแบบยั่งยืน
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* POLICY */}
      <section className="py-14 px-6">

        <div className="max-w-5xl mx-auto text-center"> 

          <p className="text-orange-500 uppercase tracking-[5px] text-3xl mb-4">
            Policy
          </p>

          <h2 className="text-2xl font-black mb-10">
            นโยบายบริษัท
          </h2>

          <div
            className="
              bg-[#111]
              border border-orange-500/20
              rounded-3xl
              p-14
              shadow-[0_0_50px_rgba(255,115,0,0.08)]
            "
          >

            <p className="text-2xl leading-relaxed text-neutral-300">
              “เป็นหนึ่งเรื่องคุณภาพ และบริการ
              ด้วยการพัฒนาอย่างต่อเนื่อง
              เพื่อความไว้วางใจสูงสุดของลูกค้า”
            </p>

          </div>

        </div>

      </section>
{/* ================= SOCIAL CONTACT ================= */}  
<section className="py-2 px-6 bg-[#0a0a0a]">

  <div className="max-w-5xl mx-auto">

    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Facebook",
          icon: fbIcon,
          link: "https://www.facebook.com/Richtechpaint"
        },
        {
          title: "Phone",
          icon: phoneIcon,
          link: "tel:0242052146"
        },
        {
          title: "Line",
          icon: lineIcon,
          link: "https://line.me/ti/p/@321yqlrg"
        },
      ].map((item, i) => (

        <a
          key={i}
          href={item.link}
          target={item.title === "Phone" ? "_self" : "_blank"}
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
              src={item.icon}
              alt={item.title}
              className="
                w-14
                h-14
                object-contain
                transition-all
                duration-300
              "
            />
          </div>

          <h3 className="text-2xl font-bold">
            {item.title}
          </h3>

        </a>

      ))}

    </div>

  </div>

</section>
   </div>
  );
}


function Contact() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}
<section className="relative py-16 px-6 border-b border-orange-500/10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">

        <p className="text-orange-500 uppercase tracking-[8px] mb-5 font-semibold text-3xl lg:text-2xl">
  Contact Us
</p>

         
           <h1 className="text-7xl lg:text-5xl font-black leading-tight mb-8 ">
  <span className="text-orange-500">
    Richtech Paint
  </span>
</h1>

          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl mx-auto">
            พร้อมให้คำปรึกษาเรื่องสีอุตสาหกรรม สีเคลือบพื้น
            และงานเคลือบผิวครบวงจร
          </p>

        </div>
<div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-16 mt-8">

  {[
    {
      title: "Facebook",
      icon: fbIcon,
      link: "https://www.facebook.com/Richtechpaint"
    },
    {
      title: "Phone",
      icon: phoneIcon,
      link: "tel:024205214"
    },
    {
      title: "Line",
      icon: lineIcon,
      link: "https://line.me/ti/p/@321yqlrg"
    },
  ].map((item, i) => (

    <a
      key={i}
      href={item.link}
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
          src={item.icon}
          alt={item.title}
          className="
            w-14
            h-14
            object-contain
            transition-all
            duration-300
            group-hover:scale-110
          "
        />
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {item.title}
      </h3>

    </a>

  ))}

</div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-2 px-2">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">

          {/* LEFT INFO */}
          <div className="space-y-8">

            <div className="bg-[#111] border border-orange-500/20 rounded-3xl p-10">

              <h2 className="text-4xl font-black mb-8 text-orange-500">
                ข้อมูลติดต่อ
              </h2>

              <div className="space-y-8">

                {/* ADDRESS */}
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    📍 ที่อยู่บริษัท
                  </h3>

                  <p className="text-neutral-400 leading-relaxed">
                    บริษัท ริชเทค เพ้นท์ จำกัด
                    <br />
                    149/104-5 หมู่ 13 ถ.เพชรเกษม 95
                    <br />
                    ต.อ้อมน้อย เขตกระทุ่มแบน
                    <br />
                    จ.สมุทรสาคร 74130
                  </p>
                </div>

                {/* PHONE */}
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    📞 โทรศัพท์
                  </h3>

                  <a
                    href="tel:024205214"
                    className="text-neutral-400 hover:text-orange-500 transition"
                  >
                    02-420-5214-6
                  </a>
                </div>

                {/* FAX */}
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    📠 Fax
                  </h3>

                  <p className="text-neutral-400">
                    02-420-5213
                  </p>
                </div>

                {/* EMAIL */}
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    ✉️ Email
                  </h3>

                  <a
                    href="mailto:richtechpaint8@gmail.com"
                    className="text-neutral-400 hover:text-orange-500 transition"
                  >
                    richtechpaint8@gmail.com
                  </a>
                </div>

              </div>

            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-3xl border border-orange-500/20 h-[420px]">

              <iframe
  title="Richtech Paint Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.786189893369!2d100.3063181!3d13.7001774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2956684a4a5c1%3A0x783aa225a95017a1!2z4Lia4Lij4Li04Lip4Lix4LiX4LmA4LiX4LiEIOC5gOC4nuC5ieC4meC4l-C5jCDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1716200000000!5m2!1sth!2sth"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
/>

            </div>

          </div>

          {/* RIGHT FORM */}
          <div
            className="
              bg-[#111]
              border border-orange-500/20
              rounded-3xl
              p-10
            "
          >

            <h2 className="text-4xl font-black mb-8 text-orange-500">
              ส่งข้อความหาเรา
            </h2>

            <form
              action="https://formsubmit.co/richtechpaint8@gmail.com"
              method="POST"
              className="space-y-6"
            >

              {/* Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Name */}
              <div>
                <label className="block mb-3 font-semibold">
                  ชื่อ
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="
                    w-full
                    bg-black
                    border border-orange-500/20
                    rounded-2xl
                    px-5 py-4
                    outline-none
                    focus:border-orange-500
                    transition
                  "
                  placeholder="ชื่อของคุณ"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-3 font-semibold">
                  อีเมล
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="
                    w-full
                    bg-black
                    border border-orange-500/20
                    rounded-2xl
                    px-5 py-4
                    outline-none
                    focus:border-orange-500
                    transition
                  "
                  placeholder="example@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-3 font-semibold">
                  ข้อความ
                </label>

                <textarea
                  name="message"
                  rows="6"
                  required
                  className="
                    w-full
                    bg-black
                    border border-orange-500/20
                    rounded-2xl
                    px-5 py-4
                    outline-none
                    focus:border-orange-500
                    transition
                  "
                  placeholder="รายละเอียดที่ต้องการสอบถาม..."
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
                  w-full
                  bg-orange-500
                  hover:bg-orange-600
                  py-4
                  rounded-2xl
                  font-bold
                  transition-all duration-300
                  hover:scale-[1.02]
                  hover:shadow-[0_0_35px_rgba(255,115,0,.35)]
                "
              >
                ส่งข้อความ
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}

/* ================= LAYOUT WRAPPER (🔥 ตัวสำคัญ) ================= */
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {children}
    </div>
  );
}

/* ================= ROUTES ================= */
export default function App() {

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">

      <Routes location={location} key={location.pathname}>

        <Route
          path="/"
          element={
            <Layout>
              <PageTransition>
                <Home />
              </PageTransition>
            </Layout>
          }
        />

        <Route
          path="/products"
          element={
            <Layout>
              <PageTransition>
                <Products />
              </PageTransition>
            </Layout>
          }
        />

       <Route
  path="/news"
  element={
    <Layout>
      <PageTransition>
        <News />
      </PageTransition>
    </Layout>
  }
/>

<Route
  path="/news/:id"
  element={
    <Layout>
      <PageTransition>
        <NewsDetail />
      </PageTransition>
    </Layout>
  }
/>
        <Route
          path="/about"
          element={
            <Layout>
              <PageTransition>
                <About />
              </PageTransition>
            </Layout>
          }
        />

        <Route
          path="/contact"
          element={
            <Layout>
              <PageTransition>
                <Contact />
              </PageTransition>
            </Layout>
          }
        />
<Route
  path="/contact"
  element={
    <Layout>
      <PageTransition>
        <Contact />
      </PageTransition>
    </Layout>
  }
/>

<Route
  path="/court"
  element={
    <Layout>
      <PageTransition>
        <CourtDesigner />
      </PageTransition>
    </Layout>
  }
/>
      </Routes>

    </AnimatePresence>
    
  );
}