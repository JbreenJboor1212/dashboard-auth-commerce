import "./Category.css";
import { categories } from "../../data/category";

const Category = () => {
  return (
    <div className="category">
      <h1>Our Category :</h1>
      <div className="parent-category">
        {categories.map((category) => (
          <div className="card" key={category.id} style={{ width: "13rem" }}>
            <div className="img"><img src={category.image} className="card-img-top" alt="..." /></div>
            <div className="card-body">
              <h4 className="card-title">{category.title}</h4>
            </div>
            <div className="card-body">
              <a
                href="https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=82342659060&hvpone=&hvptwo=&hvadid=585475370855&hvpos=&hvnetw=g&hvrand=15802588109913464452&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=2275&hvtargid=kwd-10573980&hydadcr=2246_13468515"
                className="card-link"
              >
                Card link
              </a>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
