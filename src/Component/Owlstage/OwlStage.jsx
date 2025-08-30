import React, { useState } from "react";

export default function OwlStage() {
  const cardsData = [
    { id: 1, title: "Card 1", content: "This is the first card." },
    { id: 2, title: "Card 2", content: "This is the second card." },
    { id: 3, title: "Card 3", content: "This is the third card." },
    { id: 4, title: "Card 4", content: "This is the fourth card." },
  ];

  const [activeIndex, setActiveIndex] = useState(1); // ابدأ من الفهرس 1 (الشريحة الثانية)

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center space-x-4">
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            className={`
              p-4 rounded-lg shadow-lg bg-white
              transform transition-all duration-300
              ${
                index === activeIndex
                  ? "scale-110 opacity-100 shadow-xl z-10"
                  : "scale-90 opacity-50"
              }
            `}
          >
            <h3
              className={`font-bold ${
                index === activeIndex ? "text-2xl text-blue-600" : "text-lg"
              }`}
            >
              {card.title}
            </h3>
            <p className="mt-2 text-gray-600">{card.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex space-x-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          السابق
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          التالي
        </button>
      </div>
    </div>
  );
}
