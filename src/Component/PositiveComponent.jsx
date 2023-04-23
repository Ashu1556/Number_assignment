import React, { useState } from "react";

const PositiveComponent = () => {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    const value = event.target.value;

    if (isNaN(value) || value === "") {
      setInputValue("");
    } else if (value < 0) {
      setInputValue("enter a positive value");
    } else if (value % 2 === 0) {
      setInputValue(`${+value + 2}, ${+value + 4}, ${+value + 6}`);
    } else {
      setInputValue(`${+value + 2}, ${+value + 4}, ${+value + 6}`);
    }
  }

  return (
    <div style={{ margin: "100px 80px", textAlign: "center" }}>
      <label htmlFor="number-input">Enter a number:</label>
      <input id="number-input" type="number" onChange={handleChange} />
      <br></br>

      {inputValue}
    </div>
  );
};

export default PositiveComponent;
