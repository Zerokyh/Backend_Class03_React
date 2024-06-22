import { CSSProperties } from "react";

type PalleteProps = {
  backgroundColor: string;
  text: string;
};

const Pallete = ({ backgroundColor, text }: PalleteProps) => {
  const style: CSSProperties = {
    width: "160px",
    height: "70px",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor,
  };
  return <div style={style}>{text}</div>;
};

export default Pallete;
