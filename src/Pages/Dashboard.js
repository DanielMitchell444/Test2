import React, { useState } from "react";
import styles from '../App.module.css';
import DashboardHeader from "../Components/DashboardHeader";
import DaysOfWeek from "../Components/Days";
import ProgressBar from "../Components/ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faWeight } from "@fortawesome/free-solid-svg-icons";
import Calendar from "../Components/Calendar";

const Dashboard = ({ logout, toggle, toggleMenu, menuOpen }) => {
  const [progress, trackProgress] = useState(20);



  return (
    <>
      <DashboardHeader logout={logout} toggle={toggleMenu} menuOpen={menuOpen} />
      <div className={styles.dashboardContainer}>
        <h1>Welcome Daniel</h1>
       <div className= {styles.cardsContainer}>
        <div className= {styles.cards}>
          <h1>Track Your Calories</h1>
          <p>Track your calories to the best of your ability</p>
          <div className= {styles.icon}>
          <FontAwesomeIcon

          icon = {faBullseye}
          className= {styles.icons}
          />

          </div>
          
        </div>
     

        <div className= {styles.cards}>
          <h1>Set your Goals</h1>
          <p>Set goals to help motivate you!</p>
          <div className= {styles.icon}>
          <FontAwesomeIcon

          icon = {faWeight}
          className= {styles.icons}
          />

          </div>
          
        </div>

        <div className= {styles.cards}>
          <h1>Lessons</h1>
          <p>Track your calories to the best of your ability</p>
          <div className= {styles.icon}>
          <FontAwesomeIcon

          icon = {faWeight}
          className= {styles.icons}
          />

          </div>
          
        </div>
       </div>
      </div>

     
    </>
    )
}

export default Dashboard