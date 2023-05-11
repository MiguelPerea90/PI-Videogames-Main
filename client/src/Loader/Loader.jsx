import React from 'react';
import styles from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={styles.Loader}>
        <h1 className={styles.titleLoader}>Loading...</h1>
        <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;