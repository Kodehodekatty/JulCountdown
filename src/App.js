import "./App.css";
import React from "react";
import Countdown from "./components/Countdown";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Guestbook } from "./components/Guestbook";
import formStyles from "./components/formStyles.module.css";

function App() {
  return (
    <div className={formStyles.container}>
      <div className={formStyles.NavMenu}>
        <Link to="/Guestbook">
          <h1 className={formStyles.guestBookLink}>Guestbook</h1>{" "}
        </Link>

        <Link to="/Countdown">
          <h1 className={formStyles.guestBookLink}>Countdown!</h1>
        </Link>
      </div>
      <Routes>
        <Route path="/Guestbook" element={<Guestbook />} />
        <Route path="/Countdown" element={<Countdown />} />
      </Routes>
    </div>
  );
}

export default App;
