import React, { Component } from "react";
import Header from "./components/Header";
import Articles from "./components/Articles";
import { Router } from "@reach/router";
import ArticlePage from "./components/ArticlePage";
import Topics from "./components/Topics";
import TopicsPage from "./components/TopicsPage";
import Nav from "./components/Nav";
import AuthorPage from "./components/AuthorPage";

//reformat vote so it's correct as per lecture
//generalise some stuff

class App extends Component {
  state = { username: "jessjelly" };
  render() {
    return (
      <>
        <div className="bannerArea">
          <Header className="header" username={this.state.username} />
          <Nav />
        </div>
        <Router>
          <Articles path="/" />
          <Articles path="/articles" />
          <ArticlePage path="/articles/:article_id" />
          <Topics path="/topics" />
          <TopicsPage path="/topics/:topic/articles" />
          <AuthorPage path="/author/:author" />
        </Router>
      </>
    );
  }
}

export default App;
