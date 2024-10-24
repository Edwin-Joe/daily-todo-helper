import { useState } from "react";
import Header from "./Header";
import PageBody from "./PageBody";
import AboutPage from "./AboutPage";

const TodoHome = () => {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <div style={{ minHeight: "100vh", height: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header setShowAbout={setShowAbout} showAbout={showAbout} />
        {!showAbout ? <PageBody /> : <AboutPage setShowAbout={setShowAbout} />}
      </div>
    </div>
  );
};

export default TodoHome;
