import { RouterProvider } from "react-router";
import "./App.css";

import router from "./routes/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
