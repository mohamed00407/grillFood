import "./Carousal.css";
import OrderButton from "./../OrderButton/OrderButton";

export default function Carousal() {
  return (
    <div>
      <div className="carousel w-full h-[100vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="text absolute top-40 right-40 w-2xl">
            <h1 className="text-[var(--Second-color)]">Chicken Burger</h1>
            <p className=" p-one text-white">
              2 Mc Crispy Chicken Surprise Burger
            </p>
            <p className="p-two text-[var(--Second-color)]">
              Two chicken burger only <span>$69</span>
            </p>
            <p className="p-three text-white">
              There will be leftover pimento cheese, but who's complaining
              Spread it onto bread the next day for lunch.
            </p>
            <OrderButton />
          </div>
          <img
            src="https://grillfood-demo.myshopify.com/cdn/shop/files/main-banner-1.jpg?v=1746871993&width=550"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="text absolute top-40 right-40 w-2xl">
            <h1 className="text-[var(--Second-color)]">Delicious Pizza</h1>
            <p className=" p-one text-white">Hot Spanish Sizzles Spicy Pizza</p>
            <p className="p-two text-[var(--Second-color)]">
              cheese chicken pizza only <span>$79</span>
            </p>
            <p className="p-three text-white">
              Spice it Up with Bbq Chicken,Chicken Sausages,Onion,Red Paprika,
              Chicken Salami & Peri Peri Dip.
            </p>
            <OrderButton />
          </div>
          <img
            src="https://grillfood-demo.myshopify.com/cdn/shop/files/main-banner-2.jpg?v=1746871993&width=375"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
