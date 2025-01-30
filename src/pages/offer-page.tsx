import { useParams } from 'react-router-dom';
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

type OfferScreenProps = {
  offers: Offer[];
  reviews: Review[];
};

function OfferScreen({ offers, reviews }: OfferScreenProps): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const offer = offers.find((item) => item.id === id);
  const offerReviews = reviews.filter((review) => review.offerId === id);
  const nearbyOffers = offers
    .filter((item) => item.city === offer?.city && item.id !== id)
    .slice(0, 3);

  if (!offer) {
    return <h1>Offer not found</h1>;
  }

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities: {offer.title}</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offer.images.slice(0, 6).map((image, index) => (
              <div className="offer__image-wrapper" key={index}>
                <img className="offer__image" src={image} alt={offer.title} />
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {offer.isPremium && (
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{offer.title}</h1>
              <button
                className={`offer__bookmark-button button ${
                  offer.isFavorite ? 'offer__bookmark-button--active' : ''
                }`}
                type="button"
              >
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use href="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">
                  {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
                </span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">
                {offer.rating.toFixed(1)}
              </span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {offer.goods.map((good, index) => (
                  <li className="offer__inside-item" key={index}>
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper user__avatar-wrapper">
                  <img
                    className="offer__avatar user__avatar"
                    src={offer.host.avatarUrl}
                    width="74"
                    height="74"
                    alt={offer.host.name}
                  />
                </div>
                <span className="offer__user-name">{offer.host.name}</span>
                {offer.host.isPro && <span className="offer__user-status">Pro</span>}
              </div>
              <p className="offer__text">{offer.description}</p>
            </div>

            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
                Reviews &middot; <span className="reviews__amount">{offerReviews.length}</span>
              </h2>
              <ul className="reviews__list">
                {offerReviews.map((review) => (
                  <li className="reviews__item" key={review.id}>
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img
                          className="reviews__avatar user__avatar"
                          src={review.user.avatarUrl}
                          width="54"
                          height="54"
                          alt={review.user.name}
                        />
                      </div>
                      <span className="reviews__user-name">{review.user.name}</span>
                    </div>
                    <p className="reviews__text">{review.comment}</p>
                    <time className="reviews__time" dateTime={review.date}>
                      {review.date}
                    </time>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>

      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {nearbyOffers.map((nearbyOffer) => (
            <article className="near-places__card place-card" key={nearbyOffer.id}>
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img
                    className="place-card__image"
                    src={nearbyOffer.images[0]}
                    width="260"
                    height="200"
                    alt={nearbyOffer.title}
                  />
                </a>
              </div>
              <h2 className="place-card__name">
                <a href="#">{nearbyOffer.title}</a>
              </h2>
              <p className="place-card__type">{nearbyOffer.type}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default OfferScreen;
