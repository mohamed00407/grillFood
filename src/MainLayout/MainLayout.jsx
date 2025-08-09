import { Outlet } from "react-router";
import Header from "../Component/Header/Header";
import Footer from "./../Component/Footer/Footer";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
