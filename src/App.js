import { useState } from "react";
import "./App.css";
import gd from "../src/Images/gd_icon.png";
import { Files } from "./components/files/Files";
import { Header } from "./components/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Sideicons } from "./components/sideicons/Sideicons";
import { auth, provider } from "../src/firebase";

function App() {
  const [user, setUser] = useState();
  const handleLogin = () => {
    if (!user) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (user) {
      auth
        .signOut()
        .then(() => {
          setUser(null);
        })
        .catch((err) => alert(err.message));
    }
  };
  return (
    <div className="app">
      {user ? (
        <>
          <Header userPhoto={user.photo} />
          <div className="app__main">
            <Sidebar username={user.name} />
            <Files name={user.name} />
            <Sideicons />
          </div>
        </>
      ) : (
        <div className="login">
          <img src={gd} alt="Google Drive" />
          <button onClick={handleLogin}>Log into google drive</button>
        </div>
      )}
    </div>
  );
}

export default App;
