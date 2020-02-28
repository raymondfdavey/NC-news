import React from "react";

function OrderDropper(props) {
  return (
    <div className="orderSelectorArea">
      <div className="orderSelector">
        <select
          id="order"
          name="order"
          onChange={event => {
            return props.orderArticles(event.target.value);
          }}
        >
          {/* <option selected disabled>
        Sort By
      </option> */}
          <option value="" disabled selected hidden>
            Ascending or Descending
          </option>
          <option defaultValue value="desc">
            Descending
          </option>
          <option value="asc">Ascending</option>
        </select>
      </div>
    </div>
  );
}

export default OrderDropper;
