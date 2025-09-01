import OrderButton from "../OrderButton/OrderButton";
import "./over.css";

export default function Over() {
  return (
    <div className="Over relative w-full">
      <div className="text absolute ">
        <h1 className="text-[var(--Second-color)]"> Delicious Pizza</h1>
        <p className="text-white">2 Mc Crispy Chicken Surprise Burger</p>
        <p className="text-[var(--Second-color)]">
          Two chicken burger only <span>$69</span>
        </p>
        <p className="text-white">
          There will be leftover pimento cheese, but who's complaining Spread it
          onto bread the next day for lunch.
        </p>
        <OrderButton />
      </div>
      <img
        src="https://grillfood-demo.myshopify.com/cdn/shop/files/main-banner-1.jpg?v=1746871993&width=550"
        className="w-full"
      />
    </div>
  );
}
