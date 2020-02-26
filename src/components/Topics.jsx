import React, { Component } from "react";
import TopicDropper from "./TopicDropper";
// import { Router } from "@reach/router";
// import TopicsPage from "./TopicsPage";
import { fetchAllArticles } from "../api";
import ArticleTile from "./ArticleTile";
import SortByDropper from "./SortByDropper";

// DO COMMENTS VOTE INCREMENT
// DO POST COMMENT/ARTICLE
//REFACTOR

class Topics extends Component {
  state = { topic: null, articles: [] };
  render() {
    return (
      <>
        <SortByDropper sortArticles={this.sortArticles} />
        <TopicDropper chosenTopic={this.chosenTopic} />
        <h1>CHOOSE A TOPIC</h1>
        {!this.state.articles.length ? (
          <p>Topics loading</p>
        ) : (
          this.state.articles.map(article => {
            return <ArticleTile key={article.article_id} article={article} />;
          })
        )}
      </>
    );
  }
  chosenTopic = topic => {
    this.setState({ topic: topic });
  };

  componentDidMount = () => {
    fetchAllArticles().then(articles => {
      console.log("HJSHDJKHJDH");

      this.setState({ articles: articles });
    });
  };

  sortArticles = sortTerm => {
    this.setState({ sortBy: sortTerm });
  };
}

export default Topics;
