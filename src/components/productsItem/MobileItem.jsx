import { useState } from "react";
import { products } from "../../data/products";
import Rating from "../rating/Rating";
import { Link } from "react-router-dom";

const MobileItem = ({ titleT ,addToCart }) => {
  const [slide, setSlide] = useState(0);
  return (
    <div className="laptop">
      <h1 className="laptop-title">{titleT}</h1>
      <div className="laptop-item">
        <button
          className="bi bi-caret-left"
          disabled={slide === 0}
          onClick={() => setSlide(slide - 1)}
        ></button>

        <button
          disabled={slide === 11}
          className="bi bi-caret-right"
          onClick={() => setSlide(slide + 1)}
        ></button>
        <div
          className="lap-lap"
          style={{ transform: `translate(${slide * -350}px)` }}
        >
          {products.map(
            (product) =>
              product.isLaptop === false && (
                <Link
                  className="lap"
                  key={product.id}
                  to={`single/${product.id}`}
                >
                  <img src={product.image} alt="" />
                  <div className="child">
                    <h4>{product.title}</h4>
                    <p className="p-one">
                      $<span>{product.price}</span> : السعر
                    </p>
                    <Rating product={product} />
                  </div>
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileItem;
