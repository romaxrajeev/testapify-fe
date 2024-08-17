import { Outlet } from "react-router-dom";
import "./layout.css";
import Sidebar from "../components/Sidebar";

const UserLayout = () => {
  return (
    <>
      <div className="user-container">
        <Sidebar />
        <div className="workarea">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
