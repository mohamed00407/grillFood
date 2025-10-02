import { Navigate } from "react-router";

export default function ProtectRouter({ children }) {
  const isAllowed = localStorage.getItem("token") === null ? false : true;
  if (!isAllowed) return <Navigate to={"/login"} replace />;
  return children;
}
