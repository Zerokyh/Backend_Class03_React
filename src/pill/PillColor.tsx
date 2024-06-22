import { CSSProperties } from "react";

export type PillColorProp = { color: "red" | "orange" | "blue" };

const PillColor = ({ color }: PillColorProp) => {
  const style: CSSProperties = {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: color,
  };
  return <div style={style}></div>;
};

export default PillColor;
