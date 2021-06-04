import React from "react";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import "../../styles/fileitem.css";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const Fileitems = ({ caption, timestamp, fileUrl, size }) => {
  const fileData = `${timestamp?.toDate().getDate()} ${
    monthNames[timestamp?.toDate().getMonth() + 1]
  } ${timestamp?.toDate().getFullYear()}`;

  const getReadableFileSizeString = (fileSizeInBytes) => {
    let i = -1;
    const byteUnits = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    do {
      fileSizeInBytes = fileSizeInBytes / 1024;
      i++;
    } while (fileSizeInBytes > 1024);
    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  };
  return (
    <div className="file__item">
      <a href={fileUrl} target="_blank" rel="noreferrer" download>
        <div className="fileitem__left">
          <InsertDriveFileIcon />
          <p>{caption}</p>
        </div>
        <div className="fileitem__right">
          <p>{fileData}</p>
          <p>{getReadableFileSizeString(size)}</p>
        </div>
      </a>
    </div>
  );
};
