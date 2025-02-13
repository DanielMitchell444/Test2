import React from "react";
import DashboardHeader from "../Components/DashboardHeader";
import styles from '../App.module.css';

const Tracker = ({ toggle, toggleMenu, menuOpen, data }) => {
  return (
    <>
      <DashboardHeader toggle={toggle} toggleMenu={toggleMenu} menuOpen={menuOpen} />

      <>
      <div className= {styles.wrappedContainer}>
        <h2>Track your calories</h2>
      <div className= {styles.containerSignUp}>
        <div className={styles.inputFields2}>
          <input
            type="text"
            placeholder="Height (cm)"
            name="height"
            required
          />
        </div>
        <div className={styles.inputFields2}>
          <input
            type="text"
            placeholder="Weight (kg)"
            name="weight"
            required
          />
        </div>
        <div className={styles.inputFields2}>
          <input
            type="text"
            placeholder="Age"
            name="age"
            required
          />
        </div>
        <div className={styles.inputFields2}>
          <input
            type="text"
            placeholder="Gender"
            name="gender"
          />
        </div>
        <div className={styles.inputFields2}>
          <input
            type="text"
            placeholder="Preferences"
            name="preferences"
            required
          />
        </div>
        <div className={styles.inputFields}>
          <input type="submit" value="Continue" className={styles.login} />
        </div>
        <div className={styles.account}>
          <p className={styles.linkBack}>
            Go Back
          </p>
        </div>
        </div>
        </div>
      </>
    </>
  );
};

export default Tracker;
