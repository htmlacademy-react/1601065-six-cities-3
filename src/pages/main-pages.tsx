import HeaderScreen from '../components/header.tsx';
import NavigationScreen from '../components/navigation.tsx';
import HeaderDescriptionScreen from '../components/header-description-components.tsx';
import SortComponentsScreen from '../components/sort-components.tsx';
import { CITIES } from '../const/const.ts';
import { Helmet } from 'react-helmet-async';

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

type MainScreenProps = {
  apartCount: number;
  email: string;
  offers: Offer[];
};

function MainScreen({ apartCount, email, offers }: MainScreenProps): JSX.Element {
  return (
    <>
      <HeaderScreen apartCount={apartCount} email={email} />
      <main className="page__main page__main--index">
        <Helmet>
          <title>6 cities</title>
        </Helmet>
        <h1 className="visually-hidden">Cities</h1>
        <NavigationScreen />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <HeaderDescriptionScreen number={offers.length} city={CITIES[3]} />
              <SortComponentsScreen />
              <div className="cities__places-list places__list tabs__content">
                {offers.map((offer) => (
                  <article className="cities__card place-card" key={offer.id}>
                    {offer.isPremium && (
                      <div className="place-card__mark">
                        <span>Premium</span>
                      </div>
                    )}
                    <div className="cities__image-wrapper place-card__image-wrapper">
                      <a href="#">
                        <img
                          className="place-card__image"
                          src={offer.images[0]}
                          width="260"
                          height="200"
                          alt={offer.title}
                        />
                      </a>
                    </div>
                    <div className="place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;{offer.price}</b>
                          <span className="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button
                          className={`place-card__bookmark-button button ${
                            offer.isFavorite ? 'place-card__bookmark-button--active' : ''
                          }`}
                          type="button"
                        >
                          <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use href="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">
                            {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
                          </span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <a href="#">{offer.title}</a>
                      </h2>
                      <p className="place-card__type">{offer.type}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainScreen;
