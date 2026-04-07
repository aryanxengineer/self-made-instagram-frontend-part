import Login from "@/app/auth/login/page";
import Register from "@/app/auth/register/page";
import Home from "@/app/home/page";

export const publicRoutes = [
  {
    title: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    title: "Register",
    path: "/register",
    element: <Register />,
  },
];

export const protectedRoutes = [
  {
    title: "Home",
    path: "/",
    element: <Home />,
  },
];

