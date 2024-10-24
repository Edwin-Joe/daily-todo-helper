import React from "react";
import "./CustomRadioButton.css";
import { handleCheck } from "todo/utils/utils.ts";

const CustomRadioButton = ({ data, setData, id, isCompleted, setChecked }) => {
  return (
    <label className="custom-radio">
      <input
        type="radio"
        checked={isCompleted}
        onClick={() => {
          console.log("checked");
          handleCheck(data, setData, id);
          setChecked(!isCompleted);
        }}
      />
      <span className="radio-checkmark"></span>
    </label>
  );
};

export default CustomRadioButton;
