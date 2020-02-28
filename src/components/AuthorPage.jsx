import React, { Component } from "react";
import * as api from "../api";
import ArticleTile from "./ArticleTile";
import ErrorPage from "./ErrorPage";

class AuthorPage extends Component {
  state = { articles: [], err: null };
  render() {
    if (this.state.err) return <ErrorPage err={this.state.err} />;
    return (
      <>
        <h1>Articles by {this.props.author}</h1>
        {!this.state.articles.length ? (
          <p>loading</p>
        ) : (
          this.state.articles.map(article => {
            return <ArticleTile key={article.article_id} article={article} />;
          })
        )}
      </>
    );
  }
  componentDidMount() {
    api.fetchArticlesByParam(this.props.author).then(authorArticles => {
      this.setState({ articles: authorArticles }).catch(err =>
        this.setState({ err: err })
      );
    });
  }
}

export default AuthorPage;
