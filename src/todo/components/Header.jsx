import { FONT_SIZES, isMobileDevice, PALLETTE } from "../utils/utils.ts";

const Header = ({ setShowAbout, showAbout }) => {
  const isMobile = isMobileDevice();

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
          fontSize: !isMobile ? FONT_SIZES.HEADER : FONT_SIZES.MOBILE,
          paddingLeft: "80px",
          color: PALLETTE.PINK,
        }}
      >
        To-do-helper
      </span>

      <div style={{ paddingRight: "20px" }}>
        <button
          style={{
            height: !isMobile ? "60px" : undefined,
            width: !isMobile ? "60px" : undefined,
            borderRadius: "20px",
            fontSize: !isMobile ? FONT_SIZES.TITLE : FONT_SIZES.MOBILE,
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
