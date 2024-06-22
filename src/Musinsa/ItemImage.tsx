import { CSSProperties } from "react";
import Heart from "./Heart";

export type ItemImageProps = {
  ImageSrc: string;
};

const ItemImage = ({ ImageSrc }: ItemImageProps) => {
  const itemStyle: CSSProperties = {
    position: "relative",
    width: "180px",
    height: "220px",
  };
  const imageStyle: CSSProperties = {
    width: "180px",
    height: "220px",
  };

  const imgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };

  const heartStyle: CSSProperties = {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    color: "white",
  };
  return (
    <div style={itemStyle}>
      <div style={imageStyle}>
        <img style={imgStyle} src={ImageSrc} alt=".." />
      </div>
      <div style={heartStyle}>
        <Heart />
      </div>
    </div>
  );
};

export default ItemImage;
