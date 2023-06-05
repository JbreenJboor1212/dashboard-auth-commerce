import { Link } from "react-router-dom";
import "./Items.css";
import { useState } from "react";

const Offers = ({ item }) => {
  const {
    firstImage,
    title,
    rating,
    reviews,
    price,
    discount,
    secondImage,
    id,
  } = item;

  const [images, setImages] = useState(firstImage);

  return (
    <div className="body-offers-full">
      <span className="op">${discount} خصم</span>
      <div className="body-offers-left">
        <h2 className="body-offers-left-h2">{title}</h2>
        <div className="body-offers-left-rating">
          <span className="rr">
            <i className="bi bi-star-fill"></i>
            {rating}
          </span>
          <span className="ee">تقييمات {reviews}</span>
        </div>
        <div className="body-offers-left-price">
          <span className="price-one">${price}</span>
          <span className="price-two">${price - (price * discount) / 100}</span>
        </div>
        <Link className="view" to={`offers/${id}`}>
          مشاهدة المزيد
        </Link>
      </div>
      <div className="body-offers-right">
        <img
          src={images}
          alt={title}
          onMouseEnter={() => {
            setImages(secondImage);
          }}
          onMouseLeave={() => {
            setImages(firstImage);
          }}
        />
      </div>
    </div>
  );
};

export default Offers;
