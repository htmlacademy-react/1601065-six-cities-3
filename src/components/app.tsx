import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../const/const.ts';
import MainScreen from '../pages/main-pages.tsx';
import FavoriteScreen from '../pages/favorite-page.tsx';
import OfferScreen from '../pages/offer-page.tsx';
import { offers } from '../mocks/offers.ts';
import { reviews } from '../mocks/reviews.ts';

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
