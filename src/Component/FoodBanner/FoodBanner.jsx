import OrderButton from "../OrderButton/OrderButton";
import "./FoodBanner.css";
const banners = [
  {
    title: "DOUBLE BEEF Hot Dogs!",
    subtitle: "Smerican Food",
    image: "/public/images/cms-banner-2.webp",
    buttonText: "ORDER NOW",
    freeDelivery: true,
    bgColor: "#e3242b",
    textColor: "#ffffff",
  },
  {
    title: "NEW ONINON Burgure!",
    subtitle: "Delicious",
    image: "/public/images/cms-banner-3.webp",
    buttonText: "ORDER NOW",
    discount: "50% OFF",
    bgColor: "#1a1a1a",
    textColor: "#ffffff",
  },
];

export default function FoodBanner() {
  return (
    <div className="flex align-middle justify-center bg-stone-100">
      <div className="container items-center p-4 sm:p-8 md:p-12  grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  ">
        {banners.map((banner, index) => {
          return (
            <div className="relative w-full h-full" key={index}>
              <div className="image w-full h-full">
                <img src={banner.image} alt="" />
              </div>
              <div className=" content absolute flex flex-col z-10  text-white top-[30%] left-5">
                <h2 className="text-[34px] font-normal  capitalize  mb-1 ">
                  {banner.title}
                </h2>
                <p className="one">{banner.subtitle}</p>
                <p className="two">Hot Dogs!</p>
                <OrderButton />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
