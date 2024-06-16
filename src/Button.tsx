import { CSSProperties } from "react";
import { BorderRadius, Colors, bgColorObj, borderRadiusObj } from "./styles";

type ButtonProps = {
  content: string;
  backgroundColor: keyof Colors;
  borderRadius: keyof BorderRadius;
};

// input -> output,  props - 매개변수라 칭함, 타입지정을 해야 빨간줄 사라짐
const Button = ({ content, backgroundColor, borderRadius }: ButtonProps) => {
  const buttonStyle: CSSProperties = {
    backgroundColor: bgColorObj[backgroundColor],
    padding: "10px 45px",
    color: "white",
    border: `1px solid ${bgColorObj[backgroundColor]}`,
    fontSize: "32px",
    borderRadius: borderRadiusObj[borderRadius],
  };

  return <button style={buttonStyle}>{content}</button>;
};

export default Button;
