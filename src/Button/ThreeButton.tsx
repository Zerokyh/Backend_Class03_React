import { CSSProperties } from "react";

type HardButtonProps = {
  content: string;
};

// input -> output,  props - 매개변수라 칭함, 타입지정을 해야 빨간줄 사라짐
const ThreeButton = ({ content }: HardButtonProps) => {
  const divStyle: CSSProperties = {
    display: "flex",
    gap: "20px",
  };

  const buttonStyle: CSSProperties = {
    backgroundColor: "#205BF3",
    padding: "10px 45px",
    color: "white",
    border: "1px solid #205BF3",
    fontSize: "32px",
  };

  return <button style={buttonStyle}>{content}</button>;
};

export default ThreeButton;
