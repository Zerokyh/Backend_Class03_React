const nationsCurrency = {
  korea: "원",
  japan: "엔",
  china: "옌",
};

export const changeToCurrency = (
  str: string,
  nation: "korea" | "japan" | "china"
) => Number(str).toLocaleString(nation);
