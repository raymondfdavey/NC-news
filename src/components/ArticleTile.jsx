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
        <ul className="articleTile" key={article_id}>
          <li className="articleTileTitle">
            <Link to={`/articles/${article_id}`}>{title}</Link>
          </li>
          <div className="articleDetails">
            {window.location.href.length > 30 ? (
              <li>{body}</li>
            ) : (
              <li>{`${body.split(".")[0].toString()}...`}</li>
            )}
            <br />
            <li>
              <Link to={`/author/${author}`}>by: {author}</Link>
            </li>
            <li>{new Date(created_at).toDateString()}</li>
            <li>
              <Link to={`/topics/${topic}/articles`}>topic: {topic}</Link>
            </li>
            <li>
              {" "}
              <Link to={`/articles/${article_id}`}>
                comments: {comment_count}
              </Link>
            </li>
            <li>votes: {this.state.votes}</li>
          </div>
          <Vote
            changeVotes={this.changeVotes}
            votes={votes}
            article_id={article_id}
            updatingVotes={this.state.votes}
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
