import React, { Component } from "react";
import { articleVotePatch } from "../api";
import { commentVotePatch } from "../api";

class Vote extends Component {
  render() {
    return (
      <div>
        <button
          value="1"
          onClick={event => {
            this.handleVote(event);
          }}
        >
          UpVote
        </button>
        <button
          value="-1"
          onClick={event => {
            this.handleVote(event);
          }}
        >
          DownVote
        </button>
      </div>
    );
  }

  handleVote(event) {
    if (this.props.article_id) {
      articleVotePatch(this.props.article_id, event.target.value);
      this.props.changeVotes(event.target.value);
    }
    if (this.props.comment_id) {
      commentVotePatch(this.props.comment_id, event.target.value);
      this.props.changeCommentVotes(event.target.value);
    }
  }
}

export default Vote;
