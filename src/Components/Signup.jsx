import React, { useState } from "react";
import Styles from "../Styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faLock, faAt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "./firebase";
import { setDoc,doc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function Signup() {
  //state for name and details
  const[fname,setFname]= useState("");
  const [lname,setLname] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
     await createUserWithEmailAndPassword(auth,email,password);
     const user = auth.currentUser;
     console.log(user);
     if(user){
      await setDoc(doc(db,"users",user.uid),{
        email: user.email,
        firstName:fname,
        lastName:lname,

      });
     }
     console.log("user registered sucsessfully")
     toast.success("user registered sucsessfully!", {
       position: "top-center",
     });
    } catch (error) {
      console.log(error);
       toast.error(error.message, {
         position: "bottom-center",
       });
      
    }
  };
  return (
    <>
      <div className={Styles.wrapper}>
        <form className={Styles.form} onSubmit={handleRegister}>
          <h1>Sign Up</h1>
          <div>
            <FontAwesomeIcon icon={faUserAlt} />
            <input
              type="text"
              placeholder="First Name"
              required
              className={Styles.input}
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              className={Styles.input}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div>
            <FontAwesomeIcon icon={faLock} />
            <input
              type="password"
              placeholder="Password"
              required
              className={Styles.input}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className={Styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <FontAwesomeIcon icon={faAt} />
            <input
              type="email"
              placeholder="Email"
              required
              className={Styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className={Styles.button}>
            Sign Up!
          </button>
          <div>
            <h2>Already have an account?</h2>
            <Link to="/Login">Login</Link>
          </div>
        </form>
      </div>
    </>
  );
}
