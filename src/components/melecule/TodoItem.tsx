import { useState } from "react";
import RoundCheckBox from "../atom/RoundCheckBox";
import TrashIcon from "../atom/TrashIcon";
import CheckedLabel from "../atom/CheckedLabel";

// SOLID = S[단일 책임] ? ? ? D[역전 의존성]

export type TodoItemProps = {
  id: number;
  contents: string;
  onDelete?: () => void;
};

const TodoItem = ({ id, contents, onDelete }: TodoItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheck = () => setIsChecked((prev) => !prev);

  const obj = {
    RoundCheckBox: {
      isChecked,
      handleCheck,
    },
    checkedLabel: {
      isChecked,
      contents,
    },
    trashIcon: {
      onDelete,
    },
  };

  return (
    <div className="flex items-center gap-10">
      <RoundCheckBox {...obj.RoundCheckBox} />
      <CheckedLabel {...obj.checkedLabel} />
      {isChecked && <TrashIcon {...obj.trashIcon} />}
    </div>
  );
};

export default TodoItem;
