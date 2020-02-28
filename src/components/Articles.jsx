import React, { Component } from "react";
import axios from "axios";
// import ArticleTiles from "./ArticleTile";
import SortByDropper from "./SortByDropper";
import ArticleTile from "./ArticleTile";
import OrderDropper from "./OrderDropper";
import ErrorPage from "./ErrorPage";

// import TopicDropper from "./TopicDropper";
// import { Router } from "@reach/router";
// import ArticlePage from "../components/ArticlePage";

class Articles extends Component {
  state = {
    articles: [],
    sortBy: "comment_count",
    isLoading: "true",
    order: "desc",
    err: null
  };
  render() {
    if (this.state.err) return <ErrorPage err={this.state.err} />;
    return (
      <>
        <div className="dopperHolder">
          <SortByDropper sortArticles={this.sortArticles} />
          <OrderDropper orderArticles={this.orderArticles} />
        </div>

        <div className="articleContainer">
          {!this.state.articles.length ? (
            <h1>Loading</h1>
          ) : (
            this.state.articles.map(article => {
              return <ArticleTile key={article.article_id} article={article} />;
            })
          )}
        </div>
      </>
    );
  }

  // componentDidMount() {
  //   this.fetchArticles().then(({ data: { articles } }) =>
  //     this.setState({ articles: articles })
  //   );
  // }
  // chosenTopic = topic => {
  //   this.setState({ topic: topic });
  // };
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
          this.state.sortBy +
          "&order=" +
          this.state.order
      )
      .catch(err => this.setState({ err: err }));
  };

  orderArticles = order => {
    this.setState({ order: order });
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
    if (prevState.order !== this.state.order) {
      this.fetchArticles().then(({ data: { articles } }) =>
        this.setState({ articles: articles })
      );
    }
  }
}

export default Articles;
