import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const.ts';
import MainScreen from '../pages/main-pages.tsx';
import FavoriteScreen from '../pages/favorite-page.tsx';
import LoginScreen from '../pages/login-page.tsx';
import OfferScreen from '../pages/offer-page.tsx';
import Mistake from '../pages/404.tsx';
import PrivateRoute from './private-route.tsx';


function App(): JSX.Element {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainScreen/>}
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
  );
}
export default App;
