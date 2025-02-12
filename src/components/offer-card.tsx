import { Link } from 'react-router-dom';
import { OfferCardProps } from '../types/type.ts';
import classNames from '../utils/utils.ts';

function OfferCard({ offer, isActive, onMouseEnter, onMouseLeave }: OfferCardProps): JSX.Element {
  return (
    <article
      className={classNames('cities__card place-card', { 'place-card--active': isActive })}
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
