import React from "react";
import { Link } from "@reach/router";
const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent && "red"
          // "border-left": isCurrent && "solid black",
          // "border-right": isCurrent && "solid black",
          // "padding-left": isCurrent && "1em",
          // "padding-right": isCurrent && "1em"
        }
      };
    }}
  />
);

function Nav(props) {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/articles">Current Articles</NavLink>
      <NavLink to="/topics">Topics</NavLink>
      <NavLink to="/authors">Contributors</NavLink>
    </nav>
  );
}

export default Nav;

// /*
// const NavLink = props => (
//   <Link
//     {...props}
//     getProps={({ isCurrent }) => {
//       the object returned here is passed to the
//       anchor element's props
//       return {
//         style: {
//           "background-color": isCurrent && "red",
//           color: isCurrent && "white"
//         }
//       };
//     }}
//   />
// );

// function Nav(props) {
//   return (
//     <nav>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/about">About</NavLink>
//       <NavLink to="projects">Projects</NavLink>
//     </nav>
//   );
// }
// */
