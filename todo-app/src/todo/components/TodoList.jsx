import { PALLETTE } from "../utils/utils.ts";

const TodoList = () => {
  return (
    <div
      style={{
        width: "50%",
        height: "100%",
        borderRight: `4px solid ${PALLETTE.DARK_PURPLE}`,
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ flexDirection: "row" }}>
        <input type="text" />
        <button>Add</button>
      </div>
    </div>
  );
};

export default TodoList;
