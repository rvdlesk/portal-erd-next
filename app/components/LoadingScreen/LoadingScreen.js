// components/LoadingScreen.js
"use client";

import styles from './LoadingScreen.module.css';

const LoadingScreen = () => (
  <div className={styles.loadingOverlay}>
    <div className={styles.spinner}></div>
    <p>Cargando...</p>
  </div>
);

export default LoadingScreen;
