// import Button from "./Button";

import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import SNSLogin from "./SNSLogin";

// import {
//   IoIosCheckmarkCircleOutline,
//   IoIosInformationCircle,
//   IoIosWarning,
// } from "react-icons/io";
// import Snackbar from "./Snackbar";

function App() {
  return (
    <div className="App">
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
      <SNSLogin
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
      />
    </div>
  );
}

export default App;
