import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Pages/error/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Products from "../Pages/Products/Products";
import Snacks from "../Pages/Snaks/Snaks";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Collections from "../Pages/Collections/Collections";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ProtectRouter from "./ProtectRouter/ProtectRouter";
import CollectionsGroup from "../Pages/CollectionsGroup/CollectionsGroup";
import BlogsNews from "../Pages/BlogsNews/BlogsNews";
import WhishList from "../Pages/WhishList/WhishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        Name: "HOME",
      },
      {
        path: "/about",
        element: (
          <ProtectRouter>
            <About />
          </ProtectRouter>
        ),
        Name: "About",
      },
      {
        path: "/products",
        element: (
          <ProtectRouter>
            <Products />
          </ProtectRouter>
        ),
        Name: "Products",
      },
      {
        path: "/collections",
        element: (
          <ProtectRouter>
            <Collections />
          </ProtectRouter>
        ),
        Name: "Collections",
      },
      {
        path: "/collections/:id",
        element: (
          <ProtectRouter>
            <CollectionsGroup />
          </ProtectRouter>
        ),
        Name: "CollectionsGroup",
      },
      {
        path: "/snacks",
        element: (
          <ProtectRouter>
            <Snacks />
          </ProtectRouter>
        ),
        Name: "Snacks",
      },
      {
        path: "/blogs",
        element: (
          <ProtectRouter>
            <Blogs />
          </ProtectRouter>
        ),
        Name: "Blogs",
      },
      {
        path: "/blogs/news/:id",
        element: (
          <ProtectRouter>
            <BlogsNews />
          </ProtectRouter>
        ),
        Name: "SingleBlogsNews",
      },
      {
        path: "/contact",
        element: (
          <ProtectRouter>
            <Contact />
          </ProtectRouter>
        ),
        Name: "Contact",
      },
      {
        path: "/whishlist",
        element: (
          <ProtectRouter>
            <WhishList />
          </ProtectRouter>
        ),
        Name: "WhishList",
      },
      {
        path: "/login",
        element: (
          <ProtectRouter>
            <LoginPage />
          </ProtectRouter>
        ),
        Name: "Login",
      },
      {
        path: "/register",
        element: (
          <ProtectRouter>
            <RegisterPage />
          </ProtectRouter>
        ),
        Name: "Register",
      },
    ],
  },
]);
export default router;
