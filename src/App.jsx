import News from "./News";
import NewsDetail from "./NewsDetail";
import React from "react";
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
import epoxyBucket from "./assets/IMG_20260518_111118_941.jpg";
import steelBucket from "./assets/E120.png";
import buildingBucket from "./assets/RTP-P102  สีรองพื้นปูนใหม่กันด่าง.png";
import waterproofBucket from "./assets/กันซึม.png";
import specialBucket from "./assets/w105.jpg";
import specialBucket2 from "./assets/w105.jpg";

/* DATA */
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
    <section className="py-28 px-6">
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
      <p className="text-orange-500 uppercase tracking-[5px] mb-4">
        COMPANY HISTORY
      </p>

      <h2 className="text-5xl font-black mb-8 leading-tight">
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
      <div className="grid grid-cols-2 gap-5 mt-10">
  <div className="flex flex-col items-start mt-8">
  <div className="flex gap-6">
    <div className="w-[260px] h-[180px] rounded-3xl border border-orange-500 overflow-hidden flex items-center justify-center">
      <img
        src={countImg}
        alt="ISO"
        className="w-full h-full object-contain"
      />
    </div>

    <div className="w-[260px] h-[180px] rounded-3xl border border-orange-500 overflow-hidden flex items-center justify-center">
      <img
        src={countImg2}
        alt="มอก."
        className="w-full h-full object-contain"
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

      {/* ================= PRODUCT CATEGORY ================= */}
      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <div className="text-center mb-20">

            <p className="text-orange-500 uppercase tracking-[5px] mb-4">
              Products
            </p>

            <h2 className="text-5xl font-black">
              หมวดหมู่สินค้า
            </h2>

          </div>

          {/* GRID */}
      
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{[
  {
    name: "สีพื้นอุตสาหกรรม EPOXY",
    img: epoxyBucket,
  },
  {
    name: "สีโครงสร้างเหล็ก",
    img: steelBucket,
  },
  {
    name: "สีน้ำทาอาคาร",
    img: buildingBucket,
  },
  {
    name: "สีกันรั่วซึม",
    img: waterproofBucket,
  },
  {
    name: "สีสำหรับงานสนามกีฬา ",
    img: specialBucket2,
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
    <div
  className="
    w-32 h-32
    rounded-3xl
    bg-orange-500/10
    flex items-center justify-center
    mb-6
    overflow-hidden
  "
>
  <img
    src={item.img}
    alt={item.name}
    className="
      w-28
      h-28
      object-contain
      transition-all
      duration-300
      group-hover:scale-110
    "
  />
</div>
    <h3 className="text-2xl font-bold mb-4">
      {item.name}
    </h3>

    <p className="text-neutral-400 leading-relaxed">
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
    border border-orange-500/20
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
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative py-28 px-6 border-b border-orange-500/10">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">

          <p className="text-orange-500 uppercase tracking-[6px] mb-5 font-semibold">
            About Richtech Paint
          </p>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-8">
            เกี่ยวกับ
            <span className="block text-orange-500">
              Richtech Paint
            </span>
          </h1>

          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl mx-auto">
            ผู้นำด้านสีอุตสาหกรรม สีเคลือบพื้น และระบบป้องกันพื้นผิว
            ด้วยประสบการณ์มากกว่า 20 ปี
          </p>

        </div>

      </section>

      {/* COMPANY HISTORY */}
      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="text-orange-500 uppercase tracking-[5px] mb-4">
              Company History
            </p>

            <h2 className="text-5xl font-black leading-tight mb-10">
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

          </div>

          {/* RIGHT STATS */}
          <div className="grid gap-6">

            <div className="bg-[#111] border border-orange-500/20 rounded-3xl p-10 hover:border-orange-500 transition-all duration-300">
          <div className="h-80 rounded-3xl border border-orange-500 overflow-hidden">
  <img
    src={countImg}
    alt="มอก."
    className="w-full h-full object-cover"
  />
</div>
            </div>

            <div className="bg-[#111] border border-orange-500/20 rounded-3xl p-10 hover:border-orange-500 transition-all duration-300">
                  <div className="h-80 rounded-3xl border border-orange-500 overflow-hidden">
                    <img
        src={countImg2}
    alt="20+"
   className="w-full h-full object-contain"
  />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* VISION & MISSION */}
      <section className="py-28 px-6 bg-[#0a0a0a]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-orange-500 uppercase tracking-[5px] mb-4">
              Vision & Mission
            </p>

            <h2 className="text-5xl font-black">
              วิสัยทัศน์ และพันธกิจ
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* VISION */}
            <div className="bg-[#111] border border-orange-500/20 rounded-3xl p-10">

              <h3 className="text-3xl font-black text-orange-500 mb-6">
                วิสัยทัศน์
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
                พันธะภารกิจ
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
      <section className="py-28 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-orange-500 uppercase tracking-[5px] mb-4">
            Policy
          </p>

          <h2 className="text-5xl font-black mb-10">
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

    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative py-28 px-6 border-b border-orange-500/10">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">

          <p className="text-orange-500 uppercase tracking-[6px] mb-5 font-semibold">
            Contact Us
          </p>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-8">
            ติดต่อ
            <span className="block text-orange-500">
              Richtech Paint
            </span>
          </h1>

          <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl mx-auto">
            พร้อมให้คำปรึกษาเรื่องสีอุตสาหกรรม สีเคลือบพื้น
            และงานเคลือบผิวครบวงจร
          </p>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-6">

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

      </Routes>

    </AnimatePresence>
    
  );
}