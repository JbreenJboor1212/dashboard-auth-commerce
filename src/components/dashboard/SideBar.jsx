import { NavLink } from "react-router-dom";
import "./dashboard.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="item-link">
        <NavLink to="/dashboard/users" className="nav-link-link">
          <i className="bi bi-people-fill"></i>User
        </NavLink>

        <NavLink to="/dashboard/user/create" className="nav-link-link">
          <i className="bi bi-person-plus-fill"></i>Create User
        </NavLink>

        <NavLink to="/dashboard/products" className="nav-link-link">
          <i className="bi bi-calendar-fill"></i>Products
        </NavLink>

        <NavLink to="/dashboard/product/create" className="nav-link-link">
          <i className="bi bi-calendar-plus"></i>Crate Product
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
