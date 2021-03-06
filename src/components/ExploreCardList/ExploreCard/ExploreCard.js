import React from "react";
import styles from "./ExploreCard.module.css";

const ExploreCard = props => {
  return (
    <div
      className={styles.ExploreCard}
      style={{ backgroundImage: `url(${props.background}` }}
    >
      <div>
        <img src={props.avatar} alt="avatar" />
        <p>{props.username}</p>
      </div>
      <div>
        <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 52 52">
          <g>
            <path
              d="M51.9,16.2C51.2,7.9,45.2,1.8,37.8,1.8c-4.9,0-9.4,2.7-12,6.9C23.3,4.4,19,1.8,14.2,1.8
		C6.8,1.8,0.8,7.9,0.1,16.2c-0.1,0.4-0.3,2.3,0.4,5.5c1.1,4.6,3.6,8.7,7.2,12l18.1,16.4l18.4-16.4c3.6-3.3,6.1-7.4,7.2-12
		C52.2,18.6,52,16.6,51.9,16.2z M49.5,21.3c-1,4.2-3.3,8-6.6,11L25.9,47.5L9.1,32.3c-3.3-3-5.6-6.8-6.6-11c-0.7-3-0.4-4.7-0.4-4.7
		l0-0.1C2.7,9.1,7.8,3.8,14.2,3.8c4.7,0,8.8,2.9,10.8,7.5l0.9,2.2l0.9-2.2c1.9-4.6,6.3-7.5,11.1-7.5c6.4,0,11.4,5.3,12.1,12.7
		C49.9,16.6,50.2,18.3,49.5,21.3z"
            />
          </g>
        </svg>
        <span>{props.likeCount}</span>
      </div>
    </div>
  );
};

export default ExploreCard;
