import styled from "styled-components";
import Nick, { NickProps } from "./Nick";

const Container = styled.div`
  display: flex;
  color: white;
  font-size: 12px;
  gap: 20px;

  padding: 20px 30px;
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UpContents = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;

const UpContentText = styled.span`
  width: fit-content;
  font-size: 12px;
`;

const UpContentTime = styled.span`
  width: fit-content;
  font-size: 12px;
  color: gray;
`;

const DownContents = styled.div`
  display: flex;
  flex-direction: column;
`;

const DownContentText = styled.span`
  font-size: 12px;
  color: white;
  white-space: pre-wrap;
`;

const Hr = styled.hr`
  background-color: gray;
  width: 96%;
  height: 0.5px;
  border: 0;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 50%;
`;

export type ReplyProps = {
  profile:
    | "Batman.webp"
    | "Hope.webp"
    | "Wabbit.webp"
    | "Gingerbread.webp"
    | "Alpha_Taz.webp"
    | "Frenemies.webp"
    | "Martian.webp";
  nickName: NickProps;
  text: string;
  time: string;
};

const Reply = ({ profile, nickName, text, time }: ReplyProps) => {
  return (
    <div>
      <Container>
        <Image src={profile} />
        <Contents>
          <UpContents>
            <UpContentText>
              <Nick {...nickName} />
            </UpContentText>
            <UpContentTime>{time}</UpContentTime>
          </UpContents>

          <DownContents>
            <DownContentText>{text}</DownContentText>
          </DownContents>
        </Contents>
      </Container>
      <Hr />
    </div>
  );
};

export default Reply;
