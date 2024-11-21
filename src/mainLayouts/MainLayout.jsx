import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import SidebarComponent from "../components/SidebarComponent";
import "../style/mainlayout.css";
import HeaderComponent from "../components/HeaderComponent";
import Dashboard from "../pages/Dashboard";
import Product from "../pages/Product";

const MainLayout = () => {
  return (
    <div className="app">
      <div className="main-content">
        <div className="side">
          <SidebarComponent />
        </div>
        <div className="content">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
