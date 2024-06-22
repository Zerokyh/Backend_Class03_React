import styled from "styled-components";

const NickName = styled.h3`
  font-size: 12px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100vw;
  padding: 20px;
  color: white;
  font-size: 12px;
`;

const Hr = styled.hr`
  background-color: gray;
  width: 100%;
  height: 0.5px;
  border: 0;
`;

// const Image = styled.img.attrs({ src = "shoes.jpg" })`
//     url("shoes.jpg")
// `;

const Replay = () => {
  return (
    <Container>
      <div>{/* <Image /> */}</div>
      <NickName>푸드매니아</NickName>
      <span>너무너무 맛있을거 같아요:)</span>
      <span>이런게 진짜 맛집인가</span>
      <Hr />
    </Container>
  );
};

export default Replay;
