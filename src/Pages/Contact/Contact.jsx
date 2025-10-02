export default function Contact() {
  return (
    <div className="bg-stone-100 py-16 px-4">
      <div className="container mx-auto max-w-5xl bg-white p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* نموذج الاتصال */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Do You Have Any Questions?
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Email*"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Comment"
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
            >
              SEND
            </button>
          </form>
        </div>

        {/* معلومات التواصل */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Get In Touch With Us</h2>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Address:</h3>
            <p>
              35 New Montgomery St, <br /> 3rd Floor San Francisco,
              <br /> CA, USA 94105
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Contact No:</h3>
            <p>(+91) 9870 543 210</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Email:</h3>
            <p className="text-red-500">grillfood@exampledemo.com</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Store Info:</h3>
            <p>Monday - Friday 10 AM - 8 PM</p>
          </div>
        </div>
      </div>
      <div className="mt-8 container mx-auto max-w-5xl bg-white rounded-lg overflow-hidden">
        {/* مكان مخصص للخريطة */}
        <img
          src="https://via.placeholder.com/1000x400?text=Map+Placeholder"
          alt="Location Map"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
