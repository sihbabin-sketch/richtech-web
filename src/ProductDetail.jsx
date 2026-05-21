import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "สีทาภายนอก Premium",
    price: "890 บาท",
    desc: "สีคุณภาพสูง ทนแดด ทนฝน",
    image: "https://images.unsplash.com/photo-1587502536575-6e6f1c5f3b2c",
  },
  {
    id: 2,  
    name: "สีทาภายใน Smooth Touch",
    price: "750 บาท",
    desc: "ผิวเรียบหรู นุ่มนวล",
    image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df",
  },
];

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find((p) => p.id == id);

  if (!product) return <div className="text-white p-10">ไม่พบสินค้า</div>;

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-4xl mx-auto">

        <img
          src={product.image}
          className="w-full rounded-2xl mb-6"
        />

        <h1 className="text-4xl font-bold text-orange-500 mb-4">
          {product.name}
        </h1>

        <p className="text-neutral-400 mb-4">
          {product.desc}
        </p>

        <p className="text-xl mb-6">
          {product.price}
        </p>

        <button className="bg-orange-500 px-6 py-3 rounded-xl font-bold">
          เพิ่มลงตะกร้า
        </button>

      </div>
    </div>
  );
}