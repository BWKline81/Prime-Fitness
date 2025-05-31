import styles from "../Styles/404.module.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <i className="fa-solid fa-triangle-exclamation"></i>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <button onClick={() => navigate("/Prime-Fitness/")}>Return Home</button>
    </div>
  );
}

export default NotFound;
