import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../const/const.ts';
import MainScreen from '../pages/main-pages.tsx';
import FavoriteEmptyScreen from '../pages/favorite-empty-page.tsx';
import FavoriteScreen from '../pages/favorite-page.tsx';
import LoginScreen from '../pages/login-page.tsx';
import MainEmptyScree from '../pages/main-empty-page.tsx';
import OfferNotLoggedScreen from '../pages/offer-not-logged-page.tsx';
// import OfferScreen from '../../pages/offer/offer-page.tsx'


function App(): JSX.Element {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainScreen/>}
      />
      <Route
        path={AppRoute.Login }
        element={<LoginScreen />}
      />
      <Route
        path={AppRoute.Favorite}
        element={<FavoriteScreen />}
      />
      <Route
        path={AppRoute.FavoriteEmpty}
        element={<FavoriteEmptyScreen />}
      />
      <Route
        path={AppRoute.MainEmpty}
        element={<MainEmptyScree />}
      />
      <Route
        path={AppRoute.Offer}
        // element={<OfferScreen />}
      />
      <Route
        path="*"
        element={<OfferNotLoggedScreen />}
      />
    </Routes>
  </BrowserRouter>
  );
}
export default App;
