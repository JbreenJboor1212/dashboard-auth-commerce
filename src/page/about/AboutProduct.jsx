import "./about.css";
const AboutProduct = ({ orderProduct }) => {
  return (
    <div className="about-product">
      {orderProduct.map((product) => (
        <div className="item-product" key={product.id}>
          <img src={product.image} alt={product.id} />
          <h4>{product.title}</h4>
          <div className="single-offers-left-reviews">
            <span className="reviews-two">
              {product.rating}
              <i className="bi bi-star-fill"></i>
            </span>
            <span className="reviews-one">التقييمات {product.reviews}</span>
          </div>
          <p className="price">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutProduct;
