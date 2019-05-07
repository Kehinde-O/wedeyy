import React from "react";
import styles from "./TrendingItem.module.css";
import globalStyles from "../../Global.module.css";

const TrendingItem = props => {
  if (props.loading) {
    return (
      <div
        className={`${styles.TrendingItem} ${globalStyles.animatedBackground}`}
        style={{ background: `#e9e9e9` }}
      />
    );
  }
  return (
    <div
      className={styles.TrendingItem}
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <div className={styles.top}>
        <span>#{props.count}</span>
        <span>{props.videoLength}</span>
      </div>
      <div className={styles.bottom}>
        <p>
          <img src={props.avatar} alt="avatar" />
          <span>{props.username}</span>
        </p>
      </div>
    </div>
  );
};

export default TrendingItem;
