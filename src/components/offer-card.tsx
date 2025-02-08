import { Link } from 'react-router-dom';

type OfferCardProps = {
  offer: {
    id: string;
    images: string[];
    title: string;
    type: string;
    price: number;
    rating: number;
    isPremium: boolean;
    isFavorite: boolean;
  };
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

function OfferCard({ offer, isActive, onMouseEnter, onMouseLeave }: OfferCardProps): JSX.Element {
  return (
    <article
      className={`cities__card place-card ${isActive ? 'place-card--active' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.images[0]}
            width="260"
            height="200"
            alt={offer.title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
      </div>
    </article>
  );
}

export default OfferCard;
