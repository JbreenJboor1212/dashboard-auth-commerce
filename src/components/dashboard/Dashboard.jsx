import { Outlet } from "react-router-dom";
import "./dashboard.css";
import SideBar from "./SideBar";
import TopHeader from "./TopHeader";
const Dashboard = () => {
  return (
    <div className="dashboard-parent">
      <TopHeader />
      <div className="dashboard-body">
        <SideBar />
        <div className="dashboard-page">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
