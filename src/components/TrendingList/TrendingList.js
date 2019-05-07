import React, { Component } from "react";
import styles from "./TrendingList.module.css";
import globalStyles from "../Global.module.css";
import TrendingItem from "./TrendingItem/TrendingItem";
import { Link } from "react-router-dom";
import API from "../../api/Api";

export default class TrendingList extends Component {
  state = {
    dataLoaded: false,
    trending: [],
    counter: 0
  };

  async componentDidMount() {
    const api = new API();
    let trending = await api.getTrendingPost();
    await this.setState({
      dataLoaded: true,
      trending: trending === undefined ? [] : trending
    });
  }
  render() {
    let lt = [{}, {}, {}];
    let loadingTrending = lt.map((trendingItem, index) => {
      return (
        <Link to="/explore/top" key={index}>
          <TrendingItem loading={true} count={index + 1} />
        </Link>
      );
    });
    return (
      <div className={styles.animatedBackground}>
        <div className={styles.TrendingList}>
          <h4>
            {this.state.dataLoaded ? (
              "Trending"
            ) : (
              <div
                className={`${globalStyles.titleBar} ${
                  globalStyles.animatedBackground
                }`}
              />
            )}
          </h4>
          <div>
            {!this.state.dataLoaded
              ? loadingTrending
              : this.state.trending.map((trendingItem, index) => {
                  return (
                    <Link to="/explore/top" key={index}>
                      <TrendingItem
                        background={trendingItem.POSTPICTURE}
                        username={trendingItem.FULLNAME}
                        avatar={trendingItem.PROFILEPICTURE}
                        videoLength={trendingItem.videoLength}
                        count={index + 1}
                      />
                    </Link>
                  );
                })}
          </div>
        </div>
      </div>
    );
  }
}
