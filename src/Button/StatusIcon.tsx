import { CSSProperties } from "react";
import { IconType } from "react-icons";

type Status = {
  info: "#27437C";
  check: "#284D30";
  warning: "#7A2A32";
};

export type StatusIconProps = {
  color: keyof Status; // "#27437C" | "#284D30" | "#7A2A32"
  Icon: IconType;
};

const StatusIcon = ({ color, Icon }: StatusIconProps) => {
  const statusObj: Status = {
    info: "#27437C",
    check: "#284D30",
    warning: "#7A2A32",
  };
  const style: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: statusObj[color],
    borderRadius: "50%",
    fontSize: "20px",
  };

  return (
    <span style={style}>
      <Icon />
    </span>
  );
};

export default StatusIcon;
