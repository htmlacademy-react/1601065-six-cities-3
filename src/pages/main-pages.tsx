import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import HeaderScreen from '../components/header.tsx';
import NavigationScreen from '../components/navigation.tsx';
import HeaderDescriptionScreen from '../components/header-description-components.tsx';
import SortComponentsScreen from '../components/sort-components.tsx';
import OfferList from '../components/offer-list.tsx';

import { CITIES } from '../const/const.ts';

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
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const [selectedCity] = useState<string>(CITIES[0]); // Динамический выбор города в будущем

  const filteredOffers = offers.filter((offer) => offer.city === selectedCity);

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
              <HeaderDescriptionScreen number={filteredOffers.length} city={selectedCity} />
              <SortComponentsScreen />
              <OfferList offers={filteredOffers} onOfferHover={setActiveOfferId} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <p>Active Offer ID: {activeOfferId ?? 'None'}</p>
                {}
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainScreen;
