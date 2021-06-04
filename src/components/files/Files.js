import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { Fileitems } from "./Fileitems";
import "../../styles/files.css";
import { Filecard } from "./Filecard";

export const Files = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    db.collection("myFiles").onSnapshot((snapshot) => {
      setFiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className="files">
      <div className="file__card">
        {files.slice(0, 5).map(({ id, item }) => (
          <Filecard name={item.caption} />
        ))}
      </div>
      <div className="files__titles">
        <div className="filetitles__left">
          <p>Name</p>
        </div>
        <div className="filetitles__right">
          <p>Last Modified</p>
          <p>files size</p>
        </div>
      </div>
      {files.map(({ id, item }) => (
        <Fileitems
          id={id}
          caption={item.caption}
          timestamp={item.timestamp}
          fileUrl={item.fileUrl}
          size={item.size}
        />
      ))}
    </div>
  );
};
