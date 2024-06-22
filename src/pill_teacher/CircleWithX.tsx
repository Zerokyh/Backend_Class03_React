import { CSSProperties } from "react";

// 함수
// f(x) = x + 1
// 2 => 3
// 3 => 4
// 파란색 => 파란색원
// 빨간색 => 빨간색원
// 주황색 => 주황색원

// 차이점은 Props로 전달

const CircleWithX = () => {
  const style: CSSProperties = {
    width: "16px",
    height: "16px",
    backgroundColor: "#bdbdbd",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    cursor: "pointer",
  };
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default CircleWithX;
