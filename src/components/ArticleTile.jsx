// import React from "react";
import { Link } from "@reach/router";
import Vote from "./Vote";
import React, { Component } from "react";

class ArticleTile extends Component {
  state = { votes: this.props.article.votes };
  render() {
    const { article } = this.props;

    const {
      title,
      body,
      author,
      votes,
      topic,
      comment_count,
      article_id,
      created_at
    } = article;
    return (
      <>
        <ul key={article_id}>
          <li>
            <h3>
              <Link to={`/articles/${article_id}`}>Title: {title}</Link>
            </h3>
          </li>
          <li>Article: {body}</li>
          <li>Article ID: {article_id}</li>
          <li>
            <Link to={`/author/${author}`}>Author: {author}</Link>
          </li>
          <li>
            <Link to={`/topics/${topic}/articles`}>Topic: {topic}</Link>
          </li>
          <li>
            {" "}
            <Link to={`/articles/${article_id}`}>
              No. of Comments: {comment_count}
            </Link>
          </li>
          <li>Date Created: {created_at}</li>
          <li>No. of Votes: {this.state.votes}</li>
          <Vote
            changeVotes={this.changeVotes}
            votes={votes}
            article_id={article_id}
          />
        </ul>
      </>
    );
  }
  changeVotes = value => {
    const newVoteCount = this.state.votes + +value;
    this.setState({ votes: newVoteCount });
  };
}

export default ArticleTile;
