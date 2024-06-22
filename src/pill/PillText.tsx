import { CSSProperties } from "react";

export type PillTextProp = {
  Language: "XML" | "Javascript" | "UI";
};

const PillText = ({ Language }: PillTextProp) => {
  const style: CSSProperties = {
    fontWeight: "600",
  };
  return <span style={style}>{Language}</span>;
};

export default PillText;
