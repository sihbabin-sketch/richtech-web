import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/RTP-Logo-01.png";

export default function Navbar() {
  const [language, setLanguage] = useState("th");
  const [open, setOpen] = useState(false);

  const languages = {
    th: {
      label: "ไทย",
      flag: "🇹🇭",
    },
    en: {
      label: "English",
      flag: "🇺🇸",
    },
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <header className="border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        <img src={logo} className="w-[180px]" alt="Richtech Paint" />

        <nav className="flex items-center gap-6 text-white">
          <Link to="/">หน้าหลัก</Link>
          <Link to="/products">ผลิตภัณฑ์</Link>
          <Link to="/news">ข่าวสาร</Link>
          <Link to="/about">เกี่ยวกับเรา</Link>
          <Link to="/contact">ติดต่อ</Link>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300"
            >
              <span>{languages[language].flag}</span>
              <span>{languages[language].label}</span>
              <span className="text-xs">▼</span>
            </button>

            {open && (
              <div className="absolute right-0 top-full mt-3 w-36 bg-black border border-neutral-800 rounded-lg shadow-xl overflow-hidden z-50">

                <button
                  onClick={() => selectLanguage("th")}
                  className="w-full flex items-center gap-2 px-4 py-3 hover:bg-neutral-900 text-left"
                >
                  <span>🇹🇭</span>
                  <span>ไทย</span>
                </button>

                <button
                  onClick={() => selectLanguage("en")}
                  className="w-full flex items-center gap-2 px-4 py-3 hover:bg-neutral-900 text-left"
                >
                  <span>🇺🇸</span>
                  <span>English</span>
                </button>

              </div>
            )}
          </div>
        </nav>

      </div>
    </header>
  );
}