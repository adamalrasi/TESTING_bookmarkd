import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = (props) => {
  let navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <h3>Hello, {props.token.user.user_metadata.username}</h3>
      <button onClick={handleLogout}>LOG OUT</button>
    </div>
  );
};

export default Homepage;
