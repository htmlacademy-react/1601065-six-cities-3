import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../const/const.ts';
import MainScreen from '../pages/main-pages.tsx';
import FavoriteScreen from '../pages/favorite-page.tsx';
import LoginScreen from '../pages/login-page.tsx';
import OfferScreen from '../pages/offer-page.tsx';
import Mistake from '../pages/404.tsx';
import PrivateRoute from './private-route.tsx';

type Offer = {
  id: string;
  city: string;
  images: string[];
  title: string;
  description: string;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  location: {
    latitude: number;
    longitude: number;
  };
};

type Review = {
  id: string;
  offerId: string;
  user: {
    name: string;
    avatarUrl: string;
  };
  rating: number;
  date: string;
  comment: string;
};

type AppProps = {
  apartCount: number;
  email: string;
  offers: Offer[];
  reviews: Review[];
};

function App({ apartCount, email, offers, reviews }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen apartCount={apartCount} email={email} offers={offers} />}
          />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route
            path={AppRoute.Favorite}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoriteScreen offers={offers.filter((offer) => offer.isFavorite)} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferScreen offers={offers} reviews={reviews} />}
          />
          <Route path="*" element={<Mistake />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
