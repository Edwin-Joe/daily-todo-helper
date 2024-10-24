import { FONT_SIZES, PALLETTE } from "todo/utils/utils.ts";
import CustomRadioButton from "./CustomRadioButton";
import { useState } from "react";

const Task = ({ data, setData, label, isCompleted, id }) => {
  const [checked, setChecked] = useState(isCompleted);
  return (
    <div
      id={id}
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        backgroundColor: PALLETTE.DARK_PURPLE,
        borderRadius: 20,
        padding: 10,
      }}
    >
      <div style={{ paddingLeft: 5 }}>
        <CustomRadioButton
          data={data}
          setData={setData}
          id={id}
          isCompleted={checked}
          setChecked={setChecked}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: FONT_SIZES.BUTTON_LABEL,
            color: PALLETTE.LIGHT_PURPLE,
            fontFamily: "sans-serif",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
};

export default Task;
