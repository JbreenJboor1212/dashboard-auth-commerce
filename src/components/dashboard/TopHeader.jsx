import { Link } from "react-router-dom";
import "./dashboard.css";
const TopHeader = () => {
    
  return (
    <div className="header-dashboard">
      <div className="container-dashboard">
        <div className="dashboard-left">
          <i className="bi bi-balloon-fill icon"></i>
          <Link to={"/"} className="store">Store</Link>
        </div>
        <div className="dashboard-right">
          <Link to={"/"} className="button">Go To Website</Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
