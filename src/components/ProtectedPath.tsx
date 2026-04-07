import { Navigate, Outlet } from "react-router-dom";

const ProtectedPath = () => {

  const user = localStorage.getItem("id");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedPath;
