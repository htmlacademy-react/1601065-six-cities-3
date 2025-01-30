import { useState, ChangeEvent, FormEvent, Fragment } from 'react';

type CommentFormProps = {
  onSubmit: (comment: { rating: number; review: string }) => void;
};

function CommentForm({ onSubmit }: CommentFormProps): JSX.Element {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = review.length >= 50 && review.length <= 300 && rating !== null;

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isFormValid) {
      setIsSubmitting(true);
      onSubmit({ rating: rating as number, review });
      setReview('');
      setRating(null);
      setIsSubmitting(false);
    }
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => (
          <Fragment key={star}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star}
              id={`${star}-stars`}
              type="radio"
              checked={rating === star}
              onChange={handleRatingChange}
              disabled={isSubmitting}
            />
            <label
              htmlFor={`${star}-stars`}
              className="reviews__rating-label form__rating-label"
              title={star === 5 ? 'perfect' : star === 4 ? 'good' : star === 3 ? 'not bad' : star === 2 ? 'badly' : 'terribly'}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleTextareaChange}
        disabled={isSubmitting}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set a <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid || isSubmitting}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
