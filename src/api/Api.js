import React from "react";
export default class Api extends React.Component {
  constructor(props) {
    super(props);
    this.makeApiCall = this.makeApiCall.bind(this);
    this.getTrendingPost = this.getTrendingPost.bind(this);
  }
  state = {
    resultcallResponse: null
  };
  async makeApiCall(options) {
    let host = "http://" + window.location.hostname;
    let url = host + "/development/Wedeyy/Backend/api/";
    let header = new Headers({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data"
    });
    //url = "https://jsonplaceholder.typicode.com/todos/1";
    const responseData = await fetch(url, {
      header: header,
      method: "POST",
      body: options
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("Data: " + JSON.stringify(data));
        return data;
      })
      .catch(error => {
        alert("Error Found: " + error);
        console.error("Error while fetching data: " + error);
      });
    return responseData;
  }

  async getTrendingPost() {
    let formData = new FormData();
    formData.append("code", "3802270155");
    const result = await this.makeApiCall(formData);
    return result;
  }

  async getFollowSuggestion(peopleRsn) {
    let formData = new FormData();
    formData.append("code", "3802274212");
    formData.append("dataPeopleRsn", peopleRsn);
    const result = await this.makeApiCall(formData);
    return result;
  }

  async getWedeyyFeeds(peopleRsn) {
    let formData = new FormData();
    formData.append("code", "3802229692");
    formData.append("dataPeopleRsn", peopleRsn);
    const result = await this.makeApiCall(formData);
    return result;
  }
}
