import React, { useState } from "react";
import { supabase } from "../client";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);

  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      console.log(data);

      // Redirect to homepage if login is successful
      setToken(data);
      navigate("/homepage");
      form.reset();
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <button type="submit">LOGIN</button>
      </form>
      <p>
        Don&apos;t have an account? <Link to="/">Register</Link>
      </p>
    </div>
  );
};

export default Login;
