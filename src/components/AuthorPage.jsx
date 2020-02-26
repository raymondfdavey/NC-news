import React, { Component } from "react";
import * as api from "../api";
import ArticleTile from "./ArticleTile";

class AuthorPage extends Component {
  state = { articles: [] };
  render() {
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
      this.setState({ articles: authorArticles });
    });
  }
}

export default AuthorPage;
