import React from "react";
import styles from "../Styles/Header.module.css";

const Header = ({ walletBalance, personalDetails }) => {
  const handleLogout = () => {
    localStorage.removeItem("userRole");
    window.location.href = "/login"; // Redirect to login or home
  };

  return (
    <header className={styles.header}>
      {personalDetails.name && (
        <div className={styles.userDetails}>
          <p>
            <strong>Name:</strong> {personalDetails.name}
          </p>
          <p>
            <strong>Email:</strong> {personalDetails.email}
          </p>
          <p>
            <strong>Contact:</strong> {personalDetails.contactNumber}
          </p>
        </div>
      )}
      <div className={styles.walletSection}>
        <p className={styles.wallet}>Wallet Balance: ${walletBalance}</p>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
