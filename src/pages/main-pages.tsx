import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import HeaderScreen from '../components/header.tsx';
import NavigationScreen from '../components/navigation.tsx';
import HeaderDescriptionScreen from '../components/header-description-components.tsx';
import SortComponentsScreen from '../components/sort-components.tsx';
import OfferList from '../components/offer-list.tsx';

import { CITIES } from '../const/const.ts';

type MainScreenProps = {
  apartCount: number;
  email: string;
  offers: {
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
  }[];
};


function MainScreen({ apartCount, email, offers }: MainScreenProps): JSX.Element {
  const [activeOfferId] = useState<string | null>(null);
  const [selectedCity] = useState<string>(CITIES[0]);

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
              <HeaderDescriptionScreen number={6} city={selectedCity} />
              <SortComponentsScreen />
              {/* Передаем данные предложений в OfferList */}
              <OfferList offers={offers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {activeOfferId && <p>Active Offer ID: {activeOfferId}</p>}
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainScreen;
