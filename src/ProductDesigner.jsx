import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import originalImage from "./assets/product-design/original.png";
import parkingImage from "./assets/product-design/parking.jpg";
import sportsImage from "./assets/product-design/sports.jpg";
import outdoorImage from "./assets/product-design/outdoor.jpg";

// ชื่อโปรเจกต์ รูปตั้งต้น และตำแหน่งภาพเปลี่ยนสีของแต่ละพื้นที่
// factory ใช้ path เดิมทั้งหมด จึงไม่กระทบระบบเลือกสีโรงงานที่ทำไว้
const PROJECT_CONFIG = {
  factory: {
    title: "พื้นโรงงานอุตสาหกรรม",
    subtitle: "INDUSTRIAL FLOOR",
    image: originalImage,
    floorPath: (code) => `/masks/factory/โรงงาน/${code}.png`,
    linePath: (code, lineId) => `/masks/factory/lines/โรงงาน/${code}/${lineId}.jpg`,
  },
  parking: {
    // ใช้ URL /product-design/parking เดิม เพื่อไม่ให้ลิงก์เก่าเสีย
    // หน้านี้จะแสดงตัวออกแบบสนามกีฬา 2 โซนที่ด้านล่าง
    title: "สนามกีฬา",
    subtitle: "SPORTS FLOOR",
    image: parkingImage,
    floorPath: (code) => `/masks/parking/${code}.png`,
    linePath: (code, lineId) => `/masks/parking/lines/${code}/${lineId}.jpg`,
  },
  sports: {
    // URL /product-design/sports เดิมใช้แสดงพื้นลู่วิ่ง
    title: "พื้นลู่วิ่ง",
    subtitle: "RUNNING TRACK",
    image: sportsImage,
    floorPath: (code) => `/masks/sports/${code}.png`,
    // พื้นลู่วิ่งใช้เฉพาะสีพื้น ไม่มีเมนูสีเส้น
  },
  outdoor: {
    title: "พื้นดาดฟ้า",
    subtitle: "Rooftop deck",
    image: outdoorImage,
    // ชื่อไฟล์ในโฟลเดอร์จริงมีช่องว่าง เช่น red 01.png และ blue 02.png
    floorPath: (code) => `/masks/outdoor/${code}.png`,
  },
  coldroom: {
    title: "พื้นห้องเย็น",
    subtitle: "COLD ROOM FLOOR",
    // public/masks/COLD ROOM/1001.png เป็นภาพเริ่มต้น
    image: "/masks/COLD%20ROOM/1001.png",
    // encodeURI แปลงช่องว่างในชื่อโฟลเดอร์ COLD ROOM ให้เป็น %20
    floorPath: (code) => encodeURI(`/masks/COLD ROOM/${code}.png`),
  },
};

const COLORS = [

  { ral: "RAL 1001", hex: "#C9AE73" },

  { ral: "RAL 1013", hex: "#E8E1CF" },

  { ral: "RAL 1014", hex: "#DDC49A" },

  { ral: "RAL 1015", hex: "#E6D2B5" },

  { ral: "RAL 1028", hex: "#FF9B00" },

  { ral: "RAL 1032", hex: "#E2A300" },

  { ral: "RAL 1034", hex: "#EBAA35" },

  { ral: "RAL 2004", hex: "#F44611" },

  { ral: "RAL 2008", hex: "#F75E00" },

  { ral: "RAL 3000", hex: "#AF2B1E" },

  { ral: "RAL 3002", hex: "#A52019" },

  { ral: "RAL 3003", hex: "#8D1D2C" },

  { ral: "RAL 3015", hex: "#D8A0A6" },

  { ral: "RAL 3017", hex: "#E63244" },

  { ral: "RAL 3020", hex: "#CC0605" },

  { ral: "RAL 5005", hex: "#1E518D" },

  { ral: "RAL 5007", hex: "#41678D" },

  { ral: "RAL 5012", hex: "#3B83BD" },

  { ral: "RAL 5015", hex: "#0076D6" },

  { ral: "RAL 5017", hex: "#006B93" },

  { ral: "RAL 6001", hex: "#287233" },

  { ral: "RAL 6002", hex: "#276235" },

  { ral: "RAL 6010", hex: "#4C9141" },

  { ral: "RAL 6018", hex: "#57A639" },

  { ral: "RAL 6019", hex: "#B8D7A3" },

  { ral: "RAL 6024", hex: "#308446" },

  { ral: "RAL 6026", hex: "#006F5B" },

  { ral: "RAL 6029", hex: "#006F3D" },

  { ral: "RAL 6032", hex: "#248F54" },

  { ral: "RAL 6037", hex: "#00B51A" },

  { ral: "RAL 7001", hex: "#8A9597" },

  { ral: "RAL 7035", hex: "#CBD0CC" },

  { ral: "RAL 7038", hex: "#B5B8B1" },

  { ral: "RAL 7040", hex: "#9DA3A6" },

  { ral: "RAL 7045", hex: "#91969A" },

  { ral: "RAL 7047", hex: "#CACACA" },

  { ral: "RAL 9003", hex: "#F4F4F4" },

  { ral: "RAL 9010", hex: "#F7F0E3" },

  { ral: "RAL 9012", hex: "#F2F2F2" },

  { ral: "RAL 9017", hex: "#1E1E1E" },

  { ral: "RAL 9018", hex: "#C7CBC4" },

];


