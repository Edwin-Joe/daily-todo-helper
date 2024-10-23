import { FONT_SIZES, PALLETTE } from "../utils/utils.ts";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: PALLETTE.DARK_PURPLE,
        width: "100%",
        height: "100px",
        justifyContent: "flex-start",
      }}
    >
      <text
        style={{
          fontSize: FONT_SIZES.HEADER,
          paddingLeft: 80,
          color: PALLETTE.PINK,
        }}
      >
        To-do-helper
      </text>
    </div>
  );
};

export default Header;
