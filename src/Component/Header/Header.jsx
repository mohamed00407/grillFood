// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./Header.css";
// import {
//   faHeart,
//   faMagnifyingGlass,
//   faTrashCan,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons"; // Import a specific icon
// import { Link, NavLink } from "react-router";
// import { FaAlignJustify } from "react-icons/fa";
// import Blogs from "./../../Pages/Blogs/Blogs";
// export default function Header() {
//   return (
//     <>
//       <header>
//         {/* <div className="container flex justify-between items-center mx-auto">
//         <div className="logo">
//           <img
//             src="https://grillfood-demo.myshopify.com/cdn/shop/files/logo.png?v=1746861780&width=147"
//             alt="..."
//           />
//         </div>

//         <ul className="menu flex flex-row">
//           <li>
//             <Link className="link" to={"/"}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link className="link" to={"/products"}>
//               PIZZA
//             </Link>
//           </li>
//           <li>
//             <Link className="link" to={"/collections"}>
//               COLLECTIONS
//             </Link>
//           </li>
//           <li>
//             <Link className="link" to={"/snacks"}>
//               SNAKS
//             </Link>
//           </li>
//           <li>
//             <Link className="link" to={"/blogs"}>
//               BLOGS
//             </Link>
//           </li>
//           <li>
//             <Link className="link" to={"/contact"}>
//               CONTACT
//             </Link>
//           </li>
//         </ul>

