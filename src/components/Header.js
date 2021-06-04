import React from "react";
import "../styles/Header.css";
import gd from "../Images/gd_icon.png";
import { IconButton, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";

export const Header = ({ userPhoto }) => {
  return (
    <div className="Header">
      <div className="Header__logo">
        <img src={gd} alt="" />
        <span>Drive</span>
      </div>
      <div className="Header__searchbar">
        <div className="searchbar">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search in Drive" />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>
      <div className="Header__icons">
        <span>
          <IconButton>
            <HelpOutlineIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
        </span>
        <span>
          <IconButton>
            <AppsOutlinedIcon />
          </IconButton>
          <IconButton>
            <Avatar src={userPhoto} />
          </IconButton>
        </span>
      </div>
    </div>
  );
};
