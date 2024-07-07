import { IoTrashOutline } from "react-icons/io5";

export type TrashIconProps = {
  onDelete?: () => void;
};

const TrashIcon = ({ onDelete = alert }: TrashIconProps) => {
  return <IoTrashOutline onClick={onDelete} />;
};

export default TrashIcon;
