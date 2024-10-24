import { useState } from "react";
import { getTodos, PALLETTE } from "../utils/utils.ts";
import TodoList from "./lists/TodoList.jsx";

const PageBody = () => {
  const [data, setData] = useState(getTodos());
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: PALLETTE.PURPLE,
        flexDirection: "row",
      }}
    >
      <TodoList data={data} setData={setData} />
    </div>
  );
};

export default PageBody;
