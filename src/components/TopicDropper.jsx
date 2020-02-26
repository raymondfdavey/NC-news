import React, { Component } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

class TopicDropper extends Component {
  state = { topics: [] };
  render() {
    return (
      <>
        {this.state.topics.length ? (
          <select
            id="topics"
            name="topics"
            onChange={event => {
              navigate(`/topics/${event.target.value}/articles`);
            }}
          >
            {this.state.topics.map(topic => {
              return (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              );
            })}
          </select>
        ) : null}
      </>
    );
  }
  componentDidMount() {
    axios
      .get("https://nc-news-rfd.herokuapp.com/api/topics")
      .then(({ data: { topics } }) => {
        const slugs = topics.map(topic => topic.slug);
        this.setState({ topics: slugs });
      });
  }
}

export default TopicDropper;
