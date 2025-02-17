import { useState } from 'react';
import OfferCard from './offer-card.tsx';
import { Offer } from '../types/type.ts';


export type OfferListProps = {
  offers: Offer[];
};

function OfferList({ offers }: OfferListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setActiveOfferId(id);
  };

  const handleMouseLeave = () => {
    setActiveOfferId(null);
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
