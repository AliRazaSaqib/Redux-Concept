/** @format */

import React from "react";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const handleValidation = (e) => {
    e.preventDefault();
    if (userName === "") {
      console.log("Email empty");
    }
    if (pass === "") {
      console.log("Password empty");
    } else {
      console.log(
        "Your form was submitted, Now you can move on Add to list page"
      );
    }
  };
  return (
    <div>
      <div className="app-header d-flex align-items-center justify-content-center">
        React-Login-page-Task
      </div>

      {/*  Now start login-body */}
      <div className="login-body d-flex flex-column align-items-center justify-content-center">
        <div className="image">
          <img src="/login.png" alt="Not Found" className="w-100" />
        </div>
        <form onSubmit={handleValidation} autocomplete="off">
          <div className="fields">
            <h2 className="d-flex align-items-center justify-content-center">
              Login
            </h2>

            <input
              type="text"
              placeholder="Enter Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              autocomplete="off"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            {userName.length === "" ? (
              <label className="alert">Your input was empty</label>
            ) : null}
            <input
              type="password"
              placeholder="Password"
              autocomplete="off"
              value={pass}
              onChange={(event) => setPass(event.target.value)}
            />
            {pass.length === "" ? (
              <label className="alert">Your input was empty</label>
            ) : null}

            <Link to="/addToList">
              <button type="submit">Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
