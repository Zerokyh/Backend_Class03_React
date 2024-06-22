import { CSSProperties } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "./styles";

type SnackBarProps = {
  color: keyof Colors;
};

const SnackBar = () => {
  const barStyle: CSSProperties = {
    backgroundColor: "black",
    width: "500px",
    height: "50px",
    borderRadius: "20px",
    color: "white",
    display: "flex",
    padding: "0 20px",
    justifyContent: "space-between",
    alignItems: "center",
  };

  // const infoIcon = <FontAwesomeIcon icon={faCircleInfo} />;
  const iconDivStyle: CSSProperties = {
    backgroundColor: "blue",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={barStyle}>
      <div className="icon" style={iconDivStyle}>
        {/* {infoIcon} */}
      </div>
      <span className="message">Message</span>
      <span className="status">Action</span>
    </div>
  );
};

export default SnackBar;
