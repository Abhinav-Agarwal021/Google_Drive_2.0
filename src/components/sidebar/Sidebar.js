import React from "react";
import "../../styles/Sidebar.css";
import { Newbtn } from "./Newbtn";
import { SidebarItems } from "./SidebarItems";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import DevicesIcon from "@material-ui/icons/Devices";
import PeopleOutlineOutlinedIcon from "@material-ui/icons/PeopleOutlineOutlined";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import CloudQueueOutlinedIcon from "@material-ui/icons/CloudQueueOutlined";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Newbtn />
      <div className="sidebar__items">
        <SidebarItems arrow icon={<InsertDriveFileIcon />} label="My Drive" />
        <SidebarItems arrow icon={<DevicesIcon />} label="Computers" />
        <SidebarItems
          icon={<PeopleOutlineOutlinedIcon />}
          label="Shared with me"
        />
        <SidebarItems icon={<QueryBuilderIcon />} label="Recent" />
        <SidebarItems icon={<StarBorderIcon />} label="Starred" />
        <SidebarItems icon={<DeleteOutlinedIcon />} label="Bin" />
        <hr />
        <SidebarItems icon={<CloudQueueOutlinedIcon />} label="Storage" />
      </div>
    </div>
  );
};
