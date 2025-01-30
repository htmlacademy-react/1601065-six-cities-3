import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import OfferList from '../components/offer-list.tsx';

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

type FavoriteScreenProps = {
  offers: Offer[];
};

function FavoriteScreen({ offers }: FavoriteScreenProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  const groupedOffers = favoriteOffers.reduce<Record<string, Offer[]>>((acc, offer) => {
    if (!acc[offer.city]) {
      acc[offer.city] = [];
    }
    acc[offer.city].push(offer);
    return acc;
  }, {});

  return (
    <main className="page__main page__main--favorites">
      <Helmet>
        <title>6 cities: Favorites</title>
      </Helmet>
      <div className="page__favorites-container container">
        {favoriteOffers.length > 0 ? (
          <section className="favorites">
            <h1 className="favorites__title">Saved listings</h1>
            <ul className="favorites__list">
              {Object.entries(groupedOffers).map(([city, cityOffers]) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to="/">
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <OfferList offers={cityOffers} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <section className="favorites favorites--empty">
            <h1 className="favorites__title">Nothing yet saved</h1>
            <p className="favorites__empty">
              Save properties to narrow down search or plan your next trip.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}

export default FavoriteScreen;
