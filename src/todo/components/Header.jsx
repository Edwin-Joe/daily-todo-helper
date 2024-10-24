import { clearTodos, FONT_SIZES, getTodos, PALLETTE } from "../utils/utils.ts";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: PALLETTE.DARK_PURPLE,
        width: "100%",
        height: "90px",
        paddingTop: "10px",
        justifyContent: "flex-start",
      }}
    >
      <text
        style={{
          fontSize: FONT_SIZES.HEADER,
          paddingLeft: 80,
          color: PALLETTE.PINK,
        }}
      >
        To-do-helper
      </text>
      <button
        onClick={() => {
          const todos = getTodos();
          console.log(todos);
        }}
      >
        test
      </button>
      <button
        onClick={() => {
          clearTodos();
        }}
      >
        clear X
      </button>
    </div>
  );
};

export default Header;
