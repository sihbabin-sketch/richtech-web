import { useState } from "react";

export default function CourtDesigner() {
  const defaultColor = "#1687E8";

  const [colors, setColors] = useState({
    left: defaultColor,
    top: defaultColor,
    middleLeft: defaultColor,
    middleRight: defaultColor,
    bottomLeft: defaultColor,
    bottomRight: defaultColor,
    bottom: defaultColor,
    right: defaultColor,
  });

  const [selectedArea, setSelectedArea] = useState("middleLeft");
const [courtType, setCourtType] = useState("tennis");

  // =========================================================
  // ชื่อพื้นที่
  // =========================================================

  const areaNames = {
    left: "ด้านซ้าย",
    top: "ด้านบน",
    middleLeft: "กลางซ้าย",
    middleRight: "กลางขวา",
    bottomLeft: "ล่างซ้าย",
    bottomRight: "ล่างขวา",
    bottom: "ด้านล่าง",
    right: "ด้านขวา",
  };

  // =========================================================
  // สี
  // =========================================================

  const presetColors = [
    { name: "Saffron Yellow", code: "SF-Yellow 1017", hex: "#F5B900" },
    { name: "Melon Yellow", code: "SF-Yellow 1028", hex: "#F5B900" },
    { name: "Bright Red Orange", code: "SF-Orange 2008", hex: "#F56A28" },

    { name: "Brillant Blue", code: "SF-Blue 5007", hex: "#37699A" },
    { name: "Azure Blue", code: "SF-Blue 5009", hex: "#245A82" },
    { name: "Light Blue", code: "SF-Blue 5012", hex: "#287FBE" },
    { name: "Sky Blue", code: "SF-Blue 5015", hex: "#0878C9" },
    { name: "Traffic Blue", code: "SF-Blue 5017", hex: "#087ACF" },

    { name: "Traffic Green", code: "SF-Green 6024", hex: "#159B70" },
    { name: "Mint Green", code: "SF-Green 6029", hex: "#168F68" },

    { name: "Silver Grey", code: "SF-Grey 7001", hex: "#B7BEC2" },
    { name: "Light Grey", code: "SF-Grey 7035", hex: "#E0E0DE" },
    { name: "Agate Grey", code: "SF-Grey 7038", hex: "#C9CAC4" },
    { name: "Window Grey", code: "SF-Grey 7040", hex: "#AEB5BA" },
    { name: "Traffic Grey A", code: "SF-Grey 7042", hex: "#9EA6AA" },

    { name: "White", code: "SF-White", hex: "#FFFFFF" },

    { name: "Red 01", code: "SF-Red 01", hex: "#6E2927" },
    { name: "Blue 01", code: "SF-Blue 01", hex: "#13559A" },
    { name: "Blue 02", code: "SF-Blue 02", hex: "#1682C7" },
    { name: "Cream 01", code: "SF-Cream 01", hex: "#E8C96C" },
    { name: "Cream 02", code: "SF-Cream 02", hex: "#F0DD91" },
    { name: "Grey 01", code: "SF-Grey 01", hex: "#D9DEDF" },
    { name: "Grey 02", code: "SF-Grey 02", hex: "#929DA2" },
    { name: "Grey 03", code: "SF-Grey 03", hex: "#536167" },
    { name: "Green 01", code: "SF-Green 01", hex: "#7EA777" },
    { name: "Green 02", code: "SF-Green 02", hex: "#165E3A" },
    { name: "Green 03", code: "SF-Green 03", hex: "#123F3A" },
  ];

  // =========================================================
  // รายละเอียดระบบพื้น
  //
  // ตรงนี้ผมทำเป็นโครงไว้ก่อน
  // สามารถใส่ข้อมูลจริงของ Richtech ได้ภายหลัง
  // =========================================================

  const floorSystem = [
    {
      number: "01",
      title: "เตรียมพื้นผิว",
      description:
        "ตรวจสอบและเตรียมสภาพพื้นผิวให้พร้อมสำหรับการติดตั้งระบบพื้นสนาม โดยต้องทำความสะอาดและกำจัดสิ่งสกปรกที่อาจส่งผลต่อการยึดเกาะ",
    },
    {
      number: "02",
      title: "ชั้นรองพื้น",
      description:
        "ลงวัสดุรองพื้นเพื่อช่วยเพิ่มการยึดเกาะระหว่างพื้นเดิมกับระบบสีหรือวัสดุชั้นถัดไป",
    },
    {
      number: "03",
      title: "ชั้นปรับระดับ",
      description:
        "ปรับสภาพพื้นผิวให้มีความเรียบและเหมาะสมกับการทำระบบพื้นสนาม เพื่อช่วยให้ผิวงานมีความสม่ำเสมอ",
    },
    {
      number: "04",
      title: "ชั้นสีสนาม",
      description:
        "เลือกสีสำหรับพื้นที่สนามแต่ละส่วนตามรูปแบบที่ต้องการ สามารถกำหนดสีแต่ละช่องแยกจากกันได้",
    },
    {
      number: "05",
      title: "ชั้นเคลือบผิว",
      description:
        "เป็นชั้นปกป้องผิวงาน ช่วยเพิ่มความเหมาะสมในการใช้งานและช่วยดูแลพื้นผิวของระบบสนาม",
    },
  ];

  // =========================================================
  // เปลี่ยนสี
  // =========================================================

  const changeColor = (color) => {
    setColors((prev) => ({
      ...prev,
      [selectedArea]: color,
    }));
  };

  // =========================================================
  // Reset
  // =========================================================

  const resetColors = () => {
    setColors({
      left: defaultColor,
      top: defaultColor,
      middleLeft: defaultColor,
      middleRight: defaultColor,
      bottomLeft: defaultColor,
      bottomRight: defaultColor,
      bottom: defaultColor,
      right: defaultColor,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <section className="pt-20 pb-12 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-orange-500 text-sm font-bold tracking-[5px] md:text-4xl mb-4">
            RICHTECH SPORT FLOOR
          </p>

          <h1 className="text-4xl md:text-2xl font-black">
            ออกแบบสีสนาม
          </h1>

          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            เลือกสีพื้นสนามในแต่ละพื้นที่
            เพื่อดูแนวทางการออกแบบก่อนการติดตั้งจริง
          </p>

        </div>

      </section>


      {/* ===================================================== */}
      {/* MAIN */}
      {/* ===================================================== */}

      <section className="px-4 md:px-6 pb-20">

        <div className="
          max-w-[1500px]
          mx-auto
          grid
          grid-cols-1
          xl:grid-cols-[320px_minmax(450px,1fr)_340px]
          gap-6
          items-start
        ">


          {/* ================================================= */}
          {/* LEFT : FLOOR INFORMATION */}
          {/* ================================================= */}

          <div className="
            rounded-3xl
            border
            border-white/10
            bg-[#0d0d0d]
            overflow-hidden
          ">

            <div className="
              px-6
              py-5
              border-b
              border-white/10
            ">

              <p className="
                text-orange-500
                text-xs
                font-bold
                tracking-[3px]
                mb-2
              ">
                FLOOR SYSTEM
              </p>

              <h2 className="text-xl font-black">
                รายละเอียดระบบพื้น
              </h2>

              <p className="text-sm text-neutral-500 mt-2">
                ขั้นตอนและองค์ประกอบของระบบพื้น
              </p>

            </div>


            <div className="p-5">

              <div className="space-y-3">

                {floorSystem.map((item) => (

                  <div
                    key={item.number}
                    className="
                      group
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/40
                      p-4
                      hover:border-orange-500/40
                      transition
                    "
                  >

                    <div className="flex gap-3">

                      <div className="
                        shrink-0
                        w-9
                        h-9
                        rounded-xl
                        bg-orange-500
                        text-black
                        flex
                        items-center
                        justify-center
                        font-black
                        text-sm
                      ">
                        {item.number}
                      </div>


                      <div>

                        <h3 className="
                          font-bold
                          group-hover:text-orange-500
                          transition
                        ">
                          {item.title}
                        </h3>

                        <p className="
                          mt-2
                          text-xs
                          leading-relaxed
                          text-neutral-500
                        ">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* CENTER : COURT */}
          {/* ================================================= */}

          <div className="
            rounded-3xl
            border
            border-orange-500/20
            bg-[#0d0d0d]
            overflow-hidden
          ">

           {/* HEADER */}

<div
  className="
    px-6
    py-5
    border-b
    border-white/10
  "
>

  <div className="flex items-center justify-between gap-4">

    {/* หัวข้อ */}

    <div>

      <p className="
        text-orange-500
        text-xs
        font-bold
        tracking-[3px]
      ">
        LIVE PREVIEW
      </p>

      <h2 className="text-xl font-black mt-1">
        ตัวอย่างสนาม
      </h2>

    </div>


    {/* ตัวเลือกสนาม */}

    <select
      value={courtType}
      onChange={(e) => setCourtType(e.target.value)}
      className="
        bg-black
        border
        border-orange-500/40
        text-white
        rounded-xl
        px-4
        py-2
        outline-none
        cursor-pointer
        text-sm
      "
    >

      <option value="tennis">
        🎾 สนามเทนนิส
      </option>

      <option value="futsal">
        ⚽ สนามฟุตซอล
      </option>

    </select>

  </div>

</div>
<div className="
p-8
flex
justify-center
items-center
">
  {courtType === "tennis" ? (
    <div className="w-full max-w-[390px]">
      <svg viewBox="0 0 390 598" className="w-full h-auto">
        {/* พื้นที่กดเลือก - เทนนิส */}
        <rect x="35" y="35" width="35" height="528" fill={colors.left} onClick={() => setSelectedArea("left")} className="cursor-pointer" />
        <rect x="320" y="35" width="35" height="528" fill={colors.right} onClick={() => setSelectedArea("right")} className="cursor-pointer" />
        <rect x="70" y="35" width="250" height="115" fill={colors.top} onClick={() => setSelectedArea("top")} className="cursor-pointer" />
        <rect x="70" y="150" width="125" height="149" fill={colors.middleLeft} onClick={() => setSelectedArea("middleLeft")} className="cursor-pointer" />
        <rect x="195" y="150" width="125" height="149" fill={colors.middleRight} onClick={() => setSelectedArea("middleRight")} className="cursor-pointer" />
        <rect x="70" y="299" width="125" height="149" fill={colors.bottomLeft} onClick={() => setSelectedArea("bottomLeft")} className="cursor-pointer" />
        <rect x="195" y="299" width="125" height="149" fill={colors.bottomRight} onClick={() => setSelectedArea("bottomRight")} className="cursor-pointer" />
        <rect x="70" y="448" width="250" height="115" fill={colors.bottom} onClick={() => setSelectedArea("bottom")} className="cursor-pointer" />

        {/* เส้นเทนนิส */}
        <rect x="35" y="35" width="320" height="528" fill="none" stroke="white" strokeWidth="3" pointerEvents="none" />
        <line x1="70" y1="35" x2="70" y2="563" stroke="white" strokeWidth="3" pointerEvents="none" />
        <line x1="320" y1="35" x2="320" y2="563" stroke="white" strokeWidth="3" pointerEvents="none" />
        <line x1="70" y1="150" x2="320" y2="150" stroke="white" strokeWidth="3" pointerEvents="none" />
        <line x1="35" y1="299" x2="355" y2="299" stroke="white" strokeWidth="3" pointerEvents="none" />
        <line x1="195" y1="150" x2="195" y2="448" stroke="white" strokeWidth="3" pointerEvents="none" />
        <line x1="70" y1="448" x2="320" y2="448" stroke="white" strokeWidth="3" pointerEvents="none" />

        {/* ไฮไลต์พื้นที่ที่เลือก */}
        {selectedArea === "left" && <rect x="35" y="35" width="35" height="528" fill="none" stroke="#F97316" strokeWidth="6" pointerEvents="none" />}
        {selectedArea === "right" && <rect x="320" y="35" width="35" height="528" fill="none" stroke="#F97316" strokeWidth="6" pointerEvents="none" />}
        {selectedArea === "top" && <rect x="70" y="35" width="250" height="115" fill="none" stroke="#F97316" strokeWidth="6" pointerEvents="none" />}
        {selectedArea === "middleLeft" && <rect x="70" y="150" width="125" height="149" fill="none" stroke="#F97316" strokeWidth="6" pointerEvents="none" />}
        {selectedArea === "middleRight" && <rect x="195" y="150" width="125" height="149" fill="none" stroke="#F97316" strokeWidth="6" pointerEvents="none" />}
        {selectedArea === "bottomLeft" && <rect x="70" y="299" width="125" height="149" fill="none" stroke="#F97316" strokeWidth="6" pointerEvents="none" />}
        {selectedArea === "bottomRight" && <rect x="195" y="299" width="125" height="149" fill="none" stroke="#F97316" strokeWidth="6" pointerEvents="none" />}
        {selectedArea === "bottom" && <rect x="70" y="448" width="250" height="115" fill="none" stroke="#F97316" strokeWidth="6" pointerEvents="none" />}
      </svg>
    </div>
   ) : (
    <div className="w-full max-w-[390px]">
      <svg viewBox="0 0 390 598" className="w-full h-auto">
        {/* =========================
            FUTSAL แนวตั้ง
            รูปทรงตามภาพฟุตซอลที่ให้มา
        ========================= */}

        {/* พื้นสนามครึ่งบน */}
        <rect
          x="35" y="35" width="320" height="264"
          fill={colors.top}
          onClick={() => setSelectedArea("top")}
          className="cursor-pointer"
        />

        {/* พื้นสนามครึ่งล่าง */}
        <rect
          x="35" y="299" width="320" height="264"
          fill={colors.bottom}
          onClick={() => setSelectedArea("bottom")}
          className="cursor-pointer"
        />

        {/* เขตโทษด้านบน - โค้งเข้ามาในสนาม */}
        <path
          d="M100 35 A95 95 0 0 0 290 35 Z"
          fill={colors.middleLeft}
          onClick={() => setSelectedArea("middleLeft")}
          className="cursor-pointer"
        />

        {/* เขตโทษด้านล่าง - โค้งเข้ามาในสนาม */}
        <path
          d="M100 563 A95 95 0 0 1 290 563 Z"
          fill={colors.middleRight}
          onClick={() => setSelectedArea("middleRight")}
          className="cursor-pointer"
        />

        {/* วงกลมกลาง */}
        <circle
          cx="195" cy="299" r="50"
          fill={colors.bottomRight}
          onClick={() => setSelectedArea("bottomRight")}
          className="cursor-pointer"
        />

        {/* กรอบสนาม */}
        <rect
          x="35" y="35" width="320" height="528"
          fill="none" stroke="white" strokeWidth="3"
          pointerEvents="none"
        />

        {/* เส้นแบ่งครึ่งสนาม */}
        <line
          x1="35" y1="299" x2="355" y2="299"
          stroke="white" strokeWidth="3"
          pointerEvents="none"
        />

        {/* วงกลมกลาง */}
        <circle
          cx="195" cy="299" r="50"
          fill="none" stroke="white" strokeWidth="3"
          pointerEvents="none"
        />

        {/* จุดกลาง */}
        <circle
          cx="195" cy="299" r="3"
          fill="white" pointerEvents="none"
        />

        {/* เขตโทษด้านบน */}
        <path
          d="M100 35 A95 95 0 0 0 290 35"
          fill="none" stroke="white" strokeWidth="3"
          pointerEvents="none"
        />

        {/* เขตโทษด้านล่าง */}
        <path
          d="M100 563 A95 95 0 0 1 290 563"
          fill="none" stroke="white" strokeWidth="3"
          pointerEvents="none"
        />

        {/* จุดโทษ */}
        <circle cx="195" cy="145" r="3" fill="white" pointerEvents="none" />
        <circle cx="195" cy="453" r="3" fill="white" pointerEvents="none" />

        {/* มุมสนาม */}
     {/* มุมบนซ้าย */}
<path
  d="M35 35 H53 M35 35 V53"
  fill="none"
  stroke="white"
  strokeWidth="3"
  strokeLinecap="square"
  pointerEvents="none"
/>

{/* มุมบนซ้าย */}
<path
  d="M35 53 A18 18 0 0 0 53 35"
  fill="none"
  stroke="white"
  strokeWidth="3"
  strokeLinecap="round"
  pointerEvents="none"
/>

{/* มุมบนขวา */}
<path
  d="M337 35 A18 18 0 0 0 355 53"
  fill="none"
  stroke="white"
  strokeWidth="3"
  strokeLinecap="round"
  pointerEvents="none"
/>

{/* มุมล่างซ้าย */}
<path
  d="M35 545 A18 18 0 0 1 53 563"
  fill="none"
  stroke="white"
  strokeWidth="3"
  strokeLinecap="round"
  pointerEvents="none"
/>

{/* มุมล่างขวา */}
<path
  d="M337 563 A18 18 0 0 1 355 545"
  fill="none"
  stroke="white"
  strokeWidth="3"
  strokeLinecap="round"
  pointerEvents="none"
/>

        {/* ประตูด้านบน */}
        <rect
          x="145" y="10" width="100" height="25"
          fill="none" stroke="white" strokeWidth="3"
          pointerEvents="none"
        />

        {/* ประตูด้านล่าง */}
        <rect
          x="145" y="563" width="100" height="25"
          fill="none" stroke="white" strokeWidth="3"
          pointerEvents="none"
        />

        {/* ไฮไลต์พื้นที่ที่เลือก */}
        {selectedArea === "top" && (
          <rect
            x="35" y="35" width="320" height="264"
            fill="none" stroke="#F97316" strokeWidth="6"
            pointerEvents="none"
          />
        )}

        {selectedArea === "bottom" && (
          <rect
            x="35" y="299" width="320" height="264"
            fill="none" stroke="#F97316" strokeWidth="6"
            pointerEvents="none"
          />
        )}

        {selectedArea === "middleLeft" && (
          <path
            d="M100 35 A95 95 0 0 0 290 35"
            fill="none" stroke="#F97316" strokeWidth="6"
            pointerEvents="none"
          />
        )}

        {selectedArea === "middleRight" && (
          <path
            d="M100 563 A95 95 0 0 1 290 563"
            fill="none" stroke="#F97316" strokeWidth="6"
            pointerEvents="none"
          />
        )}

        {selectedArea === "bottomRight" && (
          <circle
            cx="195" cy="299" r="50"
            fill="none" stroke="#F97316" strokeWidth="6"
            pointerEvents="none"
          />
        )}
      </svg>
    </div>
  )}
</div>

            {/* พื้นที่ที่เลือก */}

            <div className="
              px-6
              py-5
              border-t
              border-white/10
              flex
              items-center
              justify-between
            ">

              <div>

                <p className="text-xs text-neutral-500">
                  พื้นที่ที่เลือก
                </p>

                <p className="font-bold mt-1">
                  {areaNames[selectedArea]}
                </p>

              </div>


              <div className="flex items-center gap-3">

                <div
                  className="
                    w-10
                    h-10
                    rounded-xl
                    border
                    border-white/20
                  "
                  style={{
                    backgroundColor: colors[selectedArea],
                  }}
                />

                <span className="text-sm text-neutral-400">
                  {colors[selectedArea]}
                </span>

              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* RIGHT : COLOR SELECTOR */}
          {/* ================================================= */}

          <div className="
            rounded-3xl
            border
            border-orange-500/20
            bg-[#0d0d0d]
            overflow-hidden
            xl:sticky
            xl:top-24
          ">

            <div className="
              px-6
              py-5
              border-b
              border-white/10
            ">

              <p className="
                text-orange-500
                text-xs
                font-bold
                tracking-[3px]
              ">
                COLOR SELECTOR
              </p>

              <h2 className="text-xl font-black mt-1">
                เลือกสี
              </h2>

            </div>


            <div className="p-5">

              {/* สีของพื้นที่ปัจจุบัน */}

              <div className="
                rounded-2xl
                bg-black
                border
                border-orange-500/20
                p-4
                mb-6
              ">

                <p className="text-xs text-neutral-500">
                  กำลังเลือก
                </p>

                <div className="flex items-center gap-3 mt-3">

                  <div
                    className="
                      w-12
                      h-12
                      rounded-xl
                      border
                      border-white/20
                    "
                    style={{
                      backgroundColor: colors[selectedArea],
                    }}
                  />

                  <div>

                    <p className="font-bold">
                      {areaNames[selectedArea]}
                    </p>

                    <p className="text-xs text-neutral-500">
                      {colors[selectedArea]}
                    </p>

                  </div>

                </div>

              </div>


              {/* สีทั้งหมด */}

              <div className="space-y-2 max-h-[520px] overflow-y-auto pr-1">

                {presetColors.map((color) => (

                  <button
                    key={color.code}
                    type="button"
                    onClick={() => changeColor(color.hex)}
                    className="
                      w-full
                      flex
                      items-center
                      gap-3
                      p-3
                      rounded-xl
                      border
                      border-white/10
                      bg-black/40
                      hover:border-orange-500/50
                      hover:bg-orange-500/5
                      transition
                      text-left
                    "
                  >

                    <span
                      className="
                        w-10
                        h-10
                        rounded-lg
                        shrink-0
                        border
                        border-white/20
                      "
                      style={{
                        backgroundColor: color.hex,
                      }}
                    />

                    <div className="min-w-0">

                      <p className="text-sm font-semibold truncate">
                        {color.name}
                      </p>

                      <p className="text-[10px] text-neutral-500">
                        {color.code}
                      </p>

                    </div>

                  </button>

                ))}

              </div>


              {/* Custom Color */}

              <div className="
                mt-6
                pt-5
                border-t
                border-white/10
              ">

                <p className="text-sm font-bold mb-3">
                  กำหนดสีเอง
                </p>

                <div className="flex gap-3">

                  <input
                    type="color"
                    value={colors[selectedArea]}
                    onChange={(e) =>
                      changeColor(e.target.value)
                    }
                    className="
                      w-12
                      h-11
                      rounded-lg
                      cursor-pointer
                      bg-transparent
                    "
                  />

                  <input
                    type="text"
                    value={colors[selectedArea]}
                    onChange={(e) =>
                      changeColor(e.target.value)
                    }
                    className="
                      flex-1
                      min-w-0
                      rounded-xl
                      bg-black
                      border
                      border-white/10
                      px-3
                      text-sm
                      outline-none
                      focus:border-orange-500
                    "
                  />

                </div>

              </div>


              {/* Reset */}

              <button
                type="button"
                onClick={resetColors}
                className="
                  w-full
                  mt-5
                  py-3
                  rounded-xl
                  border
                  border-orange-500/40
                  text-orange-500
                  font-bold
                  hover:bg-orange-500
                  hover:text-black
                  transition
                "
              >
                รีเซ็ตสีสนาม
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}