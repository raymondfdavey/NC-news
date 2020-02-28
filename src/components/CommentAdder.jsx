import React, { Component } from "react";
import { postCommentToDatabase } from "../api";
import ErrorPage from "./ErrorPage";

class CommentAdder extends Component {
  state = { textInput: "", username: "jessjelly", err: null };
  render() {
    if (this.state.err) return <ErrorPage err={this.state.err} />;
    return (
      <>
        <form className="postCommentForm" onSubmit={this.postComment}>
          <button className="postCommentButton">Leave a comment</button>
          <textarea
            className="commentInputBox"
            type="text"
            placeholder="enter your comment"
            value={this.state.textInput}
            onChange={this.handleChange}
          ></textarea>
        </form>
      </>
    );
  }
  handleChange = event => {
    this.setState({ textInput: event.target.value });
  };

  postComment = event => {
    event.preventDefault();
    postCommentToDatabase(
      this.props.article_id,
      this.state.textInput,
      this.state.username
    )
      .then(({ data: { comment } }) => this.props.updateComments(comment))
      .then(this.setState({ textInput: "" }))
      .catch(err => this.setState({ err: err }));
  };
}

export default CommentAdder;
