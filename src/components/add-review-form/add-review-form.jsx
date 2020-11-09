import React from "react";
import PropTypes from "prop-types";

const AddReviewForm = (props) => {
  const {
    handleSubmit,
    handleTextChange,
    rating,
  } = props;

  const stars = new Array(5).fill(`1`);
  const getChecked = (index) => (rating === index) ? true : false;
  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {stars.map((star, index) =>(
              <React.Fragment key={`star-${index + 1}`}>
                <input
                  className="rating__input"
                  id={`star-${index + 1}`}
                  type="radio"
                  name="rating"
                  value={index + 1}
                  checked={getChecked(index + 1)}
                />
                <label className="rating__label" htmlFor="star-1">Rating {`${index + 1}`}</label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={handleTextChange}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

AddReviewForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default AddReviewForm;
