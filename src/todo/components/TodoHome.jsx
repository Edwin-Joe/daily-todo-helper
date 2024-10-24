import Header from "./Header";
import PageBody from "./PageBody";

const TodoHome = () => {
  return (
    <div style={{ minHeight: "100vh", height: "100vh" }}>
      <div
        style={{
          width: "100vw",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <PageBody />
      </div>
    </div>
  );
};

export default TodoHome;
