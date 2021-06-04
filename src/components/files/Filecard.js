import React from "react";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import "../../styles/filecard.css";

export const Filecard = ({ name }) => {
  return (
    <div className="file__Card">
      <div className="filecard__top">
        <InsertDriveFileOutlinedIcon style={{ fontSize: 130 }} />
      </div>
      <div className="filecard__bottom">
        <p>{name}</p>
      </div>
    </div>
  );
};
