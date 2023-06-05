import Header from "../../components/header/Header";
import AboutProduct from "./AboutProduct";
import SideBar from "./SideBar";
import { products } from "../../data/products";
import PaginationItem from "./Pagination";
import { useState } from "react";

const About = () => {
  /* !----- ste state ------ */
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("don't");
  const [current, setCurrent] = useState(0);

  /* !-------- filter Item -------- */
  const FilterItem = products.filter((product) =>
    filter === "laptop"
      ? product.isLaptop === true
      : filter === "mobile"
      ? product.isLaptop === false
      : product
  );

  /* !------- sort Item ------------- */
  const SortItem =
    sort === "high"
      ? FilterItem.sort((a, b) => b.price - a.price)
      : sort === "low"
      ? FilterItem.sort((a, b) => a.price - b.price)
      : FilterItem.sort((a, b) => (a.title > b.title ? 1 : -1));

  /* ---------- pagination ------------ */
  const Product_Per_Page = 3;

  const pages = Math.ceil(SortItem.length / Product_Per_Page);

  const startIndex = current * Product_Per_Page;

  const finishIndex = (current + 1) * Product_Per_Page;

  const orderProduct = SortItem.slice(startIndex, finishIndex);

  return (
    <div className="parent-about">
      <Header />
      <div className="about">
        <div className="top-top">
          <AboutProduct orderProduct={orderProduct} />
          <SideBar setFilter={setFilter} setSort={setSort} />
        </div>
        <div className="bottom-bottom">
          <PaginationItem
            pages={pages}
            setCurrent={setCurrent}
            current={current}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
