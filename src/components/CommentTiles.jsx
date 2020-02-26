import React, { Component } from "react";
import Vote from "./Vote";
import * as api from "../api";
import { Link } from "@reach/router";

class CommentTiles extends Component {
  state = { votes: this.props.comment.votes };
  render() {
    const { comment_id, author, created_at, body } = this.props.comment;
    return (
      <>
        <ul key={comment_id}>
          <li>Comment ID: {comment_id}</li>
          <Link to={`/author/${author}`}>Author: {author}</Link>
          <li>Comment: {body}</li>
          <li>Time of Comment: {created_at}</li>
          <li>No. of Votes: {this.state.votes}</li>
          <Vote
            changeCommentVotes={this.changeCommentVotes}
            comment_id={comment_id}
          />
          {this.props.username === author ? (
            <button onClick={() => this.deleteComment(comment_id)}>
              Delete Comment
            </button>
          ) : null}
        </ul>
      </>
    );
  }
  changeCommentVotes = value => {
    const newVoteCount = this.state.votes + +value;
    this.setState({ votes: newVoteCount });
  };

  deleteComment = comment_id => {
    api
      .deleteCommentFromDatabase(comment_id)
      .then(this.props.removeComment(comment_id));
  };
}

export default CommentTiles;
