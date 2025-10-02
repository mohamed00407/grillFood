import OrderButton from "./../OrderButton/OrderButton";
export default function SopifySection() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="imageOne w-full h-full">
        <img src="/images/img-1.webp" alt="" className=" w-full h-full" />
      </div>
      <div className="imageTwo  w-full h-full  relative">
        <img src="/images/img-2.webp" alt="" className=" w-full h-full" />
        <div className="text absolute top-30 left-20 w-[80%] h-full ">
          <p className="font-serif italic text-[34px] text-[var(--Second-color)] mb-2">
            Delicious food
          </p>

          <h3 className="text-7xl md:text-5xl font-bold  mb-6 text-white">
            Special Deal Offer For This Week!
          </h3>

          <div className="text-3xl font-bold text-[var(--Second-color)] mb-6">
            TWO VARIETIES OF TACO ONLY
            <span className="text-4xl font-extrabold  ml-2">$59</span>
          </div>

          <p className=" font-bold text-gray-200 mb-6 text-2xl">
            The origins of the taco are not precisely known, and etymologies for
            the culinary usage of the word are generally theoretical.
          </p>
          <OrderButton />
        </div>
      </div>
    </div>
  );
}
