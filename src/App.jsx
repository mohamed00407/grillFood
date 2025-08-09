import { RouterProvider } from "react-router";
import "./App.css";
import MainLayout from "./MainLayout/MainLayout";
import router from "./routes/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
