import Task from "./Task";

const Todos = ({ data, setData }) => {
  return data?.length ? (
    data?.map(({ label, isCompleted, id }) => {
      return <Task key={id} label={label} isCompleted={isCompleted} id={id} />;
    })
  ) : (
    <></>
  );
};

export default Todos;
