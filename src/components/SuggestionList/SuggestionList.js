import React, { Component } from "react";
import styles from "./SuggestionList.module.css";
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
  }
  render() {
    let suggest = this.state.suggestions.map((user, index) => {
      return (
        <SuggestionItem
          avatar={user.profilepicture}
          username={user.fullname}
          key={user.username + index}
        />
      );
    });
    return (
      <div className={styles.SuggestionList}>
        <h4>
          {this.state.dataLoaded ? this.state.label : "BECAUSE YOU FOLLOWED"}
        </h4>
        <div>{this.state.dataLoaded ? suggest : "LOADING..."}</div>
      </div>
    );
  }
}
