import React, { Component } from "react";
import styles from "./TrendingList.module.css";
import TrendingItem from "./TrendingItem/TrendingItem";
import { Link } from "react-router-dom";
import API from "../../api/Api";

export default class TrendingList extends Component {
  state = {
    dataLoaded: false,
    trending: []
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
    return (
      <div className={styles.TrendingList}>
        <h4>Trending</h4>
        <div>
          {!this.state.dataLoaded
            ? "Loading"
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
    );
  }
}
