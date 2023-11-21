import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Location = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div className="alert alert-secondary">
      <label for="currency-select">Currency:{" "}</label>
      {
        <select
          name="currency"
          id="currency-select"
          onChange={(event) => changeCurrency(event.target.value)}
        >
          <option value="$">$ Dollar</option>
          <option value="£" selected>£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
        </select>
      }
    </div>
  );
};

export default Location;
