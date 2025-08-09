import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import {
  faHeart,
  faMagnifyingGlass,
  faTrashCan,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Import a specific icon
import { Container } from "react-bootstrap";
import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <Container>
        <header>
          <div className="logo">
            <img
              src="https://grillfood-demo.myshopify.com/cdn/shop/files/logo.png?v=1746861780&width=147"
              alt="..."
            />
          </div>

          <ul className="menu">
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
        </header>
      </Container>
    </>
  );
}