// โค้ดไฟล์รูปจริงจาก public/masks/COLD ROOM (ตามโฟลเดอร์ที่ส่งมา)
// 0010/0020/0090 เป็นรหัสชื่อไฟล์ จึงไม่ระบุว่าเป็น RAL Classic
const COLD_ROOM_CODES = [
  "0010", "0020", "0090", "1001", "1013", "1014", "1015", "1028", "1032", "1034",
  "2000", "2004", "2008", "3000", "3002", "3003", "3015", "3017", "3020", "5005",
  "5007", "5010", "5012", "5015", "5017", "6001", "6002", "6010", "6018", "6019",
  "6024", "6029", "6032", "6037", "7001", "7035", "7038", "7040", "7042", "7045",
  "7047", "9003", "9010", "9012", "9017", "9018",
];

// ค่า HEX มีไว้ทำปุ่มตัวอย่างเท่านั้น; สีจริงแสดงจาก PNG ของผู้ใช้
// สำหรับโค้ดที่ยังไม่มีค่า HEX ใช้ภาพ PNG จริงเป็นตัวอย่างบนปุ่มแทน
const COLD_ROOM_HEX_OVERRIDES = {
  "2000": "#DD7907",
  "5010": "#13447C",
  "7042": "#8E9394",
};
const COLD_ROOM_COLORS = COLD_ROOM_CODES.map((code) => {
  const matchingRal = COLORS.find((color) => color.ral === `RAL ${code}`);
  return {
    code,
    ral: ["0010", "0020", "0090"].includes(code) ? code : `RAL ${code}`,
    name: code,
    hex: matchingRal?.hex || COLD_ROOM_HEX_OVERRIDES[code] || null,
  };
});

// ชุดสีพื้นลู่วิ่ง — อ้างอิงจากตาราง SF ในภาพที่ผู้ใช้ส่งมา
// ค่า HEX สุ่มตัวอย่างจากภาพเพื่อใช้แสดงบนหน้าจอ ไม่ใช่ค่า RAL ที่รับรอง
const SPORTS_COLORS = [
  { ral: "RAL 1017", hex: "#F5AD38", name: "SF-Yellow 1017" },
  { ral: "RAL 1028", hex: "#F39B13", name: "SF-Yellow 1028" },
  { ral: "RAL 2008", hex: "#EF603B", name: "SF-Orange 2008" },
  { ral: "RAL 5007", hex: "#475B8E", name: "SF-Blue 5007" },
  { ral: "RAL 5009", hex: "#414F77", name: "SF-Blue 5009" },
  { ral: "RAL 5012", hex: "#357DCE", name: "SF-Blue 5012" },
  { ral: "RAL 5015", hex: "#2769C9", name: "SF-Blue 5015" },
  { ral: "RAL 5017", hex: "#1772D4", name: "SF-Blue 5017" },
  { ral: "RAL 6024", hex: "#468157", name: "SF-Green 6024" },
  { ral: "RAL 6029", hex: "#416E43", name: "SF-Green 6029" },
  { ral: "RAL 7001", hex: "#939B9E", name: "SF-Grey 7001" },
  { ral: "RAL 7035", hex: "#D6DBD7", name: "SF-Grey 7035" },
  { ral: "RAL 7038", hex: "#BABBB5", name: "SF-Grey 7038" },
  { ral: "RAL 7040", hex: "#9FA4AA", name: "SF-Grey 7040" },
  { ral: "RAL 7042", hex: "#8E9394", name: "SF-Grey 7042" },
  { ral: "WHITE", hex: "#FFFFFF", name: "SF-White" },
];

// สีพื้นภายนอก — ชุด SF Waterproof and Sport Floor ตามตารางสีที่ส่งมา
// ค่า HEX เก็บจากภาพอ้างอิงสำหรับแสดง swatch บนเว็บ (ไม่ใช่ค่าโรงงานที่รับรอง)
// code คือชื่อไฟล์ภาพใน public/masks/outdoor/<code>.png
const OUTDOOR_COLORS = [
  { code: "red01",   ral: "SF-Red 01",   name: "SF-Red 01",   hex: "#693329" },
  { code: "blue01",  ral: "SF-Blue 01",  name: "SF-Blue 01",  hex: "#2F4EA8" },
  { code: "blue02",  ral: "SF-Blue 02",  name: "SF-Blue 02",  hex: "#1E63C7" },
  { code: "cream01", ral: "SF-Cream 01", name: "SF-Cream 01", hex: "#EEBA74" },
  { code: "cream02", ral: "SF-Cream 02", name: "SF-Cream 02", hex: "#EFDD9B" },
  { code: "grey01",  ral: "SF-Grey 01",  name: "SF-Grey 01",  hex: "#DCE5E2" },
  { code: "grey02",  ral: "SF-Grey 02",  name: "SF-Grey 02",  hex: "#8C9397" },
  { code: "grey03",  ral: "SF-Grey 03",  name: "SF-Grey 03",  hex: "#5E6462" },
  { code: "green01", ral: "SF-Green 01", name: "SF-Green 01", hex: "#87A17A" },
  { code: "green02", ral: "SF-Green 02", name: "SF-Green 02", hex: "#3E522E" },
  { code: "green03", ral: "SF-Green 03", name: "SF-Green 03", hex: "#364133" },
  { code: "white",   ral: "SF-White",    name: "SF-White",    hex: "#FFFFFF" },
];

// =========================

// สีเส้น 9 สี

// =========================

const BASE_LINE_COLORS = [

  { id: "01", name: "ขาว", ral: "WHITE", hex: "#FFFFFF" },

  { id: "02", name: "ดำ", ral: "BLACK", hex: "#111111" },

  { id: "03", name: "RAL 1032", ral: "RAL 1032", hex: "#E2A300" },

  { id: "09", name: "RAL 3015", ral: "RAL 3015", hex: "#D8A0A6" },

  { id: "06", name: "RAL 3020", ral: "RAL 3020", hex: "#CC0605" },

  { id: "08", name: "RAL 5015", ral: "RAL 5015", hex: "#0076D6" },

  { id: "04", name: "RAL 6018", ral: "RAL 6018", hex: "#57A639" },

  { id: "05", name: "RAL 6026", ral: "RAL 6026", hex: "#006F5B" },

  { id: "07", name: "RAL 7040", ral: "RAL 7040", hex: "#9DA3A6" },

];

