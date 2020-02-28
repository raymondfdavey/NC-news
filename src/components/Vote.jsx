import React, { Component } from "react";
import { articleVotePatch } from "../api";
import { commentVotePatch } from "../api";
import ErrorPage from "./ErrorPage";

class Vote extends Component {
  state = { voted: false, err: null };
  render() {
    if (this.state.err) return <ErrorPage err={this.state.err} />;

    return (
      <div className="voteButtons">
        <button
          className="button"
          value="1"
          disabled={this.state.voted}
          onClick={event => {
            this.handleVote(event);
          }}
        >
          UpVote
        </button>
        <button
          className="button"
          value="-1"
          disabled={this.state.voted}
          onClick={event => {
            this.handleVote(event);
          }}
        >
          DownVote
        </button>
        {this.state.voted ? "  You have voted!" : null}
      </div>
    );
  }

  handleVote(event) {
    if (this.props.article_id) {
      articleVotePatch(this.props.article_id, event.target.value).catch(err =>
        this.setState({ err: err })
      );
      this.props.changeVotes(event.target.value);
      this.setState({ voted: true });
    }
    if (this.props.comment_id) {
      commentVotePatch(this.props.comment_id, event.target.value).catch(err =>
        this.setState({ err: err })
      );
      this.props.changeCommentVotes(event.target.value);
      this.setState({ voted: true });
    }
  }
}

export default Vote;
