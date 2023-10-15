import React, { useState } from "react";
import "./form.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";

function Login() {
  const [err, setErr] = useState("");

  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const error = {};

      if (!values.email) {
        error.email = "Email box Should't be empty ";
      }
      if (!values.password) {
        error.password = "Password box Should't be empty ";
      }
      return error;
    },
    onSubmit: async (values) => {
      try {
        var res = await axios.post(`https://guessing-game-server.vercel.app/login`, values);
        window.localStorage.setItem("Game",res.data.name)
        if (res.data.token) {
          console.log(res.data.token);
          navigate("/home");
        } else {
          console.log(res.data.message);
          setErr(res.data.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  return (
<>
        <h1 id="title">Guessing Game</h1>
      
      
    
    <div class="login-box">
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div class="user-box">
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <label>Email</label>
        </div>
        <div style={{ color: "red" }}>{formik.errors.email} </div>
        <div class="user-box">
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <label>Password</label>
        </div>
        <div style={{ color: "red" }}>{formik.errors.password} </div>
        <div style={{ color: "red", fontSize: "20px" }}> {err} </div>
        <button className="btn" type={"submit"}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
        <button style={{ marginLeft: "40px" }}>
          <Link
            to={"/register"}
            style={{ color: "whitesmoke", textDecoration: "none" }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Register
          </Link>
        </button>
      </form>
    </div>
    </>
  );
}

export default Login;
