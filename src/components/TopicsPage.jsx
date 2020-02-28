import React, { Component } from "react";
import axios from "axios";
import TopicDropper from "./TopicDropper";
import ArticleTile from "./ArticleTile";
import SortByDropper from "./SortByDropper";

class TopicsPage extends Component {
  state = { articles: [], sortBy: "comment_count" };
  render() {
    return (
      <>
        <TopicDropper />
        <SortByDropper sortArticles={this.sortArticles} />
        <h2>Topic: {this.props.topic}</h2>
        {!this.state.articles.length ? (
          <h1>loading</h1>
        ) : (
          <div className="articleContainer">
            {this.state.articles.map(article => {
              return <ArticleTile key={article.article_id} article={article} />;
            })}
          </div>
        )}
      </>
    );
  }

  componentDidMount() {
    axios
      .get(
        "https://nc-news-rfd.herokuapp.com/articles?topic=" + this.props.topic
      )
      .then(({ data: { articles } }) => {
        this.setState({ articles: articles });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      axios
        .get(
          "https://nc-news-rfd.herokuapp.com/articles?topic=" + this.props.topic
        )
        .then(({ data: { articles } }) => {
          this.setState({ articles: articles });
        });
    }
    if (prevState.sortBy !== this.state.sortBy) {
      axios
        .get(
          "https://nc-news-rfd.herokuapp.com/articles?topic=" +
            this.props.topic +
            "&sort_by=" +
            this.state.sortBy
        )
        .then(({ data: { articles } }) => {
          this.setState({ articles: articles });
        });
    }
  }

  sortArticles = sortTerm => {
    this.setState({ sortBy: sortTerm });
  };
}

export default TopicsPage;
