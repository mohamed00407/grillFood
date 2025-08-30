import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import {
  faHeart,
  faMagnifyingGlass,
  faTrashCan,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Import a specific icon
import { Link } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import Blogs from "./../../Pages/Blogs/Blogs";
export default function Header() {
  return (
    <>
      <header>
        {/* <div className="container flex justify-between items-center mx-auto">
        <div className="logo">
          <img
            src="https://grillfood-demo.myshopify.com/cdn/shop/files/logo.png?v=1746861780&width=147"
            alt="..."
          />
        </div>

        <ul className="menu flex flex-row">
          <li>
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to={"/products"}>
              PIZZA
            </Link>
          </li>
          <li>
            <Link className="link" to={"/collections"}>
              COLLECTIONS
            </Link>
          </li>
          <li>
            <Link className="link" to={"/snacks"}>
              SNAKS
            </Link>
          </li>
          <li>
            <Link className="link" to={"/blogs"}>
              BLOGS
            </Link>
          </li>
          <li>
            <Link className="link" to={"/contact"}>
              CONTACT
            </Link>
          </li>
        </ul>

        <ul className="icons">
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTrashCan} />
          </li>
        </ul>
      </div> */}
        <div className="navbar bg-base-[#000000] shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden text-[#ffffff]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>COLLCTION</a>
                </li>
                <li>
                  <a href="/products"> Pizza</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className="text-xl" href="/">
              <img
                src="https://grillfood-demo.myshopify.com/cdn/shop/files/logo.png?v=1746861780&width=147"
                alt="..."
              />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[#ffffff] ">
              <li className="p-1 text-[20px] mr-2 hover:text-[var(--Main-Color)]">
                <a href="./">Home</a>
              </li>
              <li className="p-1 text-[20px] mr-2 hover:text-[var(--Main-Color)]">
                <details>
                  <summary>
                    <a href="/products">PIZZA</a>
                  </summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="p-1 text-[20px] mr-2 hover:text-[var(--Main-Color)]">
                <a>COLLECTIONS</a>
              </li>
              <li className="p-1 text-[20px] mr-2 hover:text-[var(--Main-Color)]">
                <details>
                  <summary>
                    <a href="/products">SNAKS</a>
                  </summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="p-1 text-[20px] mr-2 hover:text-[var(--Main-Color)]">
                <a>Blogs</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <ul className="icons flex justify-between align-middle text-white">
              <li className="p-1 text-[24px] mr-2 hover:text-[var(--Main-Color)]">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </li>
              <li className="p-1 text-[24px] mr-2 hover:text-[var(--Main-Color)]">
                <FontAwesomeIcon icon={faUser} />
              </li>
              <li className="p-1 text-[24px] mr-2 hover:text-[var(--Main-Color)] static">
                <FontAwesomeIcon icon={faHeart} />
                <span className="absolute ">0</span>
              </li>
              <li className="p-1 text-[24px] mr-2 hover:text-[var(--Main-Color)]">
                <FontAwesomeIcon icon={faTrashCan} />
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
