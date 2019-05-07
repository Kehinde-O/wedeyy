import React, { Component } from "react";
import styles from "./Feed.module.css";
import globalStyles from "../Global.module.css";

class FeedLoading extends Component {
  state = {};
  render() {
    return (
      <div className={`${styles.Feed} ${globalStyles.overflowBox}`}>
        <div className={`${styles.Header} ${globalStyles.overflowBox}`}>
          <div>
            <div className={globalStyles.loadingImageCircle} />
            <div className={styles.info}>
              <div
                className={`user ${globalStyles.titleBarSmall} ${
                  globalStyles.animatedBackground
                }`}
              />
              <div
                className={`${globalStyles.titleBarSmall} ${
                  globalStyles.animatedBackground
                }  ${globalStyles.width100}`}
              />
            </div>
          </div>
        </div>
        <div
          className={`${globalStyles.contentBar} ${
            globalStyles.animatedBackground
          }`}
        />
        <div className={styles.footer}>
          <div className={styles.top}>
            <span
              className={`${globalStyles.titleBarSmall} ${
                globalStyles.animatedBackground
              } ${globalStyles.width100}`}
            />
            <div>
              <span>
                <span
                  className={`${globalStyles.titleBarSmall} ${
                    globalStyles.animatedBackground
                  } ${globalStyles.width100} ${styles.mark}`}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedLoading;
