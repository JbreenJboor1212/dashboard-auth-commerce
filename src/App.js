/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import About from "./page/about/About";
import Login from "./page/auth/login/LogIn";
import Register from "./page/auth/register/Register";
import CreateProduct from "./page/dashboard-page/createProduct/CreateProduct";
import CreateUser from "./page/dashboard-page/createUser/CreateUser";
import Product from "./page/dashboard-page/product/Product";
import UpDateUser from "./page/dashboard-page/upadateUser/UpdateUser";
import UpDateProduct from "./page/dashboard-page/updateProduct/UpDateProduct";
import User from "./page/dashboard-page/user/User";
import Home from "./page/home/Home";
import RequireAuth from "./page/auth/reqAuth/ReqAuth";
import PersistLogin from "./page/auth/presistLogin/PresistLogin";
import SingleProduct from "./page/SingleProduct/SingleProduct";
import SingleOffers from "./components/items/single-offers";
import Cart from "./components/cart/Cart";
import Authors from "./page/authors/Authors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="single/:id" element={<SingleProduct />} />
        <Route path="offers/:id" element={<SingleOffers />} />
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="users" element={<User />} />
              <Route path="users/:id" element={<UpDateUser />} />
              <Route path="user/create" element={<CreateUser />} />
              <Route path="products" element={<Product />} />
              <Route path="products/:id" element={<UpDateProduct />} />
              <Route path="product/create" element={<CreateProduct />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
