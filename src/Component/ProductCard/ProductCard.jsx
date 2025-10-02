import React, { useState } from "react";
import WishlisButtom from "../WishlisButtom/WishlisButtom";
import OrderButton from "../OrderButton/OrderButton";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="dealCard bg-white p-4 rounded-lg shadow-md mx-2 "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        <img
          src={
            hovered
              ? `http://localhost:1337${product.image[1].url}`
              : `http://localhost:1337${product.image[0].url}`
          }
          alt={product.name}
          className="w-full h-[300px] rounded-lg mb-4"
        />
        <div className="deadline"></div>
        <div className="discount absolute top-2 left-2 bg-[var(--Main-Color)] text-white text-xs font-bold px-2 py-1 w-[40px] h-[40px] flex justify-center items-center rounded-full ">
          -{product.discount}%
        </div>
        <div className="wish absolute  hidden top-2 right-2 border  border-[#eee] text-black font-bold px-2 py-1 w-[40px] h-[40px]  justify-center items-center rounded-full">
          <WishlisButtom productId={product.id} />
        </div>
      </div>
      <div className="text-center">
        <p className="font-bold text-lg mb-1">{product.name}</p>
        <div className="flex justify-center items-center mb-2">
          {Array(5)
            .fill(product.rating)
            .map((_, i) => (
              <span key={i} className="text-yellow-400">
                ★
              </span>
            ))}
        </div>

        <div className="mb-3">
          <span className="line-through text-gray-500 mr-3 text-2xl">
            ${product.oldPrice}
          </span>
          <span className="font-bold text-red-500 text-2xl">
            ${product.newPrice}
          </span>
        </div>

        <OrderButton
          style={{
            backgroundColor:
              product.buttontext === "OPTIONS" ? "#ffc107" : "#ffac2c",
            color: "white",
          }}
        >
          {product.buttontext}
        </OrderButton>
      </div>
    </div>
  );
}
