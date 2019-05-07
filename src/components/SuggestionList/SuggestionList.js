import React, { Component } from "react";
import styles from "./SuggestionList.module.css";
import globalStyles from "../Global.module.css";
import SuggestionItem from "./SuggestionItem/SuggestionItem";
import Api from "./../../api/Api";

export default class SuggestionList extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    dataLoaded: false,
    suggestions: [],
    label: "Loading..."
  };
  async componentDidMount() {
    const api = new Api();
    let suggestionData = await api.getFollowSuggestion(this.props.peopleRsn);
    this.setState({
      suggestions: suggestionData.data,
      label: suggestionData.label,
      dataLoaded: true
    });
    console.log(styles);
  }
  render() {
    let suggest = this.state.suggestions.map((user, index) => {
      return (
        <SuggestionItem
          avatar={user.PROFILEPICTURE}
          username={user.FULLNAME}
          key={user.FULLNAME + index}
        />
      );
    });
    return (
      <div className={styles.SuggestionList}>
        <h4>
          {this.state.dataLoaded ? (
            this.state.label
          ) : (
            <div
              className={`${globalStyles.titleBar} ${
                globalStyles.animatedBackground
              }`}
            />
          )}
        </h4>
        <div>{this.state.dataLoaded ? suggest : "LOADING..."}</div>
      </div>
    );
  }
}
