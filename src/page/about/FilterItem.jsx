
import "./about.css";

const FilterItem = ({ setFilter }) => {
  

  return (
    <div className="filter-item">
      <div className="filter-item-child">
        <label htmlFor="all">بدون فلتر</label>
        <input
          type="radio"
          id="all"
          value="all"
          name="filter"
          onClick={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="filter-item-child ">
        <label htmlFor="laptop">لابتوب </label>
        <input
          type="radio"
          id="laptop"
          value="laptop"
          name="filter"
          onClick={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="filter-item-child ">
        <label htmlFor="mobile"> موبايل</label>
        <input
          type="radio"
          id="mobile"
          value={"mobile"}
          name="filter"
          onClick={(e) => setFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterItem;
