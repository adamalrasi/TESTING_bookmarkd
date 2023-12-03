import { LoginPage, Homepage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <div>
      <p className="text-red-500 text-3xl">Bookmarkd</p>
      <Routes>
        {/* <Route path="/" element={<Register />} /> */}
        <Route path="/" element={<LoginPage setToken={setToken} />} />
        {/* <Route path="/login" element={<Login setToken={setToken} />} /> */}
        {token ? (
          <Route path="/homepage" element={<Homepage token={token} />} />
        ) : null}
      </Routes>
    </div>
  );
};

export default App;
