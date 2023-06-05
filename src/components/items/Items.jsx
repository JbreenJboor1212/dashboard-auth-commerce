import "./Items.css";
import { specialOffers } from "../../data/special-offers";
import Offers from "./Offers";
import { Data } from "../../page/context/Context";
import { useContext } from "react";

const Items = () => {
  const { addToCart } = useContext(Data);

  return (
    <div className="item">
      <div className="offers">
        <h4>
          عروض كبيرة لليوم{" "}
          <span>
            <i className="bi bi-alarm-fill"></i>ل 24 ساعة فقط
          </span>
        </h4>
        <div className="offers-offers">
          {specialOffers.map((item) => (
            <Offers item={item} key={item.id} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
