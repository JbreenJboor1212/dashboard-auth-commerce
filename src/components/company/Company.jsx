import { brands } from "../../data/brands";
import "./Company.css";
const Company = () => {
  return (
    <div className="company">
      <h4>التسوق حسب الماركة</h4>
      <div className="com">
        {brands.map((brand) => (
          <div className="com-com" key={brand.id}>
            <img src={brand.image} alt={brand.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
