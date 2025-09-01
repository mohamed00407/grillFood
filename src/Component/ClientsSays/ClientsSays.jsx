import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// You will need to install react-icons for the star icons:
// npm install react-icons
import { BsFillStarFill } from "react-icons/bs";
import { useState } from "react";

const testimonials = [
  {
    id: 0,
    rating: 5,
    quote:
      "There are many variations of passages of lorem Ipsum available but form by injected humour randomised to words which don't look even slightly of model sentence structures to believable.",
    name: "Stefanie Rashford",
    title: "Web Developer",
    photo: "https://i.ibb.co/C5fJ1T4/stefanie-rashford.jpg",
  },
  {
    id: 1,
    rating: 5,
    quote:
      "This is a second sample testimonial to show how the carousel works. The design is clean and easy to use. I highly recommend it for any project!",
    name: "John Doe",
    title: "UI/UX Designer",
    photo: "https://i.ibb.co/q5k262H/john-doe.jpg", // You can replace this with your own image URL
  },
  {
    id: 2,
    rating: 4,
    quote:
      "The product exceeded my expectations. The user interface is intuitive and the features are powerful. A great experience overall!",
    name: "Jane Smith",
    title: "Product Manager",
    photo: "https://i.ibb.co/6y4jGkL/jane-smith.jpg", // You can replace this with your own image URL
  },
];
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="text-center px-4 md:px-8 lg:px-12">
      <div className="flex justify-center items-center space-x-1 mb-6 text-yellow-400">
        {Array(testimonial.rating)
          .fill(0)
          .map((_, i) => (
            <BsFillStarFill key={i} size={24} />
          ))}
      </div>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 font-normal leading-relaxed mb-8">
        {testimonial.quote}
      </p>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
        <p className="text-sm text-gray-500 font-normal">{testimonial.title}</p>
      </div>
    </div>
  );
};
export default function ClientsSays() {
  const [testId, setTestId] = useState(0);
  const settings = {
    dots: true, // This enables the dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hides the default arrows
    autoplay: true, // You can enable autoplay
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div style={{ position: "relative", marginTop: "20px" }}>
        <ul className="flex justify-center items-center space-x-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
          i === setTestId(testimonials.id) ? "bg-red-400" : "bg-gray-300"
        }`}
      ></div>
    ),
  };
  return (
    <div className="bg-stone-100 py-16 px-4 sm:px-6 lg:px-8">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </Slider>
    </div>
  );
}
