import Logo from "../../assets/logoshak.png";
import "./SideBar.css";
import { sidebarMenu } from "../../Data";
import { Link } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="Shakya Logo" />
        <h3>HAKYA</h3>
      </div>

      <div className="menu">
        {sidebarMenu.map((item, id) => {
          return (
            <Link to={item.linkto} className="menuLinks" key={item.id}>
              <div
                className={selected === id ? "menuItem active" : "menuItem"}
                onClick={() => setSelected(id)}
              >
                <item.icon />
                <span>{item.title}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
