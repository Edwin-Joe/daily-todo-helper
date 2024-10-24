import {
  FONT_SIZES,
  isMobileDevice,
  PALLETTE,
  playDelete,
} from "todo/utils/utils.ts";

const AboutPage = ({ setShowAbout }) => {
  const isMobile = isMobileDevice();
  return (
    <div
      style={{
        width: !isMobile ? " 100%" : "90%",
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
          fontSize: !isMobile ? FONT_SIZES.TITLE : undefined,
          color: PALLETTE.PINK,
          paddingTop: !isMobile ? 80 : 10,
        }}
      >
        I created this page as I wanted to make something to keep track of my
        daily tasks to boost productivity.
      </div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: !isMobile ? FONT_SIZES.LABEL : undefined,
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
          fontSize: !isMobile ? FONT_SIZES.TITLE : undefined,
          color: PALLETTE.PINK,
          paddingTop: !isMobile ? 80 : 10,
        }}
      >
        <a href="https://www.linkedin.com/in/edwin-joe-xavier/">My Linkedin</a>
      </div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: !isMobile ? FONT_SIZES.TITLE : undefined,
          color: PALLETTE.PINK,
        }}
      >
        <a href="\https://www.figma.com/design/puqMDPsDHkABzjVYkZlZm1/Todo-app?m=auto&t=39iyiQ2iu1EunUU1-6">
          Figma
        </a>
      </div>
      <div
        style={{
          textAlign: "center",
          cursor: "pointer",
          fontSize: !isMobile ? FONT_SIZES.LABEL : undefined,
          color: PALLETTE.PINK,
          paddingTop: !isMobile ? 80 : 10,
        }}
        onClick={() => {
          playDelete();
          setShowAbout(false);
        }}
      >
        {"<- back to home"}
      </div>
    </div>
  );
};

export default AboutPage;
