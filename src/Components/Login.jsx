import React, { useState } from "react";
import Styles from "../Styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  //states for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully!");
      // On successful login, navigate to the Dashboard page and show success message
      navigate("/Dash");
      toast.success("User logged in successfully", { position: "top-right" });
      // Store login state in localStorage as a string
      localStorage.setItem("isLogin", "true");
    } catch (error) {
      console.log(error);
      // Show error message if login fails
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <>
      <div className={Styles.wrapper}>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <FontAwesomeIcon icon={faUserAlt} />
            <input
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={Styles.input}
            />
          </div>
          <div>
            <FontAwesomeIcon icon={faLock} />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={Styles.input}
            />
          </div>
          <div>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className={Styles.button}>
            Submit
          </button>
          <div>
            <p>
              Don't have an account? <Link to="/Signup">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
