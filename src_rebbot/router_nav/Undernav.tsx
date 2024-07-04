import { FaRegCommentAlt } from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { GiAtom } from "react-icons/gi";
import { FaRegCompass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Undernav = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="flex item-center justify-center ">
        <div className="flex">
          <button
            className="flex flex-col w-14 p-2 text-2xl justify-center items-center gap-1 text-slate-500 hover:text-blue-500"
            onClick={() => navigate("/")}
          >
            <GiAtom />
            <span className="text-xs">홈</span>
          </button>
        </div>
        <div className="flex ">
          <button
            className="flex flex-col w-14 p-2 text-2xl justify-center items-center gap-1 text-slate-500 hover:text-blue-500"
            onClick={() => navigate("/ddinggo")}
          >
            <FaRegCompass />
            <span className="text-xs">탐색</span>
          </button>
        </div>
        <div className="flex">
          <button
            className="flex flex-col w-14 p-2 text-2xl justify-center items-center gap-1 text-slate-500 hover:text-blue-500"
            onClick={() => navigate("/musinsa")}
          >
            <FaRegCommentAlt />
            <span className="text-xs">후기</span>
          </button>
        </div>
        <div className="flex">
          <button
            className="flex flex-col w-14 p-2 text-2xl justify-center items-center gap-1 text-slate-500 hover:text-blue-500"
            onClick={() => navigate("/content1")}
          >
            <HiOutlineTicket />
            <span className="text-xs">티켓/예약</span>
          </button>
        </div>
        <div className="flex">
          <button
            className="flex flex-col w-14 p-2 text-2xl justify-center items-center gap-1 text-slate-500 hover:text-blue-500"
            onClick={() => navigate("/content2")}
          >
            <IoPersonOutline />
            <span className="text-xs">마이</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Undernav;
