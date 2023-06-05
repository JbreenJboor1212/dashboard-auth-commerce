import Adv from "../../components/Adv/Adv";
import Header from "../../components/header/Header";
import "./home.css";
import Category from "../../components/category/Category";
import ProductItem from "../../components/productsItem/ProductItem";
import Company from "../../components/company/Company";
import Items from "../../components/items/Items";
const Home = () => {
  return (
    <div className="parent-home">
      <Header />
      <div className="home">
        <Adv />
        <Category />
        <Items />
        <ProductItem />
        <Company />
      </div>
    </div>
  );
};

export default Home;
