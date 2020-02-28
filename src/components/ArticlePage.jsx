import React, { Component } from "react";
import axios from "axios";
import ArticleTile from "./ArticleTile";
import CommentTiles from "./CommentTiles";
import CommentAdder from "./CommentAdder";

class ArticlePage extends Component {
  state = {
    article: {},
    comments: [],
    username: "jessjelly"
  };
  render() {
    return (
      <>
        {console.log(this.props.uri, "IN HEREREE")}
        {this.state.comments.length &&
        Object.keys(this.state.article).length ? (
          <>
            <div className="holdArticleAndComment">
              <ArticleTile article={this.state.article} />
              <CommentAdder
                updateComments={this.updateComments}
                article_id={this.state.article.article_id}
              />
            </div>
            <div className="commentContainer">
              <h3>Comments</h3>
              {this.state.comments.map(singleComment => {
                return (
                  <CommentTiles
                    removeComment={this.removeComment}
                    username={this.state.username}
                    key={singleComment.comment_id}
                    comment={singleComment}
                  />
                );
              })}
              />
            </div>
          </>
        ) : (
          <p>loading...</p>
        )}
      </>
    );
  }

  componentDidMount() {
    axios
      .get(
        "https://nc-news-rfd.herokuapp.com/articles/" + this.props.article_id
      )
      .then(({ data: { article } }) => {
        this.setState({ article: article });
      });

    axios
      .get(
        "https://nc-news-rfd.herokuapp.com/articles/" +
          this.props.article_id +
          "/comments?sort_by=created_at"
      )
      .then(({ data: { comments } }) => {
        this.setState({ comments: comments });
      });
  }

  updateComments = comment => {
    this.setState({ comments: [comment, ...this.state.comments] });
  };

  removeComment = deletedComment_id => {
    this.setState(currentState => {
      const newComments = currentState.comments.filter(comment => {
        return comment.comment_id !== deletedComment_id;
      });
      return { comments: newComments };
    });
  };
}

export default ArticlePage;
