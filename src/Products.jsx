import { useState, useRef } from "react";

const palettes = [
  {
    name: "Beige",
    code: "RAL-1001",
    hex: "#C9AE73",
  },

  {
    name: "Oyster White",
    code: "RAL-1013",
    hex: "#E8E1CF",
  },

  {
    name: "Ivory",
    code: "RAL-1014",
    hex: "#E6D28C",
  },

  {
    name: "Light Ivory",
    code: "RAL-1015",
    hex: "#E9DFC1",
  },

  {
    name: "Melon Yellow",
    code: "RAL-1028",
    hex: "#D88A00",
  },

  {
    name: "Broom Yellow",
    code: "RAL-1032",
    hex: "#D4A000",
  },

  {
    name: "Pastel Yellow",
    code: "RAL-1034",
    hex: "#E6A313",
  },

  {
    name: "Yellow Orange",
    code: "RAL-2000",
    hex: "#F18700",
  },

  {
    name: "Pure Orange",
    code: "RAL-2004",
    hex: "#E54700",
  },

  {
    name: "Bright Red Orange",
    code: "RAL-2008",
    hex: "#F06A00",
  },

  {
    name: "Flame Red",
    code: "RAL-3000",
    hex: "#D40000",
  },

  {
    name: "Carmine Red",
    code: "RAL-3002",
    hex: "#C40018",
  },

  {
    name: "Ruby Red",
    code: "RAL-3003",
    hex: "#980000",
  },

  {
    name: "Light Pink",
    code: "RAL-3015",
    hex: "#E7B3BC",
  },

  {
    name: "Rose",
    code: "RAL-3017",
    hex: "#D95B6D",
  },

  {
    name: "Traffic Red",
    code: "RAL-3020",
    hex: "#E00000",
  },

  {
    name: "Signal Blue",
    code: "RAL-5005",
    hex: "#0047B3",
  },

  {
    name: "Brilliant Blue",
    code: "RAL-5007",
    hex: "#1C66B3",
  },

  {
    name: "Gentian Blue",
    code: "RAL-5010",
    hex: "#003DA5",
  },

  {
    name: "Light Blue",
    code: "RAL-5012",
    hex: "#1A8FE3",
  },

  {
    name: "Sky Blue",
    code: "RAL-5015",
    hex: "#0076D6",
  },

  {
    name: "Traffic Blue",
    code: "RAL-5017",
    hex: "#0052CC",
  },

  {
    name: "Emerald Green",
    code: "RAL-6001",
    hex: "#008A1E",
  },

  {
    name: "Leaf Green",
    code: "RAL-6002",
    hex: "#007A12",
  },

  {
    name: "Grass Green",
    code: "RAL-6010",
    hex: "#3C9600",
  },

  {
    name: "Yellow Green",
    code: "RAL-6018",
    hex: "#56C000",
  },

  {
    name: "Pastel Green",
    code: "RAL-6019",
    hex: "#B8D7A3",
  },

  {
    name: "Traffic Green",
    code: "RAL-6024",
    hex: "#00A651",
  },

  {
    name: "Opal Green",
    code: "RAL-6026",
    hex: "#007F7F",
  },

  {
    name: "Mint Green",
    code: "RAL-6029",
    hex: "#008C3A",
  },

  {
    name: "Signal Green",
    code: "RAL-6032",
    hex: "#00994D",
  },

  {
    name: "Pure Green",
    code: "RAL-6037",
    hex: "#00A000",
  },

  {
    name: "Silver Grey",
    code: "RAL-7001",
    hex: "#C8CCD1",
  },

  {
    name: "Light Grey",
    code: "RAL-7035",
    hex: "#D6D6D0",
  },

  {
    name: "Agate Grey",
    code: "RAL-7038",
    hex: "#B8B8B0",
  },

  {
    name: "Window Grey",
    code: "RAL-7040",
    hex: "#BFC2C7",
  },

  {
    name: "Traffic Grey A",
    code: "RAL-7042",
    hex: "#8F9499",
  },

  {
    name: "Telegrey 1",
    code: "RAL-7045",
    hex: "#A8ADB4",
  },

  {
    name: "Telegrey 4",
    code: "RAL-7047",
    hex: "#D0D0D0",
  },

  {
    name: "Pure White",
    code: "RAL-9010",
    hex: "#F4F4EF",
  },

  {
    name: "Cleanroom White",
    code: "RAL-9016",
    hex: "#F1F0E8",
  },

  {
    name: "Traffic Black",
    code: "RAL-9017",
    hex: "#111111",
  },

  {
    name: "Signal White",
    code: "RAL-9003",
    hex: "#F7F7F2",
  },

  {
    name: "Papyrus White",
    code: "RAL-9018",
    hex: "#ECECE7",
  },
];

