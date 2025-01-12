import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../const/const.ts';
import MainScreen from '../pages/main-pages.tsx';
import FavoriteScreen from '../pages/favorite-page.tsx';
import LoginScreen from '../pages/login-page.tsx';
import OfferScreen from '../pages/offer-page.tsx';
import Mistake from '../pages/404.tsx';
import PrivateRoute from './private-route.tsx';

type AppProps = {
  apartCount: number;
  email: string;
};

function App({ apartCount, email }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen apartCount={apartCount} email={email} />}
          />
          <Route
            path={AppRoute.Login }
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Favorite}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <FavoriteScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferScreen />}
          />
          <Route
              path="*"
              element={<Mistake />}
            />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}
export default App;
