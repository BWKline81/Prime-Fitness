import styles from "../Styles/404.module.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <i className="fa-solid fa-triangle-exclamation"></i>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <button onClick={() => navigate("/")}>Return Home</button>
    </div>
  );
}

export default NotFound;
