import "./about.css";

const SortItem = ({ setSort }) => {
  return (
    <div className="sort-item">
      <div className="sort-item-child">
        <label htmlFor="don't">بدون ترتيب</label>
        <input
          type="radio"
          id="don't"
          value="don't"
          name="sort"
          onClick={(e) => setSort(e.target.value)}
        />
      </div>
      <div className="sort-item-child ">
        <label htmlFor="high">من الاعلى للاقل</label>
        <input
          type="radio"
          id="high"
          value="high"
          name="sort"
          onClick={(e) => setSort(e.target.value)}
        />
      </div>
      <div className="sort-item-child ">
        <label htmlFor="low">من الاقل للاعلى</label>
        <input
          type="radio"
          id="low"
          value="low"
          name="sort"
          onClick={(e) => setSort(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SortItem;
