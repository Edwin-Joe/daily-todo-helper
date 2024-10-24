import { useState } from "react";
import { FONT_SIZES, IDS, PALLETTE, saveTodo } from "../../utils/utils.ts";

const AddTodo = ({ data, setData }) => {
  const [addTodo, setAddTodo] = useState("");
  const [errors, setErrors] = useState(false);

  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        height: "auto",
        gap: "8px",
      }}
    >
      <input
        type="text"
        id={IDS.ADD_TODO_INPUT}
        style={{
          borderRadius: "20px",
          height: "40px",
          width: "430px",
          backgroundColor: PALLETTE.LIGHT_PURPLE,
          color: PALLETTE.DARK_PURPLE,
          fontSize: FONT_SIZES.TEXT_INPUT,
          fontFamily: "Arial, sans-serif",
          padding: "10px",
          borderColor: errors ? PALLETTE.ERROR : undefined,
        }}
        value={addTodo}
        onInput={(event) => {
          setErrors(false);
          setAddTodo(event.target.value);
        }}
      />
      <button
        style={{
          borderRadius: "20px",
          height: "66px",
          width: "75px",
          backgroundColor: PALLETTE.DARK_PURPLE,
        }}
        onClick={() => {
          addTodo.length > 1
            ? saveTodo(addTodo, data, setData)
            : setErrors(true);
          setAddTodo("");
          console.log(data);
        }}
      >
        <span
          style={{ fontSize: FONT_SIZES.BUTTON_LABEL, color: PALLETTE.PINK }}
        >
          Add
        </span>
      </button>
    </div>
  );
};

export default AddTodo;
