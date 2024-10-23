import { PALLETTE } from "../utils/utils.ts";

const TodoList = () => {
  return (
    <div
      style={{
        width: "50%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "60px",
      }}
    >
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
          style={{
            borderRadius: "20px",
            height: "60px",
            width: "450px",
            backgroundColor: PALLETTE.LIGHT_PURPLE,
          }}
        />
        <button
          style={{
            borderRadius: "20px",
            height: "66px",
            width: "75px",
            backgroundColor: PALLETTE.DARK_PURPLE,
          }}
        >
          <span style={{ fontSize: 32, color: PALLETTE.PINK }}>Add</span>
        </button>
      </div>
    </div>
  );
};

export default TodoList;
