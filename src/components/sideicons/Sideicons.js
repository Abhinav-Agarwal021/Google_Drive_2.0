import React from "react";
import AddIcon from "@material-ui/icons/Add";
import '../../styles/sideicons.css'

export const Sideicons = () => {
  return (
    <div className="side__icons">
      <div className="sideicons__top">
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png"
          alt="Calendar"
        />
        <img
          src="https://assets.materialup.com/uploads/64f5506e-2577-4d19-9425-11a1e1fa31a8/0x0ss-85.jpg"
          alt="Keep"
        />
        <img
          src="https://www.androidpolice.com/wp-content/uploads/2018/03/nexus2cee_new-tasks-icon.png"
          alt="Tasks"
        />
      </div>
      <hr />
      <div className="sideicons__plusbtn">
        <AddIcon />
      </div>
    </div>
  );
};
