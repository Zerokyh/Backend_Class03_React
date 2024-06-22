export type ItemInfoProps = {
  info: string;
};

const ItemInfo = ({ info }: ItemInfoProps) => {
  return (
    <div>
      <span>{info}</span>
    </div>
  );
};

export default ItemInfo;
