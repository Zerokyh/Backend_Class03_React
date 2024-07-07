import { ERROR } from "../../constants/errorMessage";
import { TEXTSTYLE } from "../../styles/text.Style";

export type CheckedLabelProps = {
  isChecked?: boolean;
  contents?: string;
};

const CheckedLabel = ({
  isChecked = true,
  contents = ERROR.NOCONTENT,
}: CheckedLabelProps) => {
  return (
    <span className={isChecked ? TEXTSTYLE.DONE : TEXTSTYLE.TODO}>
      {contents}
    </span>
  );
};

export default CheckedLabel;
