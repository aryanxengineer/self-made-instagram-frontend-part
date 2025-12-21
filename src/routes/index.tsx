// Import using lazy loading
import { lazy } from 'react';

const Home = lazy(() => import('@/app/home/page'));
const ReelPage = lazy(() => import('@/app/reels/page'));


export const homeRoutes = [
  {
    title: 'Home Page',
    path: '/',
    element: <Home />,
  },
  {
    title: 'Reels',
    path: '/reels',
    element: <ReelPage />,
  },

];
