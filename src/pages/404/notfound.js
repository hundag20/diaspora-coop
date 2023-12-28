import React from "react";
import { Link } from "react-router-dom";
import jigiiLogo from "../../assets/img/cooplogo.png";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <img style={styles.image} src={jigiiLogo} alt="logo" />
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.text}>
        Sorry, the page you are looking for does not exist.
      </p>
      <div>
        <Link to="/" style={styles.button}>
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    // marginTop: "100px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    objectFit: "contain",
    gap: "0rem",
  },
  image: {
    height: "100px",
    width: "200px",
  },
  title: {
    fontSize: "36px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  button: {
    // display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#00adef",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px",
    fontSize: "16px",
    width: "100%",
  },
};

export default NotFound;
