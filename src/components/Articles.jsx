import React, { Component } from "react";
import axios from "axios";
// import ArticleTiles from "./ArticleTile";
import SortByDropper from "./SortByDropper";
import TopicDropper from "./TopicDropper";
import ArticleTile from "./ArticleTile";
// import TopicDropper from "./TopicDropper";
// import { Router } from "@reach/router";
// import ArticlePage from "../components/ArticlePage";

class Articles extends Component {
  state = {
    articles: [],
    sortBy: "comment_count",
    isLoading: "true"
  };
  render() {
    return (
      <>
        <div>top articles</div>
        <TopicDropper chosenTopic={this.chosenTopic} />
        <SortByDropper sortArticles={this.sortArticles} />
        {!this.state.articles.length ? (
          <h1>Loading</h1>
        ) : (
          this.state.articles.map(article => {
            return <ArticleTile key={article.article_id} article={article} />;
          })
        )}
      </>
    );
  }

  componentDidMount() {
    this.fetchArticles().then(({ data: { articles } }) =>
      this.setState({ articles: articles })
    );
  }
  chosenTopic = topic => {
    this.setState({ topic: topic });
  };

  fetchArticles = () => {
    return axios
      .get(
        "https://nc-news-rfd.herokuapp.com/api/articles?sort_by=" +
          this.state.sortBy
      )
      .catch(err => console.log(err));
  };

  sortArticles = sortTerm => {
    this.setState({ sortBy: sortTerm });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBy !== this.state.sortBy) {
      this.fetchArticles().then(({ data: { articles } }) =>
        this.setState({ articles: articles })
      );
    }
  }
}

export default Articles;
