import styled from "styled-components";

const TextContents = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px;

  position: relative;
  font-size: 22px;
  font-weight: 600;
  color: white;
`;

const TextContent = styled.div`
  display: flex;
  gap: 10px;
`;

const Cnt = styled.span`
  color: #fff200;
`;

const XIcon = styled.span`
  width: 30px;
  height: 30px;
  color: white;
  position: absolute;
  right: 30px;
`;

const Top = () => {
  return (
    <TextContents>
      <div>
        <TextContent>
          댓글<Cnt>4</Cnt>
        </TextContent>
      </div>
      <XIcon>
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
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </XIcon>
    </TextContents>
  );
};

export default Top;
