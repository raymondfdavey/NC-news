import React from "react";

function SortByDropper(props) {
  return (
    <div className="sortBySelectorArea">
      <div className="sortBySelector">
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
          <option value="" disabled selected hidden>
            Sort Articles
          </option>
          <option defaultValue value="comment_count">
            Number of Comments
          </option>
          <option value="created_at">Date Created</option>
          <option value="votes">Number of Votes</option>
        </select>
      </div>
    </div>
  );
}

export default SortByDropper;
