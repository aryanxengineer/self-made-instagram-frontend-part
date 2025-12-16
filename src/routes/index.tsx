// Import using lazy loading
import { lazy } from 'react';

const Home = lazy(() => import('@/app/home/page'));
const Profile = lazy(() => import('@/app/profile/page'));


export const appRoutes = [
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

];