/* ================= DATA ================= */
const categories = [
  {
    id: 1,
    name: "สีพื้นอุตสาหกรรม",

    items: [
      {
        title: "สีทับหน้าอีพ็อกซี่ปรับระดับได้เอง",

        products: [
          {
            code: "RTP-S201",

            name: "สีอีพ็อกซี่ปรับระดับด้วยตัวเอง ชนิดใส",
  colors: [
    "RAL-1001",
  "RAL-1013",
  "RAL-1014",
  "RAL-1015",
  "RAL-1028",
  "RAL-1032",
  "RAL-1034",
  "RAL-2000",
  "RAL-2004",
  "RAL-2008",
  "RAL-3000",
  "RAL-3002",
  "RAL-3003",
  "RAL-3015",
  "RAL-3017",
  "RAL-3020",
  "RAL-5005",
  "RAL-5007",
  "RAL-5010",
  "RAL-5012",
  "RAL-5015",
  "RAL-5017",
  "RAL-6001",
  "RAL-6002",
  "RAL-6010",
  "RAL-6018",
  "RAL-6019",
  "RAL-6024",
  "RAL-6026",
  "RAL-6029",
  "RAL-6032",
  "RAL-6037",
  "RAL-7001",
  "RAL-7035",
  "RAL-7038",
  "RAL-7040",
  "RAL-7042",
  "RAL-7045",
  "RAL-7047",
  "RAL-9010",
  "RAL-9016",
  "RAL-9017",
  "RAL-9003",
  "RAL-9018"
  ],

            description:
              "RTP-S201 เป็นสีทับหน้าอีพ็อกซี่ 2 ส่วน ไม่มีส่วนผสมของตัวทำละลาย สามารถปรับระดับด้วยตัวเอง ใช้ในงานระบบพื้นอีพ็อกซี่ที่ต้องการใส เรียบ และไร้รอยต่อ",

            usage: [
              "พิพิธภัณฑ์",
              "โรงแรม",
            ],

            coverage: "1.1 กก./ตร.ม. @ 1 มม.",

            package: [
              "30 กก./ชุด (ส่วน A = 20 กก / ส่วน B = 10 กก)",
              "6 กก./ชุด (ส่วน A = 4 กก / ส่วน B = 2 กก)",
            ],
          },

          {
            code: "RTP-S300",

            name: "สีอีพ็อกซี่ปรับระดับด้วยตัวเอง อัตราส่วน 3 ต่อ 1",

            description:
              "RTP-S300 เป็นสีทับหน้าอีพ็อกซี่ 2 ส่วน ไม่มีส่วนผสมของตัวทำละลาย สามารถปรับระดับด้วยตัวเอง ใช้ในงานระบบพื้นอีพ็อกซี่ที่ต้องการความเงา เรียบ และไร้รอยต่อ",

            usage: [
              "พื้นโรงงาน",
              "ห้องปฏิบัติการ",
              "โชว์รูมรถ",
              "หอประชุม",
              "ลานจอดรถ",
              "พิพิธภัณฑ์",
              "โรงแรม",
            ],

            coverage: "1.28 กก./ตร.ม. @ 1 มม.",

            package: [
              "24 กก./ชุด (ส่วน A = 18 กก / ส่วน B = 6 กก)",
              "4 กก./ชุด (ส่วน A = 3 กก / ส่วน B = 1 กก)",
            ],
          },

          {
            code: "RTP-S400",

            name: "สีอีพ็อกซี่ปรับระดับด้วยตัวเอง อัตราส่วน 4 ต่อ 1",
             colors: [
    "RAL-1001",
  "RAL-1013",
  "RAL-1014",
  "RAL-1015",
  "RAL-1028",
  "RAL-1032",
  "RAL-1034",
  "RAL-2000",
  "RAL-2004",
  "RAL-2008",
  "RAL-3000",
  "RAL-3002",
  "RAL-3003",
  "RAL-3015",
  "RAL-3017",
  "RAL-3020",
  "RAL-5005",
  "RAL-5007",
  "RAL-5010",
  "RAL-5012",
  "RAL-5015",
  "RAL-5017",
  "RAL-6001",
  "RAL-6002",
  "RAL-6010",
  "RAL-6018",
  "RAL-6019",
  "RAL-6024",
  "RAL-6026",
  "RAL-6029",
  "RAL-6032",
  "RAL-6037",
  "RAL-7001",
  "RAL-7035",
  "RAL-7038",
  "RAL-7040",
  "RAL-7042",
  "RAL-7045",
  "RAL-7047",
  "RAL-9010",
  "RAL-9016",
  "RAL-9017",
  "RAL-9003",
  "RAL-9018"
  ],


            description:
              "RTP-S400 เป็นสีทับหน้าอีพ็อกซี่ 2 ส่วน ไม่มีส่วนผสมของตัวทำละลาย สามารถปรับระดับด้วยตัวเอง ใช้ในงานระบบพื้นอีพ็อกซี่ที่ต้องการความเงา เรียบ และไร้รอยต่อ",

            usage: [
              "พื้นโรงงาน",
              "ห้องปฏิบัติการ",
              "โชว์รูมรถ",
              "หอประชุม",
              "ลานจอดรถ",
              "พิพิธภัณฑ์",
              "โรงแรม",
            ],

            coverage: "1.28 กก./ตร.ม. @ 1 มม.",

            package: [
              "25 กก./ชุด (ส่วน A = 20 กก / ส่วน B = 5 กก)",
              "4 กก./ชุด (ส่วน A = 3.2 กก / ส่วน B = 0.8 กก)",
            ],
          },

          {
            code: "RTP-S330",

            name: "สีอีพ็อกซี่ปรับระดับด้วยตัวเอง ชนิดทนสารเคมีสูง",
 colors: [
    "RAL-1001",
  "RAL-1013",
  "RAL-1014",
  "RAL-1015",
  "RAL-1028",
  "RAL-1032",
  "RAL-1034",
  "RAL-2000",
  "RAL-2004",
  "RAL-2008",
  "RAL-3000",
  "RAL-3002",
  "RAL-3003",
  "RAL-3015",
  "RAL-3017",
  "RAL-3020",
  "RAL-5005",
  "RAL-5007",
  "RAL-5010",
  "RAL-5012",
  "RAL-5015",
  "RAL-5017",
  "RAL-6001",
  "RAL-6002",
  "RAL-6010",
  "RAL-6018",
  "RAL-6019",
  "RAL-6024",
  "RAL-6026",
  "RAL-6029",
  "RAL-6032",
  "RAL-6037",
  "RAL-7001",
  "RAL-7035",
  "RAL-7038",
  "RAL-7040",
  "RAL-7042",
  "RAL-7045",
  "RAL-7047",
  "RAL-9010",
  "RAL-9016",
  "RAL-9017",
  "RAL-9003",
  "RAL-9018"
  ],

            description:
              "RTP-S330 เป็นสีทับหน้าอีพ็อกซี่ 2 ส่วน ไม่มีส่วนผสมของตัวทำละลาย สามารถปรับระดับด้วยตัวเอง ใช้ในงานระบบพื้นอีพ็อกซี่ที่ต้องการทนทานต่อสารเคมีได้สูง",

            usage: [
              "พื้นโรงงาน",
              "ห้องปฏิบัติการเคมี",
              "โกดัง",
            ],

            coverage: "1.28 กก./ตร.ม. @ 1 มม.",

            package: [
              "24 กก./ชุด (ส่วน A = 18 กก / ส่วน B = 6 กก)",
              "4 กก./ชุด (ส่วน A = 3 กก / ส่วน B = 1 กก)",
            ],
          },

          {
            code: "RTP-S440",

            name: "สีอีพ็อกซี่ปรับระดับด้วยตัวเอง ชนิดถ่ายเทประจุไฟฟ้า",
 colors: [
       "RAL-1001",
  "RAL-1013",
  "RAL-1014",
  "RAL-1015",
  "RAL-1028",
  "RAL-1032",
  "RAL-1034",
  "RAL-2000",
  "RAL-2004",
  "RAL-2008",
  "RAL-3000",
  "RAL-3002",
  "RAL-3003",
  "RAL-3015",
  "RAL-3017",
  "RAL-3020",
  "RAL-5005",
  "RAL-5007",
  "RAL-5010",
  "RAL-5012",
  "RAL-5015",
  "RAL-5017",
  "RAL-6001",
  "RAL-6002",
  "RAL-6010",
  "RAL-6018",
  "RAL-6019",
  "RAL-6024",
  "RAL-6026",
  "RAL-6029",
  "RAL-6032",
  "RAL-6037",
  "RAL-7001",
  "RAL-7035",
  "RAL-7038",
  "RAL-7040",
  "RAL-7042",
  "RAL-7045",
  "RAL-7047",
  "RAL-9010",
  "RAL-9016",
  "RAL-9017",
  "RAL-9003",
  "RAL-9018"
  ],

            description:
              "RTP-S440 เป็นสีทับหน้าอีพ็อกซี่ 2 ส่วน ไม่มีส่วนผสมของตัวทำละลาย สามารถปรับระดับด้วยตัวเอง ใช้ในงานระบบพื้นอีพ็อกซี่ที่ต้องการถ่ายเทประจุไฟฟ้า เพื่อป้องกันการเกิดไฟฟ้าสถิต",

            usage: [
              "โรงงานอิเล็กทรอนิกส์",
              "พื้นที่ป้องกันไฟฟ้าสถิต",
            ],

            coverage: "1.28 กก./ตร.ม. @ 1 มม.",

            package: [
              "25 กก./ชุด (ส่วน A = 20 กก / ส่วน B = 5 กก)",
              "4 กก./ชุด (ส่วน A = 3.2 กก / ส่วน B = 0.8 กก)",
            ],
          },

          {
            code: "RTP-S501",

            name: "สีอีพ็อกซี่พุตตี้",
 colors: [
     "RAL-1001",
  "RAL-1013",
  "RAL-1014",
  "RAL-1015",
  "RAL-1028",
  "RAL-1032",
  "RAL-1034",
  "RAL-2000",
  "RAL-2004",
  "RAL-2008",
  "RAL-3000",
  "RAL-3002",
  "RAL-3003",
  "RAL-3015",
  "RAL-3017",
  "RAL-3020",
  "RAL-5005",
  "RAL-5007",
  "RAL-5010",
  "RAL-5012",
  "RAL-5015",
  "RAL-5017",
  "RAL-6001",
  "RAL-6002",
  "RAL-6010",
  "RAL-6018",
  "RAL-6019",
  "RAL-6024",
  "RAL-6026",
  "RAL-6029",
  "RAL-6032",
  "RAL-6037",
  "RAL-7001",
  "RAL-7035",
  "RAL-7038",
  "RAL-7040",
  "RAL-7042",
  "RAL-7045",
  "RAL-7047",
  "RAL-9010",
  "RAL-9016",
  "RAL-9017",
  "RAL-9003",
  "RAL-9018"
  ],

            description:
              "RTP-S501 เป็นสีชั้นกลางอีพ็อกซี่ 2 ส่วน สามารถผสมกับฟูมซิลิกา เพื่อปกปิดรูพรุนของพื้น",

            usage: [
              "ปกปิดรูพรุนของพื้น",
              "ป้องกันฟองอากาศก่อนลงสีทับหน้า",
            ],

            coverage: "ขึ้นอยู่กับการใช้งาน",

            package: [
              "27 กก./ชุด (ส่วน A = 22.5 กก / ส่วน B = 4.5 กก)",
            ],
          },
        ],
      },

     {
  title: "สีเคลือบผิวอีพ็อกซี่",

  products: [
    {
      code: "RTP-R300",

      name: "สีเคลือบผิวอีพ็อกซี่ อัตราส่วน 3 ต่อ 1",
 colors: [
     "RAL-1001",
  "RAL-1013",
  "RAL-1014",
  "RAL-1015",
  "RAL-1028",
  "RAL-1032",
  "RAL-1034",
  "RAL-2000",
  "RAL-2004",
  "RAL-2008",
  "RAL-3000",
  "RAL-3002",
  "RAL-3003",
  "RAL-3015",
  "RAL-3017",
  "RAL-3020",
  "RAL-5005",
  "RAL-5007",
  "RAL-5010",
  "RAL-5012",
  "RAL-5015",
  "RAL-5017",
  "RAL-6001",
  "RAL-6002",
  "RAL-6010",
  "RAL-6018",
  "RAL-6019",
  "RAL-6024",
  "RAL-6026",
  "RAL-6029",
  "RAL-6032",
  "RAL-6037",
  "RAL-7001",
  "RAL-7035",
  "RAL-7038",
  "RAL-7040",
  "RAL-7042",
  "RAL-7045",
  "RAL-7047",
  "RAL-9010",
  "RAL-9016",
  "RAL-9017",
  "RAL-9003",
  "RAL-9018"
  ],

    

      description:
        "RTP-R300 เป็นสีทับหน้าอีพ็อกซี่ฟิล์มบาง 2 ส่วน ชนิดไม่มีตัวทำละลาย ใช้สำหรับงานพื้นคอนกรีตที่ใช้งานหนัก มีการยึดเกาะได้ดี และทนทานต่อสารเคมี",

      usage: [
        "โรงงาน",
        "โกดัง",
        "โรงเรียน",
      ],

      coverage: "0.43 – 0.72 กก./ตร.ม @300 – 500 ไมครอน",

      package: [
        "24 กก./ชุด (ส่วน A = 18 กก. / ส่วน B = 6 กก.)",
        "4 กก./ชุด (ส่วน A = 3 กก. / ส่วน B = 1 กก.)",
      ],
    },

    {
      code: "RTP-R400",

      name: "สีเคลือบผิวอีพ็อกซี่ อัตราส่วน 4 ต่อ 1",
 colors: [
    "RPL-1001",
    "RAL-1001",
  "RAL-1013",
  "RAL-1014",
  "RAL-1015",
  "RAL-1028",
  "RAL-1032",
  "RAL-1034",
  "RAL-2000",
  "RAL-2004",
  "RAL-2008",
  "RAL-3000",
  "RAL-3002",
  "RAL-3003",
  "RAL-3015",
  "RAL-3017",
  "RAL-3020",
  "RAL-5005",
  "RAL-5007",
  "RAL-5010",
  "RAL-5012",
  "RAL-5015",
  "RAL-5017",
  "RAL-6001",
  "RAL-6002",
  "RAL-6010",
  "RAL-6018",
  "RAL-6019",
  "RAL-6024",
  "RAL-6026",
  "RAL-6029",
  "RAL-6032",
  "RAL-6037",
  "RAL-7001",
  "RAL-7035",
  "RAL-7038",
  "RAL-7040",
  "RAL-7042",
  "RAL-7045",
  "RAL-7047",
  "RAL-9010",
  "RAL-9016",
  "RAL-9017",
  "RAL-9003",
  "RAL-9018"
  ],


      description:
        "RTP-R400 เป็นสีทับหน้าอีพ็อกซี่ 2 ส่วน ไม่มีส่วนผสมของตัวทำละลาย สามารถปรับระดับด้วยตัวเอง ใช้ในงานระบบพื้นอีพ็อกซี่ที่ต้องการใส เรียบ และไร้รอยต่อ",

      usage: [
        "โรงงาน",
        "โกดัง",
        "โรงเรียน",
      ],

      coverage: "0.1 – 0.14 กก./ตร.ม @50 – 75 ไมครอน",

      package: [
        "30 กก./ชุด (ส่วน A = 20 กก / ส่วน B = 10 กก)",
        "6 กก./ชุด (ส่วน A = 4 กก / ส่วน B = 2 กก)",
      ],
    },

    {
      code: "RTP-R402",

      name: "สีเคลือบผิวอีพ็อกซี่ ชนิดทนสารเคมีสูง",
 colors: [
     "RAL-1001",
  "RAL-1013",
  "RAL-1014",
  "RAL-1015",
  "RAL-1028",
  "RAL-1032",
  "RAL-1034",
  "RAL-2000",
  "RAL-2004",
  "RAL-2008",
  "RAL-3000",
  "RAL-3002",
  "RAL-3003",
  "RAL-3015",
  "RAL-3017",
  "RAL-3020",
  "RAL-5005",
  "RAL-5007",
  "RAL-5010",
  "RAL-5012",
  "RAL-5015",
  "RAL-5017",
  "RAL-6001",
  "RAL-6002",
  "RAL-6010",
  "RAL-6018",
  "RAL-6019",
  "RAL-6024",
  "RAL-6026",
  "RAL-6029",
  "RAL-6032",
  "RAL-6037",
  "RAL-7001",
  "RAL-7035",
  "RAL-7038",
  "RAL-7040",
  "RAL-7042",
  "RAL-7045",
  "RAL-7047",
  "RAL-9010",
  "RAL-9016",
  "RAL-9017",
  "RAL-9003",
  "RAL-9018"
  ],

     

      description:
        "RTP-R402 เป็นสีทับหน้าอีพ็อกซี่ฟิล์มบาง 2 ส่วน ชนิดไม่มีตัวทำละลาย ใช้สำหรับงานพื้นคอนกรีตที่ต้องการความทนทานต่อสารเคมีได้สูง",

      usage: [
        "ห้องแลป",
        "โกดังสารเคมี",
      ],

      coverage: "0.375 กก./ตร.ม @250 ไมครอน",

      package: [
        "24 กก./ชุด (ส่วน A = 18 กก / ส่วน B = 6 กก)",
      ],
    },
  ],
},

    {
  title: "สีเคลือบผิวโพลียูรีเทน",

  products: [
    {
      code: "RTP-R500",

      name: "สีโพลียูรีเทน ชนิดความเงาสูง สำหรับงานภายนอก",

   
 colors: [
     "RAL-1001",
  "RAL-1013",
  "RAL-1014",
  "RAL-1015",
  "RAL-1028",
  "RAL-1032",
  "RAL-1034",
  "RAL-2000",
  "RAL-2004",
  "RAL-2008",
  "RAL-3000",
  "RAL-3002",
  "RAL-3003",
  "RAL-3015",
  "RAL-3017",
  "RAL-3020",
  "RAL-5005",
  "RAL-5007",
  "RAL-5010",
  "RAL-5012",
  "RAL-5015",
  "RAL-5017",
  "RAL-6001",
  "RAL-6002",
  "RAL-6010",
  "RAL-6018",
  "RAL-6019",
  "RAL-6024",
  "RAL-6026",
  "RAL-6029",
  "RAL-6032",
  "RAL-6037",
  "RAL-7001",
  "RAL-7035",
  "RAL-7038",
  "RAL-7040",
  "RAL-7042",
  "RAL-7045",
  "RAL-7047",
  "RAL-9010",
  "RAL-9016",
  "RAL-9017",
  "RAL-9003",
  "RAL-9018"
  ],

      description:
        "RTP-R500 เป็นสีทับหน้าโพลียูรีเทน 2 ส่วน มีตัวทำละลาย ชนิดความเงาสูง ใช้สำหรับงานพื้นคอนกรีตที่ต้องการพื้นที่เงา สามารถใช้งานภายนอกได้ มีการยึดเกาะได้ดี และทนทานต่อสารเคมี",

      usage: [
        "โรงงาน",
        "พิพิธภัณฑ์",
        "โรงแรม",
      ],

      coverage: "0.11 – 0.17 กก./ตร.ม @50 – 75 ไมครอน",

      package: [
        "20 กก./ชุด (ส่วน A = 16 กก / ส่วน B = 4 กก)",
        "4 กก./ชุด (ส่วน A = 3.2 กก / ส่วน B = 0.8 กก)",
      ],
    },

    {
      code: "RTP-R501",

      name: "สีโพลียูรีเทน ชนิดด้าน สำหรับงานภายนอก",

      
 colors: [
     "RAL-1001",
  "RAL-1013",
  "RAL-1014",
  "RAL-1015",
  "RAL-1028",
  "RAL-1032",
  "RAL-1034",
  "RAL-2000",
  "RAL-2004",
  "RAL-2008",
  "RAL-3000",
  "RAL-3002",
  "RAL-3003",
  "RAL-3015",
  "RAL-3017",
  "RAL-3020",
  "RAL-5005",
  "RAL-5007",
  "RAL-5010",
  "RAL-5012",
  "RAL-5015",
  "RAL-5017",
  "RAL-6001",
  "RAL-6002",
  "RAL-6010",
  "RAL-6018",
  "RAL-6019",
  "RAL-6024",
  "RAL-6026",
  "RAL-6029",
  "RAL-6032",
  "RAL-6037",
  "RAL-7001",
  "RAL-7035",
  "RAL-7038",
  "RAL-7040",
  "RAL-7042",
  "RAL-7045",
  "RAL-7047",
  "RAL-9010",
  "RAL-9016",
  "RAL-9017",
  "RAL-9003",
  "RAL-9018"
  ],

      description:
        "RTP-R501 เป็นสีทับหน้าโพลียูรีเทน 2 ส่วน มีตัวทำละลาย ชนิดด้าน ใช้สำหรับงานพื้นคอนกรีตที่ต้องการพื้นที่ด้าน สามารถใช้งานภายนอกได้ มีการยึดเกาะได้ดี และทนทานต่อสารเคมี",

      usage: [
        "โรงงาน",
        "พิพิธภัณฑ์",
        "โรงแรม",
      ],

      coverage: "0.11 – 0.17 กก./ตร.ม @50 – 75 ไมครอน",

      package: [
        "20 กก./ชุด (ส่วน A = 16 กก / ส่วน B = 4 กก)",
        "4 กก./ชุด (ส่วน A = 3.2 กก / ส่วน B = 0.8 กก)",
      ],
    },

    {
      code: "RTP-R502",

      name: "สีโพลียูรีเทน สำหรับงานภายใน",

     
 colors: [
    "RPL-1001",
    "RAL-1001",
  "RAL-1013",
  "RAL-1014",
  "RAL-1015",
  "RAL-1028",
  "RAL-1032",
  "RAL-1034",
  "RAL-2000",
  "RAL-2004",
  "RAL-2008",
  "RAL-3000",
  "RAL-3002",
  "RAL-3003",
  "RAL-3015",
  "RAL-3017",
  "RAL-3020",
  "RAL-5005",
  "RAL-5007",
  "RAL-5010",
  "RAL-5012",
  "RAL-5015",
  "RAL-5017",
  "RAL-6001",
  "RAL-6002",
  "RAL-6010",
  "RAL-6018",
  "RAL-6019",
  "RAL-6024",
  "RAL-6026",
  "RAL-6029",
  "RAL-6032",
  "RAL-6037",
  "RAL-7001",
  "RAL-7035",
  "RAL-7038",
  "RAL-7040",
  "RAL-7042",
  "RAL-7045",
  "RAL-7047",
  "RAL-9010",
  "RAL-9016",
  "RAL-9017",
  "RAL-9003",
  "RAL-9018"
  ],

      description:
        "RTP-R502 เป็นสีทับหน้าโพลียูรีเทน 2 ส่วน มีตัวทำละลาย ใช้สำหรับงานพื้นคอนกรีตที่ต้องการพื้นที่เงา สามารถใช้งานภายใน มีการยึดเกาะได้ดี และทนทานต่อสารเคมี",

      usage: [
        "โรงงาน",
        "พิพิธภัณฑ์",
        "โรงแรม",
      ],

      coverage: "0.11 – 0.17 กก./ตร.ม @50 – 75 ไมครอน",

      package: [
        "20 กก./ชุด (ส่วน A = 16 กก / ส่วน B = 4 กก)",
        "4 กก./ชุด (ส่วน A = 3.2 กก / ส่วน B = 0.8 กก)",
      ],
    },
  ],
},

     {
  title: "สีเคลือบผิวอะครีลิค",

  products: [
    {
      code: "RTP-R100",

      name: "สีอะครีลิค ชนิดกึ่งเงา",

      description:
        "RTP-R100 เป็นสีทับหน้าอะครีลิค ชนิดกึ่งเงา เหมาะสำหรับงานพื้นคอนกรีตและฟลอร์ฮาร์ดเดนเนอร์ที่มีความชื้นไม่เกิน 20%",

      usage: [
        "พื้นคอนกรีต",
        "พื้นฟลอร์ฮาร์ดเดนเนอร์",
        "พื้นโรงงาน",
      ],

      coverage: "0.1 – 0.16 กก./ตร.ม @50 – 75 ไมครอน",

      package: [
        "18 กก.",
      ],
    },

    {
      code: "RTP-R101",

      name: "สีอะครีลิค ชนิดเงา",

      description:
        "RTP-R101 เป็นสีทับหน้าอะครีลิค ชนิดเงา เหมาะสำหรับงานพื้นคอนกรีตและฟลอร์ฮาร์ดเดนเนอร์ที่มีความชื้นไม่เกิน 20%",

      usage: [
        "พื้นคอนกรีต",
        "พื้นฟลอร์ฮาร์ดเดนเนอร์",
        "พื้นโรงงาน",
      ],

      coverage: "0.1 – 0.16 กก./ตร.ม @50 – 75 ไมครอน",

      package: [
        "18 กก.",
      ],
    },
  ],
},

      {
  title: "รองพื้นอีพ็อกซี่",

  products: [
    {
      code: "RTP-P100",

      name: "รองพื้นอีพ็อกซี่ 2 ส่วน",

      description:
        "RTP-P100 เป็นรองพื้นอีพ็อกซี่ 2 ส่วน ชนิดมีตัวทำละลาย ใช้สำหรับรองพื้นคอนกรีต เพื่อปิดรูพรุนและเพิ่มการยึดเกาะระหว่างคอนกรีตกับสีทับหน้า",

      usage: [
        "พื้นคอนกรีต",
        "พื้นฟลอร์ฮาร์ดเดนเนอร์",
        "พื้นโรงงาน",
      ],

      coverage: "0.1 – 0.16 กก./ตร.ม @50 – 75 ไมครอน",

      package: [
        "18 กก.",
      ],
    },

    {
      code: "RTP-P700",

      name: "รองพื้นอีพ็อกซี่ 2 ส่วน สำหรับป้องกันไฟฟ้าสถิต",
  

      description:
        "RTP-P700 เป็นรองพื้นอีพ็อกซี่ 2 ส่วน ชนิดมีตัวทำละลาย ใช้สำหรับรองพื้นคอนกรีต เพื่อปิดรูพรุน เพิ่มความสามารถในการถ่ายเทประจุไฟฟ้า และเพิ่มการยึดเกาะระหว่างคอนกรีตกับสีทับหน้า",

      usage: [
        "รองพื้นคอนกรีต",
        "พื้นป้องกันไฟฟ้าสถิต",
      ],

      coverage: "0.10 – 0.20 กก./ตร.ม. @50 – 100 ไมครอน",

      package: [
        "18 กก./ชุด (ส่วน A = 15 กก / ส่วน B = 3 กก)",
        "3.6 กก./ชุด (ส่วน A = 3 กก / ส่วน B = 0.6 กก)",
      ],
    },
  ],
},

     {
  title: "อีพ็อกซีมอต้าร์",

  products: [
    {
      code: "RTP-M101",

      name: "อีพ็อกซี่มอร์ต้า",



      description:
        "RTP-M101 เป็นมอร์ต้าอีพ็อกซี่ 2 ส่วน สามารถผสมกับทรายได้ ใช้เป็นชั้นกลางสำหรับปรับระดับพื้นผิวคอนกรีตให้สม่ำเสมอ",

      usage: [
        "รองพื้นคอนกรีต",
        "ปรับระดับพื้นผิวคอนกรีต",
      ],

      coverage: "ขึ้นกับการใช้งาน",

      package: [
        "30 กก./ชุด (ส่วน A = 20 กก / ส่วน B = 10 กก)",
        "15 กก./ชุด (ส่วน A = 10 กก / ส่วน B = 5 กก)",
        "6 กก./ชุด (ส่วน A = 4 กก / ส่วน B = 2 กก)",
      ],
    },
  ],
},

      {
  title: "อีพ็อกซี่บล็อกความชื้น",

  products: [
    {
      code: "RTP-C100",

      name: "อีพ็อกซี่ซีเมนต์สำหรับป้องกันความชื้น",

  

      description:
        "RTP-C100 เป็นระบบอีพ็อกซี่ 3 ส่วน ผสมซีเมนต์ เหมาะสำหรับใช้เป็นสีชั้นกลาง เพื่อป้องกันความชื้นจากใต้พื้นคอนกรีต และมีความทนทานต่อสภาพกรดและด่างได้ดี",

      usage: [
        "พื้นที่มีความชื้น",
        "ชั้นกลางระบบพื้นอีพ็อกซี่",
        "พื้นคอนกรีต",
      ],

      coverage: "3.0 กก./ตร.ม. @ 2 มม., น้ำ 5 – 6 ลิตร",

      package: [
        "24.5 กก./ชุด (ส่วน A = 3 กก / ส่วน B = 3 กก / ส่วน C = 20 กก)",
      ],
    },
  ],
},
    ],
  },

  {
    id: 2,
    name: "สีโครงสร้างเหล็ก",

    items: [
     {
  title: "สีรองพื้นกันสนิม",

  products: [
    {
      code: "RTP-P500",

      name: "สีรองพื้นกันสนิมอีพ็อกซี่ ด้วยผงซิงค์ฟอตเฟต",

      colors: [
    "RPL-1001",
    "RAL-1001",
  "RAL-1013",
  "RAL-1014",
  "RAL-1015",
  "RAL-1028",
  "RAL-1032",
  "RAL-1034",
  ],
    

      description:
        "RTP-P500 เป็นสีรองพื้นกันสนิมอีพ็อกซี่ 2 ส่วน ที่มีผงสีซิงค์ฟอตเฟตและอลูมิเนียม ใช้สำหรับงานเหล็ก เพื่อป้องกันการเกิดสนิม",

      usage: [
        "งานเหล็ก",
        "ป้องกันสนิม",
        "โครงสร้างเหล็ก",
      ],

      coverage: "0.09 – 0.13 กก./ตร.ม. @50 -75 ไมครอน",

      package: [
        "24 กก./ชุด (ส่วน A = 20 กก / ส่วน B = 4 กก)",
        "4.8 กก./ชุด (ส่วน A = 4 กก / ส่วน B = 0.8 กก)",
      ],
    },

    {
      code: "RTP-P600",

      name: "สีรองพื้นแดงกันสนิม ด้วยผงอ๊อกไซด์",

   

      description:
        "RTP-P600 เป็นสีรองพื้นกันสนิมอัลขิดเรซิ่น ที่มีผงสีอ๊อกไซด์ ใช้สำหรับงานเหล็ก เพื่อป้องกันการเกิดสนิม",

      usage: [
        "งานเหล็ก",
        "ป้องกันสนิม",
        "โครงสร้างเหล็ก",
      ],

      coverage: "0.06 – 0.10 กก./ตร.ม. @30 -50 ไมครอน",

      package: [
        "24 กก.",
        "4.5 กก.",
      ],
    },

    {
      code: "RTP-P999",

      name: "สีรองพื้นกันสนิมอีพ็อกซี่ ด้วยผงอลูมิเนียม",

     

      description:
        "RTP-P999 เป็นสีรองพื้นกันสนิมอีพ็อกซี่ 2 ส่วน ที่มีซิงค์ฟอตเฟตและอลูมิเนียม ใช้เพื่อป้องกันการเกิดสนิม",

      usage: [
        "งานเหล็ก",
        "ป้องกันสนิม",
        "โครงสร้างเหล็ก",
      ],

      coverage: "0.09 – 0.14 กก./ตร.ม. @50 -75 ไมครอน",

      package: [
        "27.5 กก./ชุด (ส่วน A = 25 กก / ส่วน B = 2.5 กก)",
        "5.5 กก./ชุด (ส่วน A = 5 กก / ส่วน B = 0.5 กก)",
      ],
    },
  ],
},

     {
  title: "สีอัลคิด",

  products: [
    {
      code: "RTP-E100",

      name: "สีเคลือบผิวแห้งช้า",



      description:
        "RTP-E100 เป็นสีทับหน้าสำหรับงานเหล็ก ผลิตจากอัลคิดเรซิ่นที่มีส่วนผสมของผงสี มีสมบัติการแห้งตัวเร็ว ทนทานต่อสภาวะอากาศได้ดี ใช้งานง่าย และปราศจากสารปรอทและตะกั่ว จึงปลอดภัยต่อผู้ใช้งาน",

      usage: [
        "งานทาเหล็ก",
        "โครงสร้างเหล็ก",
      ],

      coverage: "0.06 – 0.1 กก./ตร.ม. @30 – 50 ไมครอน",

      package: [
        "18.9 กก.",
        "3.785 กก.",
      ],
    },

    {
      code: "RTP-E120",

      name: "สีเคลือบลายฆ้อน",


      description:
        "RTP-E120 เป็นสีทับหน้าสำหรับงานเหล็ก ผลิตจากอัลคิดเรซิ่นที่มีส่วนผสมของอลูมิเนียม ใช้สำหรับพ่นหรือทาเพื่อให้เกิดลวดลายสวยงาม ทนทานต่อสภาวะแวดล้อม ใช้งานง่าย และปราศจากสารปรอทและตะกั่ว",

      usage: [
        "เครื่องใช้สำนักงาน",
        "เครื่องจักรอุตสาหกรรม",
        "งานพ่นเหล็ก",
      ],

      coverage: "0.06 – 0.1 กก./ตร.ม. @30 – 50 ไมครอน",

      package: [
        "24 กก.",
        "4.5 กก.",
      ],
    },
  ],
},
    ],
  },

  {
    id: 3,
    name: "สีน้ำทาอาคาร",

    items: [
      {
  title: "รองพื้นสีน้ำ",

  products: [
    {
      code: "RTP-P102",

      name: "สีรองพื้นปูนใหม่กันด่าง",

      description:
        "RTP-P102 เป็นสีรองพื้นที่ผลิตจากอะครีลิคเรซิ่น 100% สามารถทนต่อความเป็นด่างของปูนฉาบหรือคอนกรีตได้ดี ช่วยป้องกันรอยด่างและคราบเกลือ พร้อมเพิ่มการยึดเกาะระหว่างชั้นปูนกับสีทับหน้า",

      usage: [
        "รองพื้นปูนใหม่",
        "พื้นผิวคอนกรีต",
        "ป้องกันด่าง",
      ],

      coverage: "0.10 – 0.12 กก./ตร.ม. @35 -40 ไมครอน",

      package: [
        "18.9 ลิตร",
      ],
    },

    {
      code: "RTP-P105",

      name: "สีรองพื้นอเนกประสงค์",

      description:
        "RTP-P105 เป็นสีรองพื้นที่ช่วยเพิ่มการยึดเกาะของสีทับหน้า เหมาะสำหรับใช้งานกับพื้นผิวปูนและคอนกรีต ใช้งานง่าย และช่วยให้สีทับหน้าติดทนนาน",

      usage: [
        "รองพื้นผนังปูน",
        "พื้นผิวคอนกรีต",
        "งานทาสีอาคาร",
      ],

      coverage: "0.06 – 0.1 กก./ตร.ม. @30 – 50 ไมครอน",

      package: [
        "17 กก.",
      ],
    },
  ],
},

    {
  title: "สีน้ำอะครีลิค",

  products: [
    {
      code: "RTP-E240",

      name: "สีน้ำอะครีลิค สำหรับภายในและภายนอก",

      description:
        "RTP-E240 เป็นสีน้ำอะครีลิค ผลิตจากอะครีลิคเรซิ่น ใช้งานได้ทั้งภายในและภายนอกอาคาร มีการยึดเกาะที่ดี และทนทานต่อรังสีอุลตร้าไวโอเลตและสภาพอากาศต่าง ๆ",

      usage: [
        "ทาภายในอาคาร",
        "ทาภายนอกอาคาร",
      ],

      coverage: "0.09 – 0.10 กก./ตร.ม. @ 35 – 40 ไมครอน",

      package: [
        "18.9 ลิตร",
      ],
    },

    {
      code: "RTP-E250",

      name: "สีน้ำอะครีลิค สำหรับภายนอก",

      description:
        "RTP-E250 เป็นสีน้ำอะครีลิค ผลิตจากอะครีลิคเรซิ่น สำหรับงานภายนอกอาคาร มีการยึดเกาะที่ดี และทนทานต่อรังสีอุลตร้าไวโอเลตและสภาพอากาศได้ดี",

      usage: [
        "ทาภายนอกอาคาร",
      ],

      coverage: "0.09 – 0.10 กก./ตร.ม. @ 35 – 40 ไมครอน",

      package: [
        "18.9 ลิตร",
      ],
    },

    {
      code: "RTP-E251",

      name: "สีน้ำอะครีลิค สำหรับภายใน",

      description:
        "RTP-E251 เป็นสีน้ำอะครีลิค ผลิตจากอะครีลิคเรซิ่น สำหรับงานภายในอาคาร มีสมบัติการยึดเกาะที่ดี",

      usage: [
        "ทาภายในอาคาร",
      ],

      coverage: "0.10 – 0.12 กก./ตร.ม. @ 35 – 40 ไมครอน",

      package: [
        "18.9 ลิตร",
      ],
    },
  ],
},
    ],
  },

  {
    id: 4,
    name: "สีกันรั่วซึม",

    items: [
      {
  title: "สีกันรั่วซึมอะครีลิค",

  products: [
    {
      code: "RTP-W100",

      name: "สีกันรั่วซึมอะครีลิคความยืดหยุ่นสูง",

      description:
        "RTP-W100 เป็นสีกันรั่วซึมอะครีลิคสูตรน้ำ เป็นมิตรต่อสิ่งแวดล้อม เหมาะสำหรับงานระบบกันซึมดาดฟ้าและกระเบื้องหลังคา มีการยึดเกาะกับคอนกรีตได้ดี และทนทานต่อรังสีอุลตร้าไวโอเลตและสภาพอากาศต่าง ๆ",

      usage: [
        "ดาดฟ้า",
        "หลังคา",
        "ระเบียง",
        "พื้นที่กันรั่วซึม",
      ],

      coverage: "0.15 – 0.19 กก./ตร.ม. @80 – 100 ไมครอน",

      package: [
        "20 กก.",
      ],
    },
  ],
},

     {
  title: "สีกันรั่วซึมโพลียูรีเทน",

  products: [
    {
      code: "RTP-W600",

      name: "สีกันรั่วซึมโพลียูรีเทนความยืดหยุ่นสูง",

      description:
        "RTP-W600 เป็นสีกันรั่วซึมโพลียูรีเทน 2 ส่วน สูตรน้ำ เป็นมิตรต่อสิ่งแวดล้อม เหมาะสำหรับระบบกันซึมที่ต้องการฟิล์มบาง มีความยืดหยุ่นสูง แข็งแรง และทนทานต่อสภาพอากาศต่าง ๆ",

      usage: [
        "ดาดฟ้า",
        "หลังคา",
        "ระเบียง",
        "พื้นที่กันรั่วซึม",
      ],

      coverage: "0.2 – 0.4 กก./ตร.ม. @ กลิ้ง 1 รอบ",

      package: [
        "20 กก./ชุด (ส่วน A = 19.5 กก. / ส่วน B = 0.5 กก.)",
      ],
    },
  ],
},
    ],
  },

  {
    id: 5,
    name: "สีเฉพาะทาง",

    items: [
      {
  title: "สีสะท้อนความร้อน",

  products: [
    {
      code: "RTP-W201",

      name: "สีสะท้อนความร้อน",

      description:
        "RTP-W201 เป็นสีน้ำกันรั่วซึมอะครีลิคชนิดสะท้อนความร้อน ช่วยลดความร้อนที่ถ่ายเทเข้าสู่บ้านหรืออาคาร ทำให้อุณหภูมิภายในลดลง พร้อมทั้งมีคุณสมบัติกันรั่วซึมน้ำ และทนทานต่อสภาพอากาศได้ดี",

      usage: [
        "ผนังอาคาร",
        "ดาดฟ้า",
        "หลังคา",
      ],

      coverage: "0.255 กก./ตร.ม. @150 ไมครอน",

      package: [
        "17 กก.",
      ],
    },
  ],
},

      {
  title: "โคลทาร์",

  products: [
    {
      code: "RTP-R600",

      name: "อีพ็อกซีโคลทาร์",

      description:
        "RTP-R600 เป็นสีโคลทาร์อีพ็อกซี่ 2 ส่วน มีส่วนผสมของยางมะตอย มีเนื้อฟิล์มสูง เหมาะสำหรับงานภายใน ให้การปกป้องพื้นผิวเหล็กและคอนกรีตได้ดี",

      usage: [
        "แท้งค์ภายใน",
        "พื้นผิวเหล็ก",
        "พื้นผิวคอนกรีต",
      ],

      coverage: "0.18 – 0.55 กก./ตร.ม @75 – 115 ไมครอน",

      package: [
        "24 กก./ชุด (ส่วน A = 18 กก. / ส่วน B = 6 กก.)",
        "4 กก./ชุด (ส่วน A = 3 กก. / ส่วน B = 1 กก.)",
      ],
    },
  ],
},

     {
  title: "กาวอีพ็อกซี่",

  products: [
    {
      code: "RTP-I100",

      name: "กาวอีพ็อกซี่สำหรับงานอัดประสานรอยแตกร้าว",

      description:
        "RTP-I100 เป็นกาวอีพ็อกซี่ 2 ส่วน ชนิดไม่มีตัวทำละลาย มีความหนืดต่ำ เหมาะสำหรับงานอัดฉีด (Injection) เพื่อประสานรอยแตกร้าวลึก มีการยึดเกาะดีเยี่ยม และไม่หดตัว",

      usage: [
        "งานอัดฉีดรอยแตกร้าว",
        "งานประสานคอนกรีต",
        "ซ่อมแซมโครงสร้าง",
      ],

      coverage: "0.18 – 0.55 กก./ตร.ม @75 – 115 ไมครอน",

      package: [
        "27 กก./ชุด (ส่วน A = 18 กก. / ส่วน B = 9 กก.)",
      ],
    },
  ],
},
    ],
  },
];

