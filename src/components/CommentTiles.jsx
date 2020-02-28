import React, { Component } from "react";
import Vote from "./Vote";
import * as api from "../api";
import { Link } from "@reach/router";
import ErrorPage from "./ErrorPage";

class CommentTiles extends Component {
  state = { votes: this.props.comment.votes, err: null };
  render() {
    if (this.state.err) return <ErrorPage err={this.state.err} />;
    const { comment_id, author, created_at, body } = this.props.comment;
    return (
      <>
        <ul className="commentTile" key={comment_id}>
          <Link to={`/author/${author}`}>{author}</Link>
          <li>{body}</li>
          <li>{new Date(created_at).toDateString()}</li>
          <li>Votes: {this.state.votes}</li>
          <div className="buttonContainer">
            <Vote
              changeCommentVotes={this.changeCommentVotes}
              comment_id={comment_id}
            />
            {this.props.username === author ? (
              <button
                className="deleteButton"
                onClick={() => this.deleteComment(comment_id)}
              >
                Delete Your Comment
              </button>
            ) : null}
          </div>
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
      .then(this.props.removeComment(comment_id))
      .catch(err => this.setState({ err: err }));
  };
}

export default CommentTiles;
