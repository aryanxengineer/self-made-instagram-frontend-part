// Import using lazy loading
import { lazy } from 'react';

const Home = lazy(() => import('@/app/home/page'));  
const Profile = lazy(() => import('@/app/profile/page'));
const Login = lazy(() => import('@/app/auth/login/page'));
const Register = lazy(() => import('@/app/auth/register/page'));
const Setting = lazy(() => import('@/app/settings/page'));
const Activity = lazy(() => import('@/app/activity/page'));
const Search = lazy(() => import('@/app/search/page'));
const Reel = lazy(() => import('@/app/reels/page'));
const Chat = lazy(() => import('@/app/chat/page'));


export const appRoutes = [
  {
    title: 'Home Page',
    path: '/',
    element: <Home />,
  },
  {
    title: 'Search Page',
    path: '/search',
    element: <Search />,
  },
  {
    title: 'Reels Page',
    path: '/reels',
    element: <Reel />,
  },
  {
    title: 'Chat Page',
    path: '/chat',
    element: <Chat />,
  },
  {
    title: 'Activity Page',
    path: '/activities',
    element: <Activity />,
  },
  {
    title: 'Setting Page',
    path: '/settings',
    element: <Setting />,
  },
  {
    title: 'Profile Page',
    path: '/profile',
    element: <Profile />,
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