import { useState } from 'react';
import OfferCard from './offer-card';

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

type OfferListProps = {
  offers: Offer[];
  onOfferHover?: (offerId: string | null) => void;
};

function OfferList({ offers, onOfferHover }: OfferListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setActiveOfferId(id);
    if (onOfferHover) {
      onOfferHover(id);
    }
  };

  const handleMouseLeave = () => {
    setActiveOfferId(null);
    if (onOfferHover) {
      onOfferHover(null);
    }
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          isActive={activeOfferId === offer.id}
          onMouseEnter={() => handleMouseEnter(offer.id)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}

export default OfferList;
