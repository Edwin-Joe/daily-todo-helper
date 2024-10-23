import Header from "./Header";
import PageBody from "./PageBody";

const TodoHome = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        fontFamily: "DyslexicFont",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <PageBody />
    </div>
  );
};

export default TodoHome;