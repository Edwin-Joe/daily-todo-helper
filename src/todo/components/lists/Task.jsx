import { FONT_SIZES, PALLETTE, removeEntryById } from "todo/utils/utils.ts";
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
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: FONT_SIZES.BUTTON_LABEL,
            color: PALLETTE.LIGHT_PURPLE,
            fontFamily: "sans-serif",
            textAlign: "center",
            flex: 1,
          }}
        >
          {label}
        </span>
        <div
          style={{
            cursor: "pointer",
            height: "100%",
            paddingRight: "10px",
            fontSize: FONT_SIZES.LABEL,
            color: PALLETTE.PINK,
          }}
          onClick={() => {
            removeEntryById(id, data, setData);
          }}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default Task;