import { CSSProperties } from "react";
import { MdCancel } from "react-icons/md";

const PillIcon = () => {
  const style: CSSProperties = {
    fontSize: "24px",
    color: "#bdbdbd",
  };
  return (
    <span style={style}>
      <MdCancel />
    </span>
  );
};

export default PillIcon;
