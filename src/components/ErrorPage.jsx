import React from "react";

function ErrorPage(props) {
  return (
    <div>ERROR PAGE{console.log(props.err, "HEHREHEHRHH IN ERROR PAGE")}</div>
  );
}

export default ErrorPage;
