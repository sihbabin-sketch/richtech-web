import { Link } from "react-router-dom";
import logo from "./assets/RTP-Logo-01.png";

export default function Navbar() {
  return (
    <header className="border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        <img src={logo} className="w-[180px]" />

        <nav className="flex gap-6 text-white">
          <Link to="/">หน้าหลัก</Link>
          <Link to="/products">ผลิตภัณฑ์</Link>
          <Link to="/news">ข่าวสาร</Link>
          <Link to="/about">เกี่ยวกับเรา</Link>
          <Link to="/contact">ติดต่อ</Link>
        </nav>

      </div>
    </header>
  );
}