import React, { useState } from "react";
import style from "./css/Register.module.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register details:", form);
    // Connect to backend later
  };

  return (
    <div className={style.registerContainer}>
      <form className={style.registerForm} onSubmit={handleSubmit}>
        <h2 className={style.heading}>Join Our Gym</h2>
        <p className={style.subHeading}>Get fit. Stay strong. Feel amazing.</p>

        <div className={style.inputGroup}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className={style.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className={style.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className={style.inputGroup}>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
        </div>

        <button className={style.registerButton} type="submit">
          Sign Up
        </button>

        <p className={style.loginText}>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
