import React from "react";
import NoResults from "../../src/assets/no-results.png";
import styles from "../../src/styles/NotFound.module.css";
import Asset from "./Asset";

const NotFound = () => {
  return (
    <div
    className={styles.NotFound}>
        <Asset
        src={NoResults}
        message={`Sorry, the page you're looking for doesnt exist`}
        />
        </div>
  );
};

export default NotFound