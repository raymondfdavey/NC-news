import React from "react";
import { Link } from "@reach/router";
const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          backgroundColor: isCurrent && "red",
          color: isCurrent && "white"
        }
      };
    }}
  />
);

function Nav(props) {
  return (
    <nav>
      <NavLink to="/articles">Articles</NavLink>
      <NavLink to="/topics">Topics</NavLink>
      <NavLink to="login">Login</NavLink>
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
