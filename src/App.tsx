// import Button from "./Button";

import styled from "styled-components";
import Reply from "./Reply/Reply";
import MyReply from "./Reply/MyReply";
import Top from "./Reply/Top";

// import Item from "./Musinsa/Item";

// import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
// import SNSLogin from "./SNSLogin";
// import { CSSProperties } from "react";

// import PillButton from "./pill/PillButton";
// import Pill from "./Pill";

// import Pallete from "./Pallette/Pallete";

// import {
//   IoIosCheckmarkCircleOutline,
//   IoIosInformationCircle,
//   IoIosWarning,
// } from "react-icons/io";
// import Snackbar from "./Snackbar";

function App() {
  // const style: CSSProperties = {
  //   display: "flex",
  //   gap: "10px",
  // };
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    background-color: #3b3b3b;
  `;

  // const arr = [
  //   { backgroundColor: "#E1F5FE", text: "50" },
  //   { backgroundColor: "#B3E5FC", text: "100" },
  //   { backgroundColor: "#81D4F4", text: "200" },
  //   { backgroundColor: "#4FC3F7", text: "300" },
  //   { backgroundColor: "#29B6F6", text: "400" },
  //   { backgroundColor: "#03A9F4", text: "500" },
  //   { backgroundColor: "#039BE5", text: "600" },
  //   { backgroundColor: "#0288D1", text: "700" },
  //   { backgroundColor: "#0277BD", text: "800" },
  //   { backgroundColor: "#01579B", text: "900" },
  // ];
  return (
    <Wrapper className="App">
      {/* <Button content="Home" backgroundColor="main" borderRadius="hard" />
      <Button content="Home" backgroundColor="side" borderRadius="smooth" />
      <Button content="Home" backgroundColor="deactive" borderRadius="circle" /> */}
      {/* <Snackbar
        statusIcon={{ color: "info", Icon: IoIosInformationCircle }}
        messageText={{ message: "Message" }}
      />
      <Snackbar
        statusIcon={{ color: "check", Icon: IoIosCheckmarkCircleOutline }}
        messageText={{ message: "Message" }}
      />
      <Snackbar
        statusIcon={{ color: "warning", Icon: IoIosWarning }}
        messageText={{ message: "Message" }}
      /> */}
      {/* <SNSLogin
        backgroundColor="#1877F2"
        snsText={{ sns: "Facebook" }}
        snsIcon={{ Icon: FaFacebook }}
      />
      <SNSLogin
        backgroundColor="black"
        snsText={{ sns: "Apple" }}
        snsIcon={{ Icon: FaApple }}
      />
      <SNSLogin
        backgroundColor="white"
        snsText={{ sns: "Google" }}
        snsIcon={{ Icon: FaGoogle }}
      /> */}
      {/* <PillButton color={{ color: "red" }} Language={{ Language: "XML" }} />
      <PillButton
        color={{ color: "orange" }}
        Language={{ Language: "Javascript" }}
      />
      <PillButton color={{ color: "blue" }} Language={{ Language: "UI" }} /> */}
      {/* <Pill backgroundColor="red" text="XML" />
      <Pill backgroundColor="orange" text="Javascript" />
      <Pill backgroundColor="#2196F3" text="UI" /> */}
      {/* {arr.map((v) => (
        <Pallete {...v} />
      ))} */}
      {/* <ItemImage /> */}
      {/* <ItemPrice /> hasDiscount 안적어도 됨, 기본값을 false로 설정
      <ItemPrice hasDiscount={true} />
      <ItemPrice hasDiscount={false} /> */}
      {/* <Item
        itemImage={{ ImageSrc: "shoes.jpg" }}
        itemInfo={{ info: "무신사 스탠다드" }}
        itemPrice={{ price: "20000", discount: "20" }}
      />
      <Item
        itemImage={{ ImageSrc: "shoes.jpg" }}
        itemInfo={{ info: "무신사 스탠다드" }}
        itemPrice={{ price: "20000" }}
      /> */}
      <Top />
      <Reply
        profile="Batman.webp"
        nickName={{ nickname: "푸드매니아" }}
        text={"너무너무 맛있을거 같아요:)\n이런게 진짜 맛집인가"}
        time="2022.05-06 11:31"
      />
      <Reply
        profile="Hope.webp"
        nickName={{ nickname: "피망조아" }}
        text="너무너무 맛있을거 같아요:)"
        time="2022.05-06 11:31"
      />
      <Reply
        profile="Gingerbread.webp"
        nickName={{ nickname: "푸드맨이야" }}
        text={"군침이 싹 돌아요~@.@\n저도 한번 시도해보려고요!!"}
        time="2022.05-06 11:31"
      />
      <Reply
        profile="Wabbit.webp"
        nickName={{ nickname: "BOBBI" }}
        text="진짜 너무 유익합니다! 저도 만들어봐야겠어용"
        time="방금"
      />

      <MyReply profile="Batman.webp" />
    </Wrapper>
  );
}

export default App;