// แต่ละสีพื้นมีชุดสีเส้นของตัวเอง

// เปลี่ยน colors หรือ ext ของแต่ละรหัสได้อิสระ

const LINE_CONFIG_BY_FLOOR = {

  "1001": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "1013": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "1014": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "1015": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "1028": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "1032": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "1034": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "2004": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "2008": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "3000": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "3002": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "3003": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "3015": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "3017": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "3020": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "5005": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "5007": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "5012": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "5015": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "5017": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "6001": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "6002": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "6010": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "6018": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "6019": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "6024": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "6026": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "6029": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "6032": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "6037": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "7001": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "7035": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "7038": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "7040": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "7045": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "7047": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "9003": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "9010": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "9012": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "9017": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

  "9018": {

    ext: "jpg",

    colors: BASE_LINE_COLORS.map((item) => ({ ...item })),

  },

};

// ============================================================
// ตั้งค่าเฉดสีเส้นแยกตาม "สีพื้น / รหัสเส้น" ไม่กระทบสีอื่น
// 3015 = พื้นชมพู, 09 = เส้นชมพู
// sourceHex: สีเส้นเดิมที่อยู่ในภาพ JPG (ภาพที่แจ้งว่าออกแดง)
// targetHex: เฉดที่อยากให้แสดงในภาพและบนปุ่มเลือกสี
// ============================================================
const LINE_SHADE_BY_FLOOR = {
  "3015": {
    "09": { sourceHex: "#CC0605", targetHex: "#D8A0A6" },
  },
};

function validHex(value) {
  return /^#[0-9a-fA-F]{6}$/.test(value);
}

function hexToRgb(hex) {
  return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
}

function hueOf(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  if (!delta) return 0;
  let hue;
  if (max === r) hue = ((g - b) / delta) % 6;
  else if (max === g) hue = (b - r) / delta + 2;
  else hue = (r - g) / delta + 4;
  return (hue * 60 + 360) % 360;
}

// ปรับเฉดสีที่ใกล้เคียงสีเส้นเดิมใน JPG เท่านั้น
// ไม่ใช้ CSS filter ที่จะเปลี่ยนสีทั้งภาพ และไม่ต้องเพิ่มไฟล์ภาพใหม่
// หากภาพมีวัตถุอื่นที่สีใกล้กับสีเส้นเดิม อาจถูกเปลี่ยนด้วย
function paintLineShade(canvas, image, sourceHex, targetHex) {
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return;
  ctx.drawImage(image, 0, 0);
  const { width, height } = canvas;
  const pixels = ctx.getImageData(0, 0, width, height);
  const data = pixels.data;
  const [sr, sg, sb] = hexToRgb(sourceHex);
  const [tr, tg, tb] = hexToRgb(targetHex);
  const srcHue = hueOf(sr, sg, sb);
  const srcMax = Math.max(sr, sg, sb);
  const srcMin = Math.min(sr, sg, sb);
  const srcSat = srcMax ? (srcMax - srcMin) / srcMax : 0;

  // การปรับสีจาก JPG ต้องมีความต่างของสีเพียงพอ
  // สีขาวและสีดำควรใช้ mask แยก หรือใช้ JPG ที่ทำสีไว้แล้ว
  if (srcSat < 0.15) return;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const hi = Math.max(r, g, b);
    const lo = Math.min(r, g, b);
    const sat = hi ? (hi - lo) / hi : 0;
    if (sat < Math.max(0.28, srcSat * 0.48)) continue;

    const hue = hueOf(r, g, b);
    const hueDist = Math.abs(hue - srcHue);
    const d = Math.min(hueDist, 360 - hueDist);
    if (d > 27) continue;

    // สำหรับสีแดง: ไม่แตะพื้นชมพูที่อิ่มสีน้อยกว่า และหลีกเลี่ยงส่วนเทา
    if (srcHue < 20 || srcHue > 340) {
      if ((r - Math.max(g, b)) / Math.max(r, 1) < 0.36) continue;
    }

    const hueWeight = Math.min(1, Math.max(0, (27 - d) / 12));
    const satWeight = Math.min(1, Math.max(0, (sat - 0.25) / 0.22));
    const mix = hueWeight * satWeight;
    if (!mix) continue;

    // เก็บมิติแสง-เงาจาก JPG เดิม โดยปรับแค่พิกเซลโทนเส้น
    const shade = Math.max(0.35, Math.min(1.35, hi / Math.max(srcMax, 1)));
    data[i] = Math.round(r * (1 - mix) + Math.min(255, tr * shade) * mix);
    data[i + 1] = Math.round(g * (1 - mix) + Math.min(255, tg * shade) * mix);
    data[i + 2] = Math.round(b * (1 - mix) + Math.min(255, tb * shade) * mix);
  }
  ctx.putImageData(pixels, 0, 0);
}

