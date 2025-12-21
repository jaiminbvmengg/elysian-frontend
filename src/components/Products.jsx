import { useState } from "react";
import ProductModal from "./ProductModal";

import frame1 from "../assets/bharat_natyam.jpeg";
import frame2 from "../assets/feather.jpeg";
import frame3 from "../assets/kathak_char.jpeg";
import frame4 from "../assets/jalpari.jpeg";
import frame5 from "../assets/navratri.jpeg";
import frame6 from "../assets/peacock.jpeg";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: "Bharat Natyam Frame",
      image: frame1,
    },
    {
      name: "Feather Frame",
      image: frame2,
    },
    {
      name: "Kathak Character Frame",
      image: frame3,
    },
    {
      name: "Mermaid Frame",
      image: frame4,
    },
    {
      name: "Navratri Frame",
      image: frame5,
    },
    {
      name: "Peacock Frame",
      image: frame6,
    },
  ];

  return (
    <section id="products">
      <div className="container">
        <h2>Best Selling Frames</h2>

        <div className="products">
          {products.map((item, i) => (
            <div className="card" key={i}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <div className="price">{item.price}</div>

              <button onClick={() => setSelectedProduct(item)}>
                DM on Instagram
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