export default function Products() {
 const [active, setActive] = useState(1);
const [selectedItem, setSelectedItem] = useState(null);
const [selectedColor, setSelectedColor] = useState(palettes[0]);

const detailRef = useRef(null);

const current = categories.find((c) => c.id === active);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      {/* TITLE */}
      <h1 className="text-5xl font-black text-center text-orange-500 mb-12">
        สินค้าของเรา
      </h1>

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActive(cat.id);
              setSelectedItem(null);
            }}
            className={`
              px-5 py-3 rounded-2xl border transition-all duration-300
              ${
                active === cat.id
                  ? "bg-orange-500 text-black font-bold shadow-[0_0_20px_rgba(255,115,0,0.4)]"
                  : "border-orange-500/30 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(255,115,0,0.25)]"
              }
            `}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto bg-[#111] p-8 rounded-3xl border border-orange-500/20">

        <h2 className="text-2xl font-bold mb-6 text-orange-400">
          {current?.name}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
         {current?.items.map((item, i) => (
 <div
  key={i}
  onClick={() => {
    setSelectedItem(item);
    setSelectedColor(palettes[0]);

    setTimeout(() => {
      detailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }}

  className={`
    bg-black/40 p-4 rounded-xl border transition-all duration-300
    hover:border-orange-500 hover:translate-x-1 cursor-pointer
    ${
      selectedItem?.title === item.title
        ? "border-orange-500"
        : "border-orange-500/10"
    }
  `}
>
  
<p className="text-white font-semibold">
  {item.title}
</p>

    <p className="text-neutral-500 text-sm mt-2">
      {item.products.length} Products
    </p>

  </div>
))}
        </div>

      </div>

      {/* COLOR SELECTOR */}
      {selectedItem && (
        <>
          <div className="flex flex-col items-center mt-10 mb-10">

           <p className="text-neutral-400 mb-3">
  เลือกเฉดสีสำหรับ: 
  <span className="text-orange-500 ml-2 font-bold">
    {selectedItem?.title}
  </span>
</p>

            <div className="flex gap-3 flex-wrap justify-center">
              {palettes
  .filter((color) =>
    selectedItem?.products?.some((p) =>
      p.colors?.includes(color.code)
    ) || !selectedItem?.products?.[0]?.colors
  )
  .map((color, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(color)}
                  className={`
  w-[180px] h-[52px]
  flex items-center gap-2 px-4 py-2 rounded-xl border transition
  justify-start
                    ${
                      selectedColor.hex === color.hex
                        ? "border-orange-500 scale-105"
                        : "border-white/20"
                    }
                  `}
                >
                  <div
                    className="w-5 h-5 rounded-full border"
                    style={{ backgroundColor: color.hex }}
                  />

                  <span className="text-sm truncate">
  {color.name}
</span>
                </button>
              ))}
            </div>

          </div>

          {/* SELECTED COLOR PREVIEW */}
          <div className="flex justify-center mb-10">

            <div className="flex items-center gap-4 bg-[#111] px-6 py-4 rounded-2xl border border-orange-500/20">

              <div
                className="w-10 h-10 rounded-xl border"
                style={{ backgroundColor: selectedColor.hex }}
              />

              <div>
                <p className="text-white font-bold">
                  สีที่เลือก: {selectedColor.name}
                </p>

                <p className="text-neutral-400 text-sm">
                  {selectedColor.code}
                </p>
              </div>

            </div>

          </div>
        </>
      )}
{/* PRODUCTS */}
{selectedItem?.products?.length > 0 && (
  <div
    ref={detailRef}
    className="mt-10"
  >
    <h3 className="text-2xl font-bold text-orange-400 mb-6">
      รายการสินค้า
    </h3>

    <div className="grid md:grid-cols-2 gap-5">

      {selectedItem.products.map((product, i) => (

        <div
          key={i}
          className="
            bg-[#111]
            rounded-3xl
            overflow-hidden
            border border-orange-500/10
            hover:border-orange-500/40
            transition-all duration-300
            hover:-translate-y-1
          "
        >

          {/* IMAGE */}
          <div className="h-[260px] bg-black flex items-center justify-center p-6 border-b border-orange-500/10">

            <div
              className="w-full h-full rounded-2xl shadow-2xl transition-all duration-500"
              style={{
                backgroundColor: selectedColor.hex,
              }}
            >

              {/* ถังสินค้า */}
              <div className="w-full h-full flex items-center justify-center">

                {product.image && (
  <img
    src={product.image}
    alt={product.name}
    className="
      max-h-[220px]
      object-contain
      drop-shadow-[0_15px_30px_rgba(0,0,0,0.45)]
    "
  />
)}

              </div>

            </div>

          </div>

          {/* CONTENT */}
          <div className="p-5">

            <div className="flex items-center justify-between gap-3 mb-3">

              <p className="text-orange-500 font-black text-lg">
                {product.code}
              </p>

              <div
                className="w-7 h-7 rounded-full border border-white/20"
                style={{
                  backgroundColor: selectedColor.hex,
                }}
              />

            </div>

            <p className="text-white font-bold text-lg leading-7 mb-4">
              {product.name}
            </p>

            <p className="text-neutral-400 text-sm leading-7 mb-5">
              {product.description}
            </p>

            {/* การใช้งาน */}
            <div className="mb-5">

              <p className="text-orange-400 font-bold mb-2">
                การนำไปใช้
              </p>

              <div className="flex flex-wrap gap-2">

                {product.usage?.map((u, index) => (
                  <span
                    key={index}
                    className="
                      px-3 py-1 rounded-full
                      bg-orange-500/10
                      border border-orange-500/20
                      text-orange-300
                      text-xs
                    "
                  >
                    {u}
                  </span>
                ))}

              </div>

            </div>

            {/* Coverage */}
            <div className="mb-5">

              <p className="text-orange-400 font-bold mb-2">
                ปริมาณการใช้
              </p>

              <p className="text-neutral-300 text-sm">
                {product.coverage}
              </p>

            </div>

            {/* Package */}
            <div>

              <p className="text-orange-400 font-bold mb-2">
                ขนาดบรรจุ
              </p>

              <ul className="space-y-2">

                {product.package?.map((p, index) => (
                  <li
                    key={index}
                    className="
                      text-sm text-neutral-300
                      bg-black/40
                      border border-white/5
                      rounded-xl
                      px-3 py-2
                    "
                  >
                    {p}
                  </li>
                ))}

              </ul>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>
)}
    </div>
  );
}