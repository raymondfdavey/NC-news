import React from "react";
import { Link } from "@reach/router";
function Header(props) {
  return (
    <header>
      <h1>NC-NEWS</h1>
      <p>
        user <Link to={`/author/${props.username}`}> {props.username} </Link>
        logged in
      </p>
    </header>
  );
}

export default Header;
