import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/login.js";
import ManageIP from "./components/manageIP.js";
import { useEffect, useState } from "react";

export default function App() {
  const [bool, setBool] = useState(false);
  function func() {
    setBool((curr) => !curr);
  }
  return (
    <div>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Login bool={bool} setBool={setBool} func={func} />}
          />
          <Route
            path="/ipmanager"
            element={<ManageIP bool={bool} setBool={setBool} />}
          />
        </Routes>
      </div>
    </div>
  );
}
