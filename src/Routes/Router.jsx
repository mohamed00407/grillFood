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
        element: <About />,
        Name: "HOME",
      },
      {
        path: "/products",
        element: <Products />,
        Name: "HOME",
      },
      {
        path: "/collections",
        element: <Collections />,
        Name: "HOME",
      },
      {
        path: "/snacks",
        element: <Snacks />,
        Name: "HOME",
      },
      {
        path: "/blogs",
        element: <Blogs />,
        Name: "HOME",
      },
      {
        path: "/contact",
        element: <Contact />,
        Name: "HOME",
      },
      {
        path: "/login",
        element: <LoginPage />,
        Name: "Login",
      },
    ],
  },
]);
export default router;
