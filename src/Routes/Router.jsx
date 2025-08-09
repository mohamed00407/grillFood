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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/snacks",
        element: <Snacks />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default router;
