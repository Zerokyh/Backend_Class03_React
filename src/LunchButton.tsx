import { CSSProperties } from "react";

const LunchButton = () => {
  const h1Style: CSSProperties = {
    color: "skyblue",
    fontSize: "20px",
  };

  const buttonStyle: CSSProperties = {
    backgroundColor: "pink",
    padding: "10px",
  };
  return (
    <>
      <h1 style={h1Style}>물냉면먹음😆</h1>
      <button style={buttonStyle}>버튼입니까?</button>
    </>
  );
};

export default LunchButton;
