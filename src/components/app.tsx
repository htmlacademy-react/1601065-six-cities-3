import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../const/const';
import MainScreen from '../pages/main-pages';
import FavoriteScreen from '../pages/favorite-page';
import OfferScreen from '../pages/offer-page';
import { offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';

function App(): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainScreen
                apartCount={offers.length}
                email="user@example.com"
                offers={offers}
              />
            }
          />
          <Route
            path={AppRoute.Favorite}
            element={<FavoriteScreen offers={offers} />}
          />
          <Route
            path="/offer/:id"
            element={
              <OfferScreen
                offers={offers}
                reviews={reviews}
                apartCount={offers.length}
                email="user@example.com"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
