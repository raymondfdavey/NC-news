import React, { Component } from "react";
import { postCommentToDatabase } from "../api";

class CommentAdder extends Component {
  state = { textInput: "", username: "jessjelly" };
  render() {
    return (
      <>
        <form onSubmit={this.postComment}>
          <input
            type="text"
            value={this.state.textInput}
            onChange={this.handleChange}
          ></input>
          <button>Post Comment</button>
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
      .then(this.setState({ textInput: "" }));
  };
}

export default CommentAdder;
