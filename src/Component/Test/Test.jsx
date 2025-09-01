export default function Test() {
  return (
    <>
      <div className="card grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="images w-full h-[30%]">
          <img src="#" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="deadline"></div>
        <h2 className="text-xl text-bold">Chees Loades A.1 Burger</h2>
        <div className="flex justify-center items-center mb-2">
          {Array(5)
            .fill(3)
            .map((_, i) => {
              <span key={i} className="text-yellow-400">
                ★
              </span>;
            })}
        </div>
        <div className="price">
          <span className="oldPrice">300$</span>
          <span className="newPrice">250$</span>
        </div>
        <button>Order Now</button>
      </div>
    </>
  );
}
