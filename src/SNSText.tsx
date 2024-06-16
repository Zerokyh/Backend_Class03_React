export type SNSTextProps = {
  sns: "Facebook" | "Google" | "Apple";
};

const SNSText = ({ sns }: SNSTextProps) => {
  return <span>Continue with {sns}</span>;
};

export default SNSText;