function StandardProductDesigner() {
  // App.jsx กำหนดเส้นทางไว้ว่า /product-design/:area
  const { area = "factory" } = useParams();
  const project = PROJECT_CONFIG[area] || PROJECT_CONFIG.factory;
  // ใช้พาเลตสีของพื้นลู่วิ่งและพื้นที่ภายนอกแยกจากสีพื้นอุตสาหกรรม
  const floorColors = area === "sports"
    ? SPORTS_COLORS
    : area === "outdoor"
      ? OUTDOOR_COLORS
      : area === "coldroom"
        ? COLD_ROOM_COLORS
        : COLORS;
  const hasLineColors = area === "factory" || area === "parking";

  // =========================

  // สีพื้น

  // =========================

  const [selectedColor, setSelectedColor] = useState(null);

  // =========================

  // สีเส้น

  // =========================

  const [selectedLineColor, setSelectedLineColor] =

    useState(null);

  // =========================

  // รูปที่กำลังแสดง

  // =========================

  const [currentImage, setCurrentImage] = useState(project.image);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState("");
  const imageRequestId = useRef(0);

  // โหลดภาพก่อนแสดง: ภาพเก่ายังคงอยู่ระหว่างรอ ไม่กระพริบ
  const showImage = (src) => {
    const requestId = ++imageRequestId.current;
    setImageLoading(true);
    setImageError("");

    const nextImage = new Image();
    nextImage.onload = () => {
      if (requestId !== imageRequestId.current) return;
      setCurrentImage(src);
      setImageLoading(false);
    };
    nextImage.onerror = () => {
      if (requestId !== imageRequestId.current) return;
      setImageLoading(false);
      setCurrentImage(project.image); // ไม่พบภาพสี: กลับภาพเริ่มต้นของโปรเจกต์นี้
      setImageError(`ไม่พบภาพสีที่เลือก: ${src}`);
    };
    nextImage.src = src;
  };

  const selectedFloorCode = selectedColor
    ? (selectedColor.code || selectedColor.ral.replace("RAL ", ""))
    : null;

  const currentLineConfig = hasLineColors && selectedFloorCode
    ? LINE_CONFIG_BY_FLOOR[selectedFloorCode] || null
    : null;

  const lineColors = currentLineConfig?.colors || [];

  // แต่ละพื้น / แต่ละสีเส้น จะมีเฉดของตัวเอง
  const [lineHexOverrides, setLineHexOverrides] = useState({});
  const [draftLineHex, setDraftLineHex] = useState("");
  const canvasRef = useRef(null);
  const [readyPreviewKey, setReadyPreviewKey] = useState("");

  // เปลี่ยนโปรเจกต์แล้วเริ่มภาพและการเลือกสีใหม่ โดยไม่ค้างค่าของโปรเจกต์ก่อน
  useEffect(() => {
    imageRequestId.current += 1;
    setSelectedColor(null);
    setSelectedLineColor(null);
    setCurrentImage(project.image);
    setImageLoading(false);
    setImageError("");
    setReadyPreviewKey("");
  }, [area]);


  const lineKey = selectedFloorCode && selectedLineColor
    ? `${area}/${selectedFloorCode}/${selectedLineColor.id}`
    : "";
  const currentLineDefaults = selectedFloorCode && selectedLineColor
    ? (area === "factory" ? LINE_SHADE_BY_FLOOR[selectedFloorCode]?.[selectedLineColor.id] : null)
    : null;
  const selectedLineHex = lineKey
    ? (lineHexOverrides[lineKey] || currentLineDefaults?.targetHex || selectedLineColor.hex)
    : "";
  const lineSourceHex = currentLineDefaults?.sourceHex || selectedLineColor?.hex || "";

  // แสดงรูปจริงหลังโหลดเสร็จ จากนั้นใช้ Canvas ทับเฉพาะสีเส้น
  const activeLinePhoto = hasLineColors && selectedFloorCode && selectedLineColor
    ? project.linePath(selectedFloorCode, selectedLineColor.id)
    : "";
  const shadePreviewEnabled = Boolean(
    lineKey && currentImage === activeLinePhoto &&
    validHex(selectedLineHex) && validHex(lineSourceHex) &&
    selectedLineHex.toLowerCase() !== lineSourceHex.toLowerCase()
  );
  const previewKey = `${currentImage}|${lineKey}|${selectedLineHex}`;

  useEffect(() => {
    setDraftLineHex(selectedLineHex);
  }, [lineKey, selectedLineHex]);

  useEffect(() => {
    if (!shadePreviewEnabled || !canvasRef.current) {
      setReadyPreviewKey("");
      return;
    }
    let cancelled = false;
    const img = new Image();
    img.onload = () => {
      if (cancelled || !canvasRef.current) return;
      try {
        paintLineShade(canvasRef.current, img, lineSourceHex, selectedLineHex);
        setReadyPreviewKey(previewKey);
      } catch (error) {
        console.error("Cannot recolor line preview:", error);
        setReadyPreviewKey("");
      }
    };
    img.onerror = () => {
      if (!cancelled) setReadyPreviewKey("");
    };
    img.src = currentImage;
    return () => { cancelled = true; };
  }, [currentImage, previewKey, shadePreviewEnabled, lineSourceHex, selectedLineHex]);

  const updateLineShade = (hex) => {
    if (!lineKey || !validHex(hex)) return;
    setLineHexOverrides((previous) => ({ ...previous, [lineKey]: hex.toUpperCase() }));
  };

  const restoreLineShade = () => {
    if (!lineKey) return;
    setLineHexOverrides((previous) => {
      const next = { ...previous };
      delete next[lineKey];
      return next;
    });
  };

  // =========================

  // เลือกสีพื้น

  // =========================

  const selectColor = (color) => {

    const floorCode = color.code || color.ral.replace("RAL ", "");

    setSelectedColor(color);

    // เมื่อเปลี่ยนสีพื้น

    // ให้ยกเลิกสีเส้นที่เลือกไว้

    setSelectedLineColor(null);

    // กลับไปแสดงภาพพื้นปกติ

    // ใช้ path ของแต่ละพื้นที่: factory, parking, sports, outdoor
    showImage(project.floorPath(floorCode));

  };

  // =========================

  // เลือกสีเส้น

  // =========================

  const selectLineColor = (line) => {

    if (!selectedColor || !hasLineColors) return;

    const floorCode =
      selectedColor.code || selectedColor.ral.replace("RAL ", "");

    if (!currentLineConfig) return;

    setSelectedLineColor(line);

    // ภาพสีเส้นทุกสี = .jpg
    showImage(project.linePath(floorCode, line.id));

  };

  // =========================

  // รีเซ็ต

  // =========================

  const resetColor = () => {

    setSelectedColor(null);

    setSelectedLineColor(null);

    // ยกเลิกภาพที่กำลังโหลดเมื่อกดรีเซ็ต
    imageRequestId.current += 1;
    setImageLoading(false);
    setImageError("");
    setCurrentImage(project.image);

  };

  return (

    <div className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-[1500px] px-6 py-10">

        {/* HEADER */}

        <p className="text-xs tracking-[5px] text-orange-500">

          RICHTECH PAINT

        </p>

        <h1 className="mt-2 text-4xl font-black">

           {project.title}

        </h1>

        <p className="mt-2 text-sm text-neutral-400">

           {project.subtitle} · {hasLineColors ? "เลือกสีพื้นและสีเส้นเพื่อดูตัวอย่าง" : "เลือกสีพื้นเพื่อดูตัวอย่าง"}

        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_340px]">

          {/* ================================ */}

          {/* ภาพตัวอย่าง */}

          {/* ================================ */}

          <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950">

            <div className="flex items-center justify-between border-b border-neutral-800 px-5 py-4">

              <div>

                <h2 className="font-bold">

                  ภาพจำลองพื้นที่จริง

                </h2>

                <p className="text-xs text-neutral-500">

                  {hasLineColors ? "เลือกสีพื้น แล้วเลือกสีเส้นของแต่ละพื้น" : "เลือกสีพื้นจากตารางสี SF"}

                </p>

              </div>

              <button

                onClick={resetColor}

                className="rounded-full border border-neutral-700 px-4 py-2 text-xs transition hover:bg-neutral-800"

              >

                รีเซ็ต

              </button>

            </div>

            {/* ขยายภาพตัวอย่างเฉพาะพื้นห้องเย็น โดยรักษาสัดส่วนและไม่ครอปภาพ */}
            <div className={`relative flex items-center justify-center bg-black ${area === "coldroom" ? "min-h-[480px] p-2" : "min-h-[260px] p-3"}`}>
              <div className={area === "coldroom" ? "relative w-full" : "relative inline-block max-w-full"}>
                <img
                  src={currentImage}
                  alt={
                    selectedColor
                      ? `${selectedColor.ral} ${selectedLineColor?.name || ""}`
                      : project.title
                  }
                  className={area === "coldroom"
                    ? "block h-auto max-h-[760px] w-full object-contain"
                    : "block h-auto max-h-[520px] w-auto max-w-full object-contain"
                  }
                />
                <canvas
                  ref={canvasRef}
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  style={{
                    // Canvas จะตรงกับขนาดภาพ แม้ภาพจะถูกย่อให้เตี้ยลง
                    opacity: shadePreviewEnabled && readyPreviewKey === previewKey ? 1 : 0,
                  }}
                />
              </div>
              {imageLoading && (
                <div className="absolute bottom-4 left-4 rounded-lg bg-black/75 px-3 py-2 text-xs text-white">
                  กำลังโหลดภาพ...
                </div>
              )}
              {imageError && (
                <div role="alert" className="absolute bottom-4 left-4 right-4 break-all rounded-lg border border-red-500/50 bg-red-500/10 p-3 text-sm text-red-300">
                  {imageError} — ต้องเพิ่มภาพสีนี้ในโฟลเดอร์ public ก่อนจึงจะเปลี่ยนภาพได้
                </div>
              )}
            </div>

          </div>

          {/* ================================ */}

          {/* SIDEBAR */}

          {/* ================================ */}

          <aside className="rounded-3xl border border-neutral-800 bg-neutral-950 p-5">

            {/* ================================ */}

            {/* สีพื้น */}

            {/* ================================ */}

            <p className="text-xs tracking-[4px] text-neutral-500">

              FLOOR COLOR

            </p>

            <h2 className="mt-2 text-xl font-bold">

              เลือกสีพื้น

            </h2>

            <p className="mt-1 text-xs text-neutral-500">

              กดสีเพื่อเปลี่ยนสีพื้น

            </p>

            <div className="mt-5 max-h-[300px] overflow-y-auto pr-2">

              <div className="grid grid-cols-3 gap-2">

                {floorColors.map((color) => {

                  const active =

                    selectedColor?.ral === color.ral;

                  return (

                    <button

                      key={`floor-${color.ral}`}
                      title={color.name || color.ral}
                      onClick={() => selectColor(color)}

                      className={`rounded-xl border p-1.5 transition ${

                        active

                          ? "border-orange-500 bg-orange-500/10"

                          : "border-neutral-800 bg-neutral-900 hover:border-neutral-600"

                      }`}

                    >

                      {area === "coldroom" && !color.hex ? (
                        <img
                          src={project.floorPath(color.code)}
                          alt={`ตัวอย่างพื้นห้องเย็น ${color.code}`}
                          loading="lazy"
                          className="h-10 w-full rounded-lg border border-neutral-700 object-cover"
                        />
                      ) : (
                        <div
                          className="h-10 w-full rounded-lg border border-neutral-700"
                          style={{ backgroundColor: color.hex }}
                        />
                      )}

                      <p

                        className={`mt-2 text-[9px] ${

                          active

                            ? "text-orange-500"

                            : "text-neutral-400"

                        }`}

                      >

                        {color.ral}

                      </p>

                    </button>

                  );

                })}

              </div>

            </div>

            {/* ================================ */}

            {/* สีพื้นที่เลือก */}

            {/* ================================ */}

            <div className="mt-5 border-t border-neutral-800 pt-5">

              <p className="text-xs text-neutral-500">

                สีพื้นที่เลือก

              </p>

              {selectedColor ? (

                <div className="mt-3 flex items-center gap-3 rounded-xl border border-neutral-800 p-3">

                  {area === "coldroom" && !selectedColor.hex ? (
                    <img
                      src={project.floorPath(selectedColor.code)}
                      alt={`พื้นห้องเย็น ${selectedColor.code}`}
                      className="h-10 w-10 rounded-xl border border-neutral-700 object-cover"
                    />
                  ) : (
                    <div
                      className="h-10 w-10 rounded-xl border border-neutral-700"
                      style={{ backgroundColor: selectedColor.hex }}
                    />
                  )}

                  <div>

                    <p className="font-bold">

                      {selectedColor.ral}

                    </p>

                    <p className="text-xs text-neutral-500">

                      {selectedColor.hex || "สีตามภาพ PNG"}

                    </p>

                  </div>

                </div>

              ) : (

                <p className="mt-3 text-sm text-neutral-500">

                  ยังไม่ได้เลือกสีพื้น

                </p>

              )}

            </div>

            {/* ================================ */}

            {/* สีเส้น */}

            {/* ================================ */}

            {hasLineColors && (
            <div className="mt-7 border-t border-neutral-800 pt-6">

              <p className="text-xs tracking-[4px] text-neutral-500">

                LINE COLOR

              </p>

              <h2 className="mt-2 text-xl font-bold">

                เลือกสีเส้น

              </h2>

              {!selectedColor ? (

                <p className="mt-1 text-xs text-neutral-500">

                  กรุณาเลือกสีพื้นก่อน

                </p>

              ) : (

                <p className="mt-1 text-xs text-neutral-500">

                  เลือกสีเส้นสำหรับ {selectedColor.ral}

                </p>

              )}

              {/* 9 สีเส้น */}

              <div

                className={`mt-5 grid grid-cols-3 gap-2 ${

                  !selectedColor

                    ? "pointer-events-none opacity-30"

                    : ""

                }`}

              >

                  {lineColors.map((line) => {
                    const keyForLine = `${area}/${selectedFloorCode}/${line.id}`;
                    const swatchHex = lineHexOverrides[keyForLine]
                      || (area === "factory" ? LINE_SHADE_BY_FLOOR[selectedFloorCode]?.[line.id]?.targetHex : null)
                      || line.hex;

                  const active =

                    selectedLineColor?.id === line.id;

                  return (

                    <button

                      key={`line-${line.id}`}

                      onClick={() =>

                        selectLineColor(line)

                      }

                      disabled={!selectedColor}

                      className={`rounded-xl border p-1.5 transition ${

                        active

                          ? "border-orange-500 bg-orange-500/10"

                          : "border-neutral-800 bg-neutral-900 hover:border-neutral-600"

                      }`}

                    >

                      <div

                        className="h-10 w-full rounded-lg border border-neutral-700"

                        style={{

                          backgroundColor: swatchHex,

                        }}

                      />

                      <p

                        className={`mt-2 text-[9px] ${

                          active

                            ? "text-orange-500"

                            : "text-neutral-400"

                        }`}

                      >

                        {line.name}

                      </p>

                    </button>

                  );

                })}

              </div>

              {/* ================================ */}

              {/* สีเส้นที่เลือก */}

              {/* ================================ */}

              <div className="mt-5">

                <p className="text-xs text-neutral-500">

                  สีเส้นที่เลือก

                </p>

                {selectedLineColor ? (

                  <div className="mt-3 flex items-center gap-3 rounded-xl border border-neutral-800 p-3">

                    <div

                      className="h-10 w-10 rounded-xl border border-neutral-700"

                      style={{

                        backgroundColor:

                          selectedLineHex,

                      }}

                    />

                    <div>

                      <p className="font-bold">

                        {selectedLineColor.name}

                      </p>

                      <p className="text-xs text-neutral-500">

                        LINE {selectedLineColor.id}

                      </p>

                    </div>

                  </div>

                ) : (

                  <p className="mt-3 text-sm text-neutral-500">

                    ยังไม่ได้เลือกสีเส้น

                  </p>

                )}

              </div>

              {/* ช่องปรับเฉดแยกตามสีพื้นและสีเส้น */}
              {selectedColor && selectedLineColor && (
                <div className="mt-5 rounded-2xl border border-orange-500/30 bg-neutral-900 p-4">
                  <p className="text-xs font-semibold tracking-[2px] text-orange-400">
                    LINE SHADE · ปรับเฉดสีเส้นแยก
                  </p>
                  <p className="mt-2 text-xs leading-5 text-neutral-400">
                    ปรับเฉพาะเส้น {selectedLineColor.name} บนพื้น {selectedColor.ral}
                    โดยไม่เปลี่ยนสีพื้นหรือสีเส้นของพื้นอื่น
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <input
                      type="color"
                      aria-label="เลือกเฉดสีเส้น"
                      value={selectedLineHex}
                      onChange={(event) => updateLineShade(event.target.value)}
                      className="h-12 w-14 cursor-pointer rounded-lg border border-neutral-700 bg-transparent p-1"
                    />
                    <div className="min-w-0 flex-1">
                      <label htmlFor="richtech-line-hex" className="text-xs text-neutral-400">
                        รหัสสีเส้น HEX
                      </label>
                      <input
                        id="richtech-line-hex"
                        type="text"
                        maxLength={7}
                        value={draftLineHex}
                        onChange={(event) => setDraftLineHex(event.target.value)}
                        onBlur={() => {
                          if (validHex(draftLineHex)) updateLineShade(draftLineHex);
                          else setDraftLineHex(selectedLineHex);
                        }}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") event.currentTarget.blur();
                        }}
                        className="mt-1 w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-white outline-none focus:border-orange-500"
                        placeholder="#D8A0A6"
                      />
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-2">
                    <p className="text-[11px] text-neutral-500">
                      ภาพ JPG จะปรับโทนที่ใกล้กับสีเส้นเดิมเท่านั้น
                    </p>
                    <button
                      type="button"
                      onClick={restoreLineShade}
                      className="shrink-0 rounded-lg border border-neutral-700 px-3 py-1.5 text-xs text-neutral-300 hover:bg-neutral-800"
                    >
                      คืนเฉดตั้งต้น
                    </button>
                  </div>
                </div>
              )}

            </div>
            )}

          </aside>

        </div>

      </div>

    </div>

  );

}

