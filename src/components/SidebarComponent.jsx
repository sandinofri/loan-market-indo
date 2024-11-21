import React from "react";
import "../style/sidebarcomponent.css";
import { Link ,useLocation} from "react-router-dom";
import imageLogo from "../assets/image/imageLogo.png";
import { navigationLink } from "../data";


const SidebarComponent = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath)
  return (
    <>
      <div className="sidebar shadow-sm">
        <div className="logo">
          <img src={imageLogo} alt="" />
        </div>
        <div className="list-container">
          <ul>
            {navigationLink.map((data) => (
              <li className={currentPath == `/${data.path}` ? "active" : ""}>
                <img src={data.image} alt="" className="me-2" /> <Link to={data.path}>{data.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarComponent;
