import { CSSProperties } from "react";
import Circle from "./Circle";
import CircleWithX from "./CircleWithX";

type PillProps = {
  text: string;
  backgroundColor: string;
};

const Pill = ({ text, backgroundColor }: PillProps) => {
  const style: CSSProperties = {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    border: "1px solid #bdbdbd",
    borderRadius: "30px",
    padding: "5px",
    width: "fit-content",
  };
  return (
    <div style={style}>
      <Circle backgroundColor={backgroundColor} />
      <span style={{ lineHeight: "2px", fontWeight: "600" }}>{text}</span>
      <CircleWithX />
    </div>
  );
};

export default Pill;
