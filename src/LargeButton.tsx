// backgroundColor: 좋아하는 색깔,
// padding : 10px 20px
// borderRadius: 8px

import { CSSProperties } from "react";

const LargeButton = () => {
  const buttonStyle: CSSProperties = {
    backgroundColor: "skyblue",
    padding: "10px 20px",
    borderRadius: "8px",
  };

  return (
    <>
      <button style={buttonStyle}>좋아하는 색 버튼</button>
    </>
  );
};

export default LargeButton;
