import { PALLETTE } from "../utils/utils.ts";
import CompletedList from "./CompletedList.jsx";
import TodoList from "./TodoList.jsx";

const PageBody = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: PALLETTE.PURPLE,
        flexDirection: "row",
      }}
    >
      <TodoList />
      <CompletedList />
    </div>
  );
};

export default PageBody;
