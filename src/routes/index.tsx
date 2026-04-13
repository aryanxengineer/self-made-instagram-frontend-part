import Login from "@/app/auth/login/page";
import Register from "@/app/auth/register/page";
import Home from "@/app/home/page";
import Create from "@/app/create/page";
import Profile from "@/app/profile/page";

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
  {
    title: "Create",
    path: "/create",
    element: <Create />,
  },
  {
    title: "Profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    title: "Profile",
    path: "/profile/:profileId",
    element: <Profile />,
  },
];
