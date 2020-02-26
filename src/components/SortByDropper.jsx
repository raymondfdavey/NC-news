import React from "react";

function SortByDropper(props) {
  return (
    <select
      id="sortTerms"
      name="sortTerms"
      onChange={event => {
        return props.sortArticles(event.target.value);
      }}
    >
      {/* <option selected disabled>
        Sort By
      </option> */}
      <option defaultValue value="comment_count">
        Comments
      </option>
      <option value="created_at">Date Created</option>
      <option value="votes">Number of Votes</option>
    </select>
  );
}

export default SortByDropper;
