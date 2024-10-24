import { FONT_SIZES, PALLETTE } from "todo/utils/utils.ts";

const AboutPage = ({ setShowAbout }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: PALLETTE.PURPLE,
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: FONT_SIZES.TITLE,
          color: PALLETTE.PINK,
          paddingTop: 100,
        }}
      >
        I created this page as I wanted to make something to keep track of my
        daily tasks to boost productivity.
      </div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: FONT_SIZES.LABEL,
          color: PALLETTE.PINK,
          paddingLeft: 50,
          paddingRight: 50,
          paddingTop: 20,
        }}
      >
        This site relies solely on{" "}
        <span style={{ fontWeight: 800 }}>
          <u>local storage</u>
        </span>{" "}
        to keep track of your tasks by flattening all the data. During startup,
        the local storage string is parsed, and when any changes are made, they
        are encoded.
      </div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: FONT_SIZES.TITLE,
          color: PALLETTE.PINK,
          paddingTop: 80,
        }}
      >
        <a href="https://www.linkedin.com/in/edwin-joe-xavier/">My Linkedin</a>
      </div>
      <div
        style={{
          textAlign: "center",
          cursor: "pointer",
          fontSize: FONT_SIZES.LABEL,
          color: PALLETTE.PINK,
          paddingTop: 80,
        }}
        onClick={() => {
          setShowAbout(false);
        }}
      >
        {"<- back to home"}
      </div>
    </div>
  );
};

export default AboutPage;
