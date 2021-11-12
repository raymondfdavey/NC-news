import React, { Component } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import ErrorPage from "./ErrorPage";

class TopicDropper extends Component {
  state = { topics: [], err: null };
  render() {
    if (this.state.err) return <ErrorPage err={this.state.err} />;
    return (
      <div className="topicSelectorArea">
        <div className="topicSelector">
          {this.state.topics.length ? (
            <select
              id="topics"
              name="topics"
              onChange={event => {
                navigate(`/topics/${event.target.value}/articles`);
              }}
            >
              <option value="" disabled selected hidden>
                Choose a Topic
              </option>
              {this.state.topics.map(topic => {
                return (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                );
              })}
            </select>
          ) : null}
        </div>
      </div>
    );
  }
  componentDidMount() {
    axios
      .get("https://news-of-the-north-server.herokuapp.com/api/topics")
      .then(({ data: { topics } }) => {
        const slugs = topics.map(topic => topic.slug);
        this.setState({ topics: slugs });
      });
  }
}

export default TopicDropper;
