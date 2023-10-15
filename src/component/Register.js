import React from "react";
import "./form.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";

function Register() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      const error = {};
      if (!values.name) {
        error.name = "Name box Should't be empty ";
      }
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
        await axios.post(`https://guessing-game-server.vercel.app/register`, values);

        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div class="login-box">
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <div class="user-box">
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <label>Username</label>
        </div>
        <div style={{ color: "red",zIndex:"100" }}>{formik.errors.name} </div>
        <div class="user-box">
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <label>Email</label>
        </div>
        <div style={{ color: "red" }}>{formik.errors.name} </div>
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
        <button className="btn"  type={"submit"}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
     <button style={{ marginLeft: "80px" }}>
     <Link to={"/"}  style={{color:"whitesmoke",textDecoration:"none"}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </Link>
     </button>
      </form>
    </div>
  );
}

export default Register;
