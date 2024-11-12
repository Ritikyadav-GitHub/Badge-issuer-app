import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/InitiateBadgeRequest.module.css";

const InitiateBadgeRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you'd send this data to the backend here

    alert("Thank you for your request!"); // Show the thank you message
    navigate("/dash"); // Navigate back to the dashboard
  };

  return (
    <div className={styles.outer}>
      <div className={styles.formContainer}>
        <h1>Initiate Badge Request</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="date">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default InitiateBadgeRequest;