//         <ul className="icons">
//           <li>
//             <FontAwesomeIcon icon={faMagnifyingGlass} />
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faUser} />
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faHeart} />
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faTrashCan} />
//           </li>
//         </ul>
//       </div> */}
//         <div className="navbar bg-base-[#000000] shadow-sm">
//           <div className="navbar-start">
//             <div className="dropdown">
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost lg:hidden text-[#ffffff]"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h8m-8 6h16"
//                   />
//                 </svg>
//               </div>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//               >
//                 <li>
//                   <a>COLLCTION</a>
//                 </li>
//                 <li>
//                   <a href="/products"> Pizza</a>
//                   <ul className="p-2">
//                     <li>
//                       <a>Submenu 1</a>
//                     </li>
//                     <li>
//                       <a>Submenu 2</a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a>Item 3</a>
//                 </li>
//               </ul>
//             </div>
//             <a className="text-xl" href="/">
//               <img
//                 src="https://grillfood-demo.myshopify.com/cdn/shop/files/logo.png?v=1746861780&width=147"
//                 alt="..."
//               />
//             </a>
//           </div>
//           <div className="navbar-center hidden lg:flex">
//             <ul className="menu menu-horizontal px-1 text-[#ffffff] ">
//               <li className="p-1 text-[20px] mr-2 hover:text-[var(--Main-Color)]">
//                 <a href="./">Home</a>
//               </li>
//               <li className="p-1 text-[20px] mr-2 hover:text-[var(--Main-Color)]">
//                 <details>
//                   <summary>
//                     <a href="/products">PIZZA</a>
//                   </summary>
//                   <ul className="p-2">
//                     <li>
//                       <a>Submenu 1</a>
//                     </li>
//                     <li>
//                       <a>Submenu 2</a>
//                     </li>
//                   </ul>
//                 </details>
//               </li>
//               <li className="p-1 text-[20px] mr-2 hover:text-[var(--Main-Color)]">
//                 <a href="/collections">COLLECTIONS</a>
//               </li>
//               <li className="p-1 text-[20px] mr-2 hover:text-[var(--Main-Color)]">
//                 <details>
//                   <summary>
//                     <a href="/products">SNAKS</a>
//                   </summary>
//                   <ul className="p-2">
//                     <li>
//                       <a>Submenu 1</a>
//                     </li>
//                     <li>
//                       <a>Submenu 2</a>
//                     </li>
//                   </ul>
//                 </details>
//               </li>
//               <li className="p-1 text-[20px] mr-2 hover:text-[var(--Main-Color)]">
//                 <a>Blogs</a>
//               </li>
//             </ul>
//           </div>
//           <div className="navbar-end">
//             <ul className="icons flex justify-between align-middle text-white">
//               <li className="p-1 text-[24px] mr-2 hover:text-[var(--Main-Color)]">
//                 <FontAwesomeIcon icon={faMagnifyingGlass} />
//               </li>
//               <li
//                 className="p-1 text-[24px] mr-2 hover:text-[var(--Main-Color)] relative"
//                 onClick={() => {
//                   document
//                     .querySelector(".listLogin")
//                     .classList.toggle("hidden");
//                 }}
//               >
//                 <FontAwesomeIcon icon={faUser} />
//                 <ul className="listLogin absolute z-10 bg-white top-15 right-0 w-[150px] text-2xl p-2 text-[#666666] hidden">
//                   <li>
//                     <a href="/login">Login</a>
//                   </li>
//                   <li>
//                     <a href="/register">Register</a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="p-1 text-[24px] mr-2 hover:text-[var(--Main-Color)] static">
//                 <NavLink to={"/whishlist"}>
//                   <FontAwesomeIcon icon={faHeart} />
//                   <span className="absolute ">0</span>
//                 </NavLink>
//               </li>
//               <li className="p-1 text-[24px] mr-2 hover:text-[var(--Main-Color)]">
//                 <FontAwesomeIcon icon={faTrashCan} />
//               </li>
//             </ul>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

import React, { useState } from "react"; // Import useState for mobile menu
import {
  IoSearchOutline,
  IoHeartOutline,
  IoBagHandleOutline,
  IoPersonOutline,
  IoCloseOutline,
  IoMenuOutline,
} from "react-icons/io5";
import { Link, NavLink } from "react-router-dom"; // Use NavLink for active styling
import WhishList from "./../../Pages/WhishList/WhishList";

// NavItem Component: Simplified and uses NavLink for automatic active styling
const NavItem = ({ to, label, hasDropdown, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      // Use active class for current route
      `text-white transition duration-150 relative group ${
        isActive
          ? "text-orange-500 font-bold"
          : "hover:text-orange-500 font-semibold"
      }`
    }
  >
    {label}
    {hasDropdown && <span className="ml-1 text-xs">&#9662;</span>}

    {/* Underline remains active on hover AND when active */}
    <span
      className={`absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 transform transition-transform duration-300 ${
        "scale-x-0 group-hover:scale-x-100" // Base hover
      } 
            `}
    />
  </NavLink>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItemCount = 2;
  const WhishListCount = 2;

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-transparent shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* 1. Logo and Brand Name */}
        <div className="flex flex-col items-start z-50">
          <Link
            to="/"
            className="text-4xl font-serif font-bold text-white tracking-wider"
          >
            GrillFood
          </Link>
          <span className="text-sm font-light italic text-yellow-500 -mt-1 ml-1">
            Cafe & Restro
          </span>
        </div>

        {/* 2. Primary Navigation Links (Desktop) */}
        <nav
          className="hidden lg:flex space-x-8 text-sm uppercase tracking-wider font-semibold"
          aria-label="Primary Navigation"
        >
          <NavItem to="/" label="Home" />
          <NavItem to="/pizza" label="Pizza" hasDropdown />
          <NavItem to="/collections" label="Collections" />
          <NavItem to="/snacks" label="Snacks" hasDropdown />
          <NavItem to="/blogs" label="Blogs" />
          <NavItem to="/contact" label="Contact" />
        </nav>

        {/* 3. Icons (Desktop and Mobile) */}
        <div className="flex items-center space-x-6 text-white text-2xl z-50">
          {/* Search Icon */}
          <button
            className="hover:text-orange-500 transition duration-150"
            aria-label="Search"
          >
            <IoSearchOutline />
          </button>

          {/* Account/User Profile Icon */}
          <Link
            to="/profile"
            className="hover:text-orange-500 transition duration-150"
            aria-label="Profile"
          >
            <IoPersonOutline />
          </Link>

          {/* Wishlist Icon */}
          <Link
            to="/wishlist"
            className="relative hover:text-orange-500 transition duration-150 "
            aria-label="Wishlist"
          >
            <IoHeartOutline />
            {WhishListCount > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-600 text-xs font-bold text-white ">
                {WhishListCount}
              </span>
            )}
          </Link>
          {/* Cart Icon with Badge */}
          <Link
            to="/cart"
            className="relative hover:text-orange-500 transition duration-150"
            aria-label="Shopping Cart"
          >
            <IoBagHandleOutline />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-600 text-xs font-bold text-white border-2 border-gray-900">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-white text-3xl ml-4"
            onClick={toggleMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Overlay */}
      <nav
        id="mobile-menu"
        className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-gray-900 transition-transform duration-300 ease-in-out z-40 p-8 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile Navigation"
      >
        <div className="flex flex-col space-y-6 pt-24 text-xl uppercase tracking-wider">
          <NavItem to="/" label="Home" onClick={toggleMenu} />
          <NavItem to="/pizza" label="Pizza" hasDropdown onClick={toggleMenu} />
          <NavItem to="/collections" label="Collections" onClick={toggleMenu} />
          <NavItem
            to="/snacks"
            label="Snacks"
            hasDropdown
            onClick={toggleMenu}
          />
          <NavItem to="/blogs" label="Blogs" onClick={toggleMenu} />
          <NavItem to="/contact" label="Contact" onClick={toggleMenu} />
        </div>
      </nav>
    </header>
  );
}
