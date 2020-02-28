import React, { Component } from "react";
import TopicDropper from "./TopicDropper";
// import { Router } from "@reach/router";
// import TopicsPage from "./TopicsPage";

// DO COMMENTS VOTE INCREMENT
// DO POST COMMENT/ARTICLE
//REFACTOR

class Topics extends Component {
  state = { topic: null, articles: [] };
  render() {
    return (
      <>
        <TopicDropper chosenTopic={this.chosenTopic} />
        {!this.state.articles.length ? (
          <p>Articles for your chosen topic will appear here</p>
        ) : null}
      </>
    );
  }
  chosenTopic = topic => {
    this.setState({ topic: topic });
  };

  // componentDidMount = () => {
  //   fetchAllArticles().then(articles => {
  //     console.log("HJSHDJKHJDH");

  //     this.setState({ articles: articles });
  //   });
  // };

  // sortArticles = sortTerm => {
  //   this.setState({ sortBy: sortTerm });
  // };
}

export default Topics;
