import React, { useEffect, useState } from "react";
import styles from "../Styles/Dashboard.module.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";

const Dashboard = () => {
  const [walletBalance, setWalletBalance] = useState(100); // Initial wallet balance
  const [badgeRequests, setBadgeRequests] = useState([
    { id: 1, status: "Pending" },
    { id: 2, status: "Approved" },
    { id: 3, status: "Pending" },
  ]);
 
  const [currentTime, setCurrentTime] = useState("");

  const navigate = useNavigate();

  const updateTime = () => {
    const time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  useEffect(() => {
    // Call updateTime immediately to set the initial time
    updateTime();
    const timer = setInterval(updateTime, 1000);

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  




  function handleRefill() {
          setWalletBalance(walletBalance + 100); // Refill balance by 100
          toast.success("Payment Credited !", { position: "top-right" });
          
      }

  const handleInitiateRequest = () => {
    navigate("/initiaterequest");
  };

  const handleViewBadgeHistory = () => {
    alert("Something went wrong please try again later");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogin"); // Clear the login status from localStorage
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className={styles.bg}>
      <div className={styles.time}>{currentTime}</div>{" "}
      <div className={styles.dashboardContainer}>
        <div className={styles.header}>
          
          {/* Display current time */}
          <h1 className={styles.dash}>Badge Request Dashboard</h1>
          <div className={styles.wallet}>
            <span>Wallet Balance: {walletBalance} units</span>
            <button
              onClick={handleRefill}
              className={`bubbly-button ${styles.refillButton}`}
            >
              Refill
            </button>
            <button className={styles.logoutButton} onClick={handleLogout}>
              Logout
            </button>{" "}
            {/* Logout button */}
          </div>
        </div>

        <div className={styles.badgeRequests}>
          <h2>Recent Badge Requests</h2>
          <ul>
            {badgeRequests.map((request) => (
              <li key={request.id} className={styles.badgeRequestItem}>
                <span>Request ID: {request.id}</span>
                <span>Status: {request.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          <button onClick={handleInitiateRequest} className={styles.button}>
            Initiate Badge Request
          </button>
          <button onClick={handleViewBadgeHistory} className={styles.buttonhis}>
            View Badge History
          </button>
        </div>
      </div>
    </div>
  );
};



export default Dashboard;

