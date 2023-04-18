import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Details from '../pages/details-page';
import SplashScreen from '../pages/splash-page';
import Home from '../pages/home-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <SplashScreen />,
      },
      {
        path: 'dashboard',
        element: <Home />,
      },
      {
        path: 'details/:id',
        element: <Details />,
      },
    ],
  },
]);

export default router;
