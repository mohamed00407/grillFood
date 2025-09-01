import React from "react";
import {
  FaMotorcycle,
  FaLeaf,
  FaHandHoldingUsd,
  FaBlenderPhone,
} from "react-icons/fa";

// المكون الرئيسي للصفحة أو القسم
const FeatureCard = () => {
  const Card = ({ icon, title, description }) => {
    return (
      <div className="flex-1 p-6 flex flex-col items-center text-center border">
        <div className="mb-4 text-orange-500">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    );
  };

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* البطاقة الأولى */}
        <Card
          icon={<FaMotorcycle size={64} />}
          title="Fast Food Delivery"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        />

        {/* البطاقة الثانية */}
        <Card
          icon={<FaLeaf size={64} />}
          title="100% Natural Food"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        />

        {/* البطاقة الثالثة */}
        <Card
          icon={<FaHandHoldingUsd size={64} />}
          title="Best Quality Guarantee"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        />

        {/* البطاقة الرابعة */}
        <Card
          icon={<FaBlenderPhone size={64} />}
          title="Variety Of Dishes"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        />
      </div>
    </section>
  );
};
export default FeatureCard;
