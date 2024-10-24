import { useState } from "react";
import {
  FONT_SIZES,
  IDS,
  isMobileDevice,
  PALLETTE,
  playEnter,
  playError,
  playKeyboardPress,
  saveTodo,
} from "../../utils/utils.ts";

const AddTodo = ({ data, setData }) => {
  const isMobile = isMobileDevice();
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
          width: !isMobile ? "430px" : "250px",
          backgroundColor: PALLETTE.LIGHT_PURPLE,
          color: PALLETTE.DARK_PURPLE,
          fontSize: FONT_SIZES.TEXT_INPUT,
          fontFamily: "Arial, sans-serif",
          padding: !isMobile ? "10px" : undefined,
          borderColor: errors ? PALLETTE.ERROR : undefined,
        }}
        value={addTodo}
        onInput={(event) => {
          playKeyboardPress();
          setErrors(false);
          setAddTodo(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            addTodo.length > 1
              ? saveTodo(addTodo, data, setData)
              : setErrors(true);
            setAddTodo("");
            playEnter();
          }
        }}
      />
      <button
        style={{
          borderRadius: "20px",
          height: !isMobile ? "66px" : "48px",
          width: !isMobile ? "75px" : "48px",
          backgroundColor: PALLETTE.DARK_PURPLE,
        }}
        onClick={() => {
          addTodo.length > 1
            ? saveTodo(addTodo, data, setData)
            : setErrors(true);
          setAddTodo("");
          if (addTodo.length < 1) {
            playError();
          }
        }}
      >
        <span
          style={{
            fontSize: !isMobile ? FONT_SIZES.MOBILE : undefined,
            color: PALLETTE.PINK,
          }}
        >
          Add
        </span>
      </button>
    </div>
  );
};

export default AddTodo;