// =============================================================
// สนามกีฬา 2 โซน — ใช้ภาพ JPG/PNG ที่จัดไว้แล้วใน public/masks
// เหมาะกับโฟลเดอร์แบบนี้:
// public/masks/sports-dual/บน/1017/1017-01.jpg ... 1017_Artboard 14.jpg
// public/masks/sports-dual/ล่าง/1017/1017-01.jpg ... 1017_Artboard 14.jpg
// ไม่ใช้ masks/canvas จึงรักษาสีและรายละเอียดภาพต้นฉบับทุกพิกเซล
// =============================================================
const SPORTS_DUAL_ROOT = "/masks/sports-dual";

const SPORTS_DUAL_COLORS = SPORTS_COLORS.filter((item) => /^RAL \d{4}$/.test(item.ral));

function sportsDualFiles(zone, code, number) {
  // จากชื่อไฟล์ใน Windows Explorer:
  // 01-07 = 1017-01.jpg, ... ,1017-07.jpg
  // 08-14 = 1017_Artboard 8.jpg, ... ,1017_Artboard 14.jpg
  const prefix = number <= 7
    ? `${code}-${String(number).padStart(2, "0")}`
    : `${code}_Artboard ${number}`;
  return ["jpg", "jpeg", "png", "webp", "JPG", "JPEG", "PNG"].map((extension) =>
    encodeURI(`${SPORTS_DUAL_ROOT}/${zone}/${code}/${prefix}.${extension}`)
  );
}

