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
};

function MainScreen({ apartCount, email }: MainScreenProps): JSX.Element {
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
              {}
              <SortComponentsScreen />
              <OfferList /> {}
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
