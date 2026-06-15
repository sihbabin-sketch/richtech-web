import img1 from "../assets/LINE_ALBUM_อบรมดับเพลิง 2568_260522_17.jpg";
import img2 from "../assets/LINE_ALBUM_อบรมดับเพลิง 2568_260522_3.jpg";
import img3 from "../assets/LINE_ALBUM_อบรมดับเพลิง 2568_260522_63.jpg";
import img4 from "../assets/LINE_ALBUM_อบรมดับเพลิง 2568_260522_80.jpg";
import img5 from "../assets/LINE_ALBUM_อบรมดับเพลิง 2568_260522_81.jpg";
import img6 from "../assets/LINE_ALBUM_อบรมดับเพลิง 2568_260522_121.jpg";
import img7 from "../assets/LINE_ALBUM_อบรมดับเพลิง 2568_260522_17.jpg";
import img8 from "../assets/Screenshot 2026-06-10 084513.png";
import img9 from "../assets/LINE_ALBUM_ทำบุญบริษัท1432569_260615_1.jpg";
import img10 from "../assets/LINE_ALBUM_ทำบุญบริษัท1432569_260615_5.jpg";
import img11 from "../assets/LINE_ALBUM_ทำบุญบริษัท1432569_260615_14.jpg";
import img12 from "../assets/LINE_ALBUM_ทำบุญบริษัท1432569_260615_9.jpg";
import img13 from "../assets/LINE_ALBUM_ทำบุญบริษัท1432569_260615_15.jpg";
import img14 from "../assets/LINE_ALBUM_ทำบุญบริษัท1432569_260615_17.jpg";


import newsVideo from "../assets/เวลสเวด2 PR.mp4";
import newsVideo2 from "../assets/Sequence 01.mp4";
const newsData = [
  {
    id: 1,

    title: "อบรมดับเพลิง ประจำปี 2568",

    shortDesc: "อบรมดับเพลิง ประจำปี 2568",
    
      content: `
      เรียนรู้วิธีป้องกันและระงับเหตุเพลิงไหม้เบื้องต้นและสามารถใช้อุปกรณ์ดับเพลิงได้อย่างถูกต้องและปลอดภัย 
      พร้อมเรียนรู้ขั้นตอนการอพยพหนีไฟเมื่อเกิดเหตุฉุกเฉิน 
      เพิ่มความปลอดภัยในการทำงานภายในองค์กร
    
    `,
    cover: img1,

    images: [
      img1,
      img2,
      img3,
        img4, 
        img5,
        img6,
        img7,     
    ],
     driveLink:
    "https://drive.google.com/drive/folders/1NUHRoOP8i1CoEXcpTGnEQ0wOccS1oQjc?usp=drive_link",
  },
   {
    id: 2,

    title: "ทำบุญบริษัท ",

    shortDesc: "ทำบุญบริษัท ",

      content: `
    
    `,
    cover: img9,

    images: [
      img9,
      img10,
      img11,
        img12, 
        img13,
        img14,
    ],
     driveLink:
    "https://drive.google.com/drive/folders/1kv070ob1xe8DSxUpexPulPrvc6YtABHP?usp=drive_link",
  },
  {
  id: 3,
  title: "BEFORE&AFTER",
  shortDesc: "RTP-PUMF(G) โพลียูรีเทนคอนกรีต 3-5 มม. ชนิดเงา",
  video: newsVideo,
  content: `
      ✨ RTP-PUMF(G) โพลียูรีเทนคอนกรีต 3-5 มม. ชนิดเงา
เป็นระบบโพลียูรีเทนคอนกรีต 3 ส่วน ปรับระดับได้เอง ชนิดผิวเรียบ เงา 
สามารถติดตั้งที่ความหนา 3-5มม. เหมาะสําหรับพื้นคอนกรีตในโรงงาน
อุตสาหกรรม เพื่อรองรับการใช้งานที่หนักและทนทานต่อการเปลี่ยนแปลงของอุณหภูมิ นอกจากนี้สามารถนําไปใช้ในงานพื้นคอนกรีตทั่วไป 
เพื่อเพิ่มความทนทานและสวยงาม
    `,
  cover: img8
},

{
  id: 4,
  title: "BEFORE&AFTER",
  shortDesc: "RTP-PUMF(G) โพลียูรีเทนคอนกรีต 3-5 มม. ชนิดเงา",
  video: newsVideo2,
  content: `
      ✨ RTP-PUMF(G) โพลียูรีเทนคอนกรีต 3-5 มม. ชนิดเงา
เป็นระบบโพลียูรีเทนคอนกรีต 3 ส่วน ปรับระดับได้เอง ชนิดผิวเรียบ เงา 
สามารถติดตั้งที่ความหนา 3-5มม. เหมาะสําหรับพื้นคอนกรีตในโรงงาน
อุตสาหกรรม เพื่อรองรับการใช้งานที่หนักและทนทานต่อการเปลี่ยนแปลงของอุณหภูมิ นอกจากนี้สามารถนําไปใช้ในงานพื้นคอนกรีตทั่วไป 
เพื่อเพิ่มความทนทานและสวยงาม
    `,
  cover: img8
}
];

export default newsData;