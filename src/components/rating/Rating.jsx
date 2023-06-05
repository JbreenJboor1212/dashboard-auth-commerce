import "./Rating.css";
import Stars from "./Stars";

const Rating = ({ product }) => {
  const { reviews, rating } = product;
  return (
    <div className="rating">
      <Stars rating={rating} />
      <p className="reviews">({reviews}) تقييمات</p>
    </div>
  );
};

export default Rating;
