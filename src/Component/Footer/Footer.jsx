import React from "react";

// You will need to install react-icons
// npm install react-icons
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-sans">
      {/* Newsletter Section */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://i.ibb.co/6P6Xy2Q/pizza.jpg")',
          }}
        ></div>
        <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-sm text-gray-400">
              Everyone loves a good deal so your subscribers are sure to enjoy
              getting emails from you that contain awesome coupons and
              promotions.
            </p>
          </div>
          <div className="flex-1 mt-6 md:mt-0 md:ml-8">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full sm:w-auto flex-grow p-3 rounded-lg bg-white bg-opacity-90 text-black outline-none border-2 border-transparent focus:border-orange-500 transition-colors"
              />
              <button className="w-full sm:w-auto px-6 py-3 rounded-lg font-bold text-black transition-colors duration-200 bg-orange-500 hover:bg-orange-600">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="p-8 sm:p-12 md:p-16 text-gray-400 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Contact Us */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-2 text-orange-500 flex-shrink-0" />
              <span>
                Grillfood - Fast Food Store
                <br />
                507-Union Trade Ipsum Doler
                <br />
                Centre France
              </span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-orange-500 flex-shrink-0" />
              <span>demo@example.com</span>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-2 text-orange-500 flex-shrink-0" />
              <span>(+91) 9876-543-210</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <FaYoutube />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">Services</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Size Chart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping & Refund
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Policy for Buyers
              </a>
            </li>
          </ul>
        </div>

        {/* Get Download Apps */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">
            Get Download Apps!
          </h4>
          <p className="text-sm mb-4">
            Get 30% Off Use This Code GRILLFOOD1 You can now access our menu and
            make your order via the app!
          </p>
          <div className="flex space-x-4">
            <a href="#">
              <img
                src="https://i.ibb.co/6P6Xy2Q/google-play.png"
                alt="Google Play"
                className="h-10"
              />
            </a>
            <a href="#">
              <img
                src="https://i.ibb.co/hCKqP1b/apple-store.png"
                alt="App Store"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <a
        href="#"
        className="fixed bottom-4 right-4 z-50 bg-orange-500 p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <BiUpArrowAlt className="text-white text-2xl" />
      </a>
    </footer>
  );
};

export default Footer;
