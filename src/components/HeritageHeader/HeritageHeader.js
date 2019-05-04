import React from "react";
import styles from "./HeritageHeader.module.css";
import Logo from "../Logo/Logo";
import broadcastIcon from "../../images/Live.svg";
import menuIcon from "../../images/menu.svg";
import { Link } from "react-router-dom";

const HeritageHeader = () => {
  return (
    <div className={styles.HeritageHeader}>
      <Link to="/broadcast">
        <img src={broadcastIcon} alt="broadcast" />
      </Link>
      <Link to="/">
        <Logo />
      </Link>
      <img src={menuIcon} alt="menu" />
    </div>
  );
};

export default HeritageHeader;