function SportsDualThumbnail({ zone, code, number, selected, onClick }) {
  const [srcIndex, setSrcIndex] = useState(0);
  const [missing, setMissing] = useState(false);
  const paths = sportsDualFiles(zone, code, number);
  const currentSrc = paths[srcIndex];

  useEffect(() => {
    setSrcIndex(0);
    setMissing(false);
  }, [zone, code, number]);

  const handleError = () => {
    if (srcIndex < paths.length - 1) setSrcIndex((prev) => prev + 1);
    else setMissing(true);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`overflow-hidden rounded-xl border p-1.5 text-left transition ${
        selected
          ? "border-orange-500 bg-orange-500/10"
          : "border-neutral-800 bg-neutral-900 hover:border-neutral-600"
      }`}
    >
      <div className="flex h-[115px] items-center justify-center overflow-hidden rounded-lg bg-black">
        {missing ? (
          <span className="px-2 text-center text-[10px] text-red-300">ไม่พบรูป {String(number).padStart(2, "0")}</span>
        ) : (
          <img
            key={`${zone}/${code}/${number}/${srcIndex}`}
            src={currentSrc}
            loading="lazy"
            alt={`${zone} รหัส ${code} รูปแบบ ${number}`}
            onError={handleError}
            className="h-full w-full object-contain"
          />
        )}
      </div>
      <p className={`pt-2 text-center text-[11px] ${selected ? "text-orange-400" : "text-neutral-400"}`}>
        แบบ {String(number).padStart(2, "0")}
      </p>
    </button>
  );
}

