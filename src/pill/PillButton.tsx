import { CSSProperties } from "react";
import PillColor, { PillColorProp } from "./PillColor";
import PillText, { PillTextProp } from "./PillText";
import PillIcon from "./PillIcon";

type PillButtonProp = {
  color: PillColorProp;
  Language: PillTextProp;
};

const PillButton = ({ color, Language }: PillButtonProp) => {
  const style: CSSProperties = {
    display: "flex",
    width: "fit-content",
    gap: "10px",
    border: "1px solid #bdbdbd",
    borderRadius: "25px",
    padding: "6px 10px",

    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={style}>
      <PillColor {...color} />
      <PillText {...Language} />
      <PillIcon />
    </div>
  );
};

export default PillButton;
