import React, { Component } from "react";
import axios from "axios";
import TopicDropper from "./TopicDropper";
import ArticleTile from "./ArticleTile";
import SortByDropper from "./SortByDropper";
import ErrorPage from "./ErrorPage";

class TopicsPage extends Component {
  state = { articles: [], sortBy: "comment_count", err: null };
  render() {
    if (this.state.err) return <ErrorPage err={this.state.err} />;
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
        "https://news-of-the-north-server.herokuapp.com/articles?topic=" + this.props.topic
      )
      .then(({ data: { articles } }) => {
        this.setState({ articles: articles });
      })
      .catch(err => this.setState({ err: err }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      axios
        .get(
          "https://news-of-the-north-server.herokuapp.com/articles?topic=" + this.props.topic
        )
        .then(({ data: { articles } }) => {
          this.setState({ articles: articles });
        })
        .catch(err => this.setState({ err: err }));
    }
    if (prevState.sortBy !== this.state.sortBy) {
      axios
        .get(
          "https://news-of-the-north-server.herokuapp.com/articles?topic=" +
            this.props.topic +
            "&sort_by=" +
            this.state.sortBy
        )
        .then(({ data: { articles } }) => {
          this.setState({ articles: articles });
        })
        .catch(err => this.setState({ err: err }));
    }
  }

  sortArticles = sortTerm => {
    this.setState({ sortBy: sortTerm });
  };
}

export default TopicsPage;
