import { FONT_SIZES, PALLETTE } from "../utils/utils.ts";

const Header = ({ setShowAbout, showAbout }) => {
  return (
    <div
      style={{
        backgroundColor: PALLETTE.DARK_PURPLE,
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontSize: FONT_SIZES.HEADER,
          paddingLeft: "80px",
          color: PALLETTE.PINK,
        }}
      >
        To-do-helper
      </span>

      <div style={{ paddingRight: "20px" }}>
        <button
          style={{
            height: "60px",
            width: "60px",
            borderRadius: "20px",
            fontSize: FONT_SIZES.TITLE,
            backgroundColor: PALLETTE.PINK,
            color: PALLETTE.DARK_PURPLE,
          }}
          onClick={() => {
            setShowAbout(!showAbout);
          }}
        >
          ?
        </button>
      </div>
    </div>
  );
};

export default Header;
