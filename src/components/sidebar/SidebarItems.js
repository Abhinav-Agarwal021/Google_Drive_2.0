import React from "react";
import '../../styles/Sidebaritems.css'
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
export const SidebarItems = ({ arrow, icon, label }) => {
  return (
    <div className="Sidebar__items">
      <div className="sidebar__arrow">{arrow && <ArrowRightIcon />}</div>
      <div className="sidebar__main">
        {icon}
        <p>{label}</p>
      </div>
    </div>
  );
};
