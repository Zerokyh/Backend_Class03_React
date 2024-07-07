import { alarm } from "../../utils/util";

export type RoundCheckBoxProps = {
  isChecked?: boolean;
  handleCheck?: () => void;
};

const RoundCheckBox = ({
  isChecked = false,
  handleCheck = alarm,
}: RoundCheckBoxProps) => {
  return (
    <input
      onChange={handleCheck}
      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded"
      type="checkbox"
      checked={isChecked}
    />
  );
};

export default RoundCheckBox;
