import { CSSProperties } from "react";

// 함수
// f(x) = x + 1
// 2 => 3
// 3 => 4
// 파란색 => 파란색원
// 빨간색 => 빨간색원
// 주황색 => 주황색원

// 차이점은 Props로 전달
type CircleProps = {
  backgroundColor: string;
};

const Circle = ({ backgroundColor }: CircleProps) => {
  const style: CSSProperties = {
    width: "16px",
    height: "16px",
    backgroundColor,
    borderRadius: "50%",
  };
  return <div style={style}></div>;
};

export default Circle;
