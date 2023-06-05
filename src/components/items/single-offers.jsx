import "./Items.css";
import { specialOffers } from "../../data/special-offers";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import ItemDis from "./ItemDes";
import { useState } from "react";
import { useContext } from "react";
import { Data } from "../../page/context/Context";

const SingleOffers = () => {
  const { addToCart } = useContext(Data);

  const [qty, setQty] = useState(0);

  const { id } = useParams();

  const singleOffers = specialOffers.find((item) => item.id === +id);

  const { title, price, discount, reviews, rating, images, firstImage } =
    singleOffers;

  const [imgOne, setImageOne] = useState(firstImage);

  const disPrice = price - (discount * price) / 100;

  return (
    <>
      <Header />
      <div className="off">
        <div className="single-offers">
          <div className="single-offers-left">
            <h2 className="single-offers-left-h">{title}</h2>
            <div className="single-offers-left-reviews">
              <span className="reviews-two">
                {rating}
                <i className="bi bi-star-fill"></i>
              </span>
              <span className="reviews-one">التقييمات {reviews}</span>
            </div>
            <div className="single-offers-left-price">
              <span className="price-one">${disPrice}</span>
              <span className="price-two">${price}</span>
            </div>
            <div className="single-offers-left-cart">
              <h5 className="title">الكمية</h5>
              <div className="single-offers-left-cart-input">
                <div
                  className="btn"
                  onClick={() => {
                    addToCart({
                      ...singleOffers,
                      quantity: qty,
                      image: firstImage,
                    });
                  }}
                >
                  اضافة الى سلة التسوق
                </div>
                <input
                  type="number"
                  max={10}
                  min={1}
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="single-offers-right">
            <div className="top">
              <img src={imgOne} alt={title} />
            </div>
            <div className="bottom">
              {images.map((img, index) => (
                <img
                  src={img}
                  alt={index}
                  key={index}
                  className="img-all"
                  onClick={() => setImageOne(img)}
                />
              ))}
            </div>
          </div>
        </div>
        <ItemDis />
      </div>
    </>
  );
};

export default SingleOffers;
