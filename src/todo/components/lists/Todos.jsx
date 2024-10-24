import Task from "./Task";

const Todos = ({ data, setData }) => {
  return (
    <div
      style={{
        width: "30vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        paddingTop: 36,
      }}
    >
      {data?.length ? (
        data?.map(({ label, isCompleted, id }) => {
          return (
            <Task
              data={data}
              setData={setData}
              key={id}
              label={label}
              isCompleted={isCompleted}
              id={id}
            />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default Todos;
