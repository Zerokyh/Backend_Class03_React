import styled from "styled-components";

const MyReplyDiv = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 10px;
  padding: 14px 24px;
  gap: 20px;
  background-color: #2a2a2a;
  border-radius: 80px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 50%;
  border: 3px solid #fff200;
`;

const TextContent = styled.input`
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  color: gray;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  border: 0;
`;

const UploadContent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 50%;
  color: gray;
  background-color: transparent;
  cursor: pointer;
`;

type MyReplyProps = {
  profile: "Batman.webp";
};

const MyReply = ({ profile }: MyReplyProps) => {
  return (
    <MyReplyDiv>
      <Image src={profile} />
      <TextContent placeholder={"댓글을 달아보세요."}></TextContent>
      <UploadContent>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </UploadContent>
    </MyReplyDiv>
  );
};

export default MyReply;
