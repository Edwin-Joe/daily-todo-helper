import AddTodo from "./AddTodo";
import Todos from "./Todos";

const TodoList = ({ data, setData }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "60px",
        flexDirection: "column",
        paddingBottom: 16,
      }}
    >
      <AddTodo data={data} setData={setData} />
      <Todos data={data} setData={setData} />
    </div>
  );
};

export default TodoList;
