export type NickProps = {
  nickname: string;
};

const Nick = ({ nickname }: NickProps) => {
  return <span>{nickname}</span>;
};

export default Nick;
