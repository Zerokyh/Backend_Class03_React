import { CSSProperties } from "react";
import { changeToCurrency } from "../util";

export type ItemPriceProps = {
  hasDiscount?: boolean;
  price: string;
  discount?: string;
};

const ItemPrice = ({ discount, price }: ItemPriceProps) => {
  const discountStyle: CSSProperties = {
    color: "red",
    marginRight: "5px",
  };

  discount = true
    ? (price = (
        Number(price) -
        (Number(price) / 100) * Number(discount)
      ).toString())
    : price;

  return (
    <div>
      {!!discount && <span style={discountStyle}>{discount}%</span>}
      <span>{changeToCurrency(price, "korea")}</span>
    </div>
  );
};

export default ItemPrice;
