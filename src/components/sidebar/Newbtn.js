import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import "../../styles/newbtn.css";
import firebase from "firebase";
import { db, storage } from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  return {
    position: `relative`,
    top: `50%`,
    left: `50%`,
    transform: "translate(-50%,-50%)",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: `absolute`,
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const Newbtn = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState.apply(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    setUploading(true);
    storage
      .ref(`files/${file.name}`)
      .put(file)
      .then((snapshot) => {
        console.log(snapshot);
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            console.log("data updation in progress.........");
            db.collection("myFiles").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: file.name,
              fileUrl: url,
              size: snapshot._delegate.bytesTransferred,
            });

            setUploading(false);
            setOpen(false);
            setFile(null);
          });
      });
  };
  return (
    <div className="new__btn">
      <div className="newbtn__container" onClick={handleOpen}>
        <AddIcon />
        <span>New</span>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        arial-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <p>Select files you want to upload!</p>
          {uploading ? (
            <p>Uploading.....</p>
          ) : (
            <>
              <input type="file" onChange={handleChange} />
              <button onClick={handleUpload}>Upload</button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};
