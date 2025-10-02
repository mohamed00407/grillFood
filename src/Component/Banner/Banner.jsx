import OrderButton from "../OrderButton/OrderButton";
import "./Banner.css";

export default function Banner() {
  return (
    <div>
      <div className="banner grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        <div className="card overflow-hidden  ">
          <div className="image w-full h-full relative transform transition-all duration-1000 hover:scale-107">
            <img
              className=" w-full h-full"
              src="\images\sub-banner-1.webp"
              alt=""
            />
          </div>
          <div className="text absolute top-[30px] left-[30px]">
            <h2>Delicious Pizza</h2>
            <p>Cheese Slice</p>
            <p>Italian Pizza</p>
            <p>oday Best Deals!</p>
            <OrderButton />
          </div>
        </div>
        <div className="card overflow-hidden ">
          <div className="image w-full h-full relative transform transition-all duration-1000 hover:scale-107">
            <img
              className=" w-full h-full"
              src="\images\sub-banner-2.webp"
              alt=""
            />
          </div>
          <div className="text absolute  top-[30px] left-[30px]">
            <h2>Delicious Pizza</h2>
            <p>Cheese Slice</p>
            <p>Italian Pizza</p>
            <p>oday Best Deals!</p>
            <OrderButton />
          </div>
        </div>
        <div className="card overflow-hidden ">
          <div className="image w-full h-full relative transform transition-all duration-1000 hover:scale-107">
            <img
              className=" w-full h-full"
              src="\images\sub-banner-3.webp"
              alt=""
            />
          </div>
          <div className="text absolute  top-[30px] left-[30px]">
            <h2>Delicious Pizza</h2>
            <p>Cheese Slice</p>
            <p>Italian Pizza</p>
            <p>oday Best Deals!</p>
            <OrderButton className="bg-pink-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
