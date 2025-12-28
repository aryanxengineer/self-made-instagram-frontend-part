// Import using lazy loading
import { lazy } from 'react';

const Home = lazy(() => import('@/app/home/page'));
const Profile = lazy(() => import('@/app/profile/page'));
const Login = lazy(() => import('@/app/auth/login/page'));
const Register = lazy(() => import('@/app/auth/register/page'));
const Setting = lazy(() => import('@/app/settings/page'));


export const homeRoutes = [
  {
    title: 'Home Page',
    path: '/',
    element: <Home />,
  },
  {
    title: 'Profile Page',
    path: '/profile',
    element: <Profile />,
  },
  {
    title: 'Setting Page',
    path: '/settings',
    element: <Setting />,
  },

];


export const authRoutes = [
  {
    title: 'Login',
    path: '/login',
    element: <Login />,
  },
  {
    title: 'Register',
    path: '/register',
    element: <Register />,
  }
]