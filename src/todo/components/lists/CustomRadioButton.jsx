import React from "react";
import "./CustomRadioButton.css";
import { handleCheck, playEnter } from "todo/utils/utils.ts";

const CustomRadioButton = ({ data, setData, id, isCompleted, setChecked }) => {
  return (
    <label className="custom-radio">
      <input
        type="radio"
        checked={isCompleted}
        onClick={() => {
          handleCheck(data, setData, id);
          setChecked(!isCompleted);
          !isCompleted && playEnter();
        }}
      />
      <span className="radio-checkmark"></span>
    </label>
  );
};

export default CustomRadioButton;
