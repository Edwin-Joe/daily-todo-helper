import { FONT_SIZES } from "todo/utils/utils.ts";

const Task = ({ label, isCompleted, id }) => {
  return (
    <div id={id} style={{ display: "flex", flexDirection: "row" }}>
      <input type="radio" defaultChecked={isCompleted} />
      <span style={{ fontSize: FONT_SIZES.LABEL }}>{label}</span>
    </div>
  );
};

export default Task;
