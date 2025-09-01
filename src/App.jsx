import { RouterProvider } from "react-router";
import "./App.css";
import MainLayout from "./MainLayout/MainLayout";
import router from "./routes/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
