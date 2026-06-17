import img1 from "../assets/fire-training-01.jpg";
import img2 from "../assets/fire-training-02.jpg";
import img3 from "../assets/fire-training-03.jpg";
import img4 from "../assets/fire-training-04.jpg";
import img5 from "../assets/fire-training-05.jpg";
import img6 from "../assets/fire-training-06.jpg";
import img7 from "../assets/fire-training-07.jpg";
import img8 from "../assets/screenshot-cover.png";
import img9 from "../assets/merit-making-01.jpg";
import img10 from "../assets/merit-making-02.jpg";
import img11 from "../assets/merit-making-03.jpg";
import img12 from "../assets/merit-making-04.jpg";
import img13 from "../assets/merit-making-05.jpg";
import img14 from "../assets/merit-making-06.jpg";
import newsVideo from "../assets/sequence 02.mp4";
import newsVideo2 from "../assets/sequence 01.mp4";
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