function TwoZoneSportsDesigner() {
  // เลือก 'บน' หรือ 'ล่าง' เพื่อระบุส่วนที่ใช้เป็นสีหลัก แล้วเลือกรหัส RAL
  // จากนั้นเลือกภาพคู่สีสำเร็จรูป 01–14 ที่มีอยู่จริงในโฟลเดอร์นั้น
  const [zone, setZone] = useState("บน");
  const [fixedColor, setFixedColor] = useState(SPORTS_DUAL_COLORS[0]);
  const [variant, setVariant] = useState(8);
  const [currentImage, setCurrentImage] = useState("");
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState("");
  const imageRequestId = useRef(0);
  const code = fixedColor.ral.replace("RAL ", "");

  useEffect(() => {
    const requestId = ++imageRequestId.current;
    const candidates = sportsDualFiles(zone, code, variant);
    let cancelled = false;
    setImageLoading(true);
    setImageError("");

    const tryImage = (index) => {
      if (cancelled || requestId !== imageRequestId.current) return;
      if (index >= candidates.length) {
        setImageLoading(false);
        setImageError(`ไม่พบภาพใน ${zone}/${code} รูปแบบ ${String(variant).padStart(2, "0")} — ตรวจสอบชื่อไฟล์และนามสกุล`);
        return;
      }
      const next = new Image();
      next.onload = () => {
        if (cancelled || requestId !== imageRequestId.current) return;
        setCurrentImage(candidates[index]);
        setImageLoading(false);
        setImageError("");
      };
      next.onerror = () => tryImage(index + 1);
      next.src = candidates[index];
    };
    tryImage(0);
    return () => { cancelled = true; };
  }, [zone, code, variant]);

  const selectZone = (nextZone) => {
    setZone(nextZone);
    setVariant(8);
  };
  const selectColor = (color) => {
    setFixedColor(color);
    setVariant(8);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-[1500px] px-6 py-10">
        <p className="text-xs tracking-[5px] text-orange-500">RICHTECH PAINT</p>
        <h1 className="mt-2 text-4xl font-black">สนามกีฬา</h1>
        <p className="mt-2 text-sm text-neutral-400">
          TWO-ZONE SPORTS FLOOR · ใช้ภาพคู่สีจริงจากโฟลเดอร์ บน / ล่าง
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_365px]">
          <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950">
            <div className="flex items-center justify-between gap-3 border-b border-neutral-800 px-5 py-4">
              <div>
                <h2 className="font-bold">ภาพจำลองสนามกีฬา</h2>
                <p className="mt-1 text-xs text-neutral-500">
                  {`โซน${zone} · ${fixedColor.ral} · คู่สีแบบ ${String(variant).padStart(2, "0")}`}
                </p>
              </div>
              <button
                type="button"
                onClick={() => { setZone("บน"); setFixedColor(SPORTS_DUAL_COLORS[0]); setVariant(8); }}
                className="shrink-0 rounded-full border border-neutral-700 px-4 py-2 text-xs hover:bg-neutral-800"
              >รีเซ็ต</button>
            </div>
            <div className="relative flex min-h-[350px] items-center justify-center bg-black p-3">
              {currentImage ? (
                <img
                  src={currentImage}
                  alt={`สนามกีฬา ${zone} ${fixedColor.ral} รูปแบบ ${variant}`}
                  className="block h-auto max-h-[720px] w-auto max-w-full object-contain"
                />
              ) : (
                <div className="flex h-[420px] items-center justify-center text-sm text-neutral-500">เลือกภาพคู่สีจากด้านขวา</div>
              )}
              {imageLoading && (
                <div className="absolute bottom-4 left-4 rounded-lg bg-black/80 px-3 py-2 text-xs">กำลังโหลดภาพสีที่เลือก...</div>
              )}
              {imageError && (
                <p role="alert" className="absolute bottom-4 left-4 right-4 break-words rounded-lg border border-red-500/50 bg-black/90 p-3 text-sm text-red-300">
                  {imageError}
                </p>
              )}
            </div>
          </div>

          <aside className="rounded-3xl border border-neutral-800 bg-neutral-950 p-5">
            <p className="text-xs tracking-[4px] text-neutral-500">SPORTS FLOOR</p>
            <h2 className="mt-2 text-xl font-bold">เลือกโซนและคู่สี</h2>
            <p className="mt-2 text-xs leading-5 text-neutral-500">
              เริ่มจากเลือกโซนที่ต้องการล็อกสี แล้วเลือกสีหลักและภาพคู่สีจากรายการด้านล่าง
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2">
              {[
                { id: "บน", label: "พื้นด้านบน" },
                { id: "ล่าง", label: "พื้นด้านล่าง" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectZone(item.id)}
                  aria-pressed={zone === item.id}
                  className={`rounded-xl border p-3 text-left text-sm font-semibold transition ${
                    zone === item.id ? "border-orange-500 bg-orange-500/10 text-orange-400" : "border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-600"
                  }`}
                >{item.label}</button>
              ))}
            </div>

            <div className="mt-5 border-t border-neutral-800 pt-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold">สีหลักของโซน{zone}</h3>
                <span className="text-xs text-orange-400">{fixedColor.ral}</span>
              </div>
              <div className="mt-3 grid max-h-[185px] grid-cols-3 gap-2 overflow-y-auto pr-1">
                {SPORTS_DUAL_COLORS.map((color) => (
                  <button
                    key={color.ral}
                    type="button"
                    title={color.name}
                    onClick={() => selectColor(color)}
                    aria-pressed={fixedColor.ral === color.ral}
                    className={`rounded-xl border p-1.5 transition ${
                      fixedColor.ral === color.ral
                        ? "border-orange-500 bg-orange-500/10"
                        : "border-neutral-800 bg-neutral-900 hover:border-neutral-600"
                    }`}
                  >
                    <div className="h-8 w-full rounded-lg border border-neutral-700" style={{ backgroundColor: color.hex }} />
                    <p className="mt-1.5 text-center text-[10px] text-neutral-400">{color.ral}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 border-t border-neutral-800 pt-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold">เลือกรูปคู่สีอีกโซน</h3>
                <span className="text-xs text-neutral-400">14 แบบ</span>
              </div>
              <p className="mt-1 text-xs text-neutral-500">แสดงตัวอย่างภาพจริงตามชื่อไฟล์ในโฟลเดอร์</p>
              <div className="mt-3 grid max-h-[410px] grid-cols-3 gap-2 overflow-y-auto pr-1">
                {Array.from({ length: 14 }, (_, index) => index + 1).map((number) => (
                  <SportsDualThumbnail
                    key={`${zone}/${code}/${number}`}
                    zone={zone}
                    code={code}
                    number={number}
                    selected={variant === number}
                    onClick={() => setVariant(number)}
                  />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

// /product-design/parking = สนามกีฬา 2 โซน (เก็บ URL เดิมไว้ให้ลิงก์ไม่เสีย)
// /product-design/sports = พื้นลู่วิ่ง (ใช้ภาพและชุดสีจาก /masks/sports เดิม)
// หน้า factory / outdoor ไม่เปลี่ยนแปลง; coldroom ใช้ PNG ใน COLD ROOM
export default function ProductDesigner() {
  const { area = "factory" } = useParams();
  if (area === "parking") return <TwoZoneSportsDesigner />;
  return <StandardProductDesigner />;
}
