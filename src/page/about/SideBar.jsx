import FilterItem from "./FilterItem";
import SortItem from "./SortItem";
import "./about.css";

const SideBar = ({ setSort, setFilter }) => {
  return (
    <div className="sidebar">
      <div className="filter">
        <h4>فلتر حسب السلعة</h4>
        <FilterItem setFilter={setFilter} />
      </div>
      <div className="sort">
        <h4>ترتيب حسب السعر</h4>
        <SortItem setSort={setSort} />
      </div>
    </div>
  );
};

export default SideBar;
