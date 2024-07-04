import { useEffect, useState } from "react";

const Effect = () => {
  // react 라이브러리 : view만 담당
  // view이외 것들은 리액트에서는 부수 효과[side effect]
  // side effect
  // 1. 데이터 가져오기
  // 2. 다른 API사용하기
  // 3. DOM 직접 조작하기

  // 기본 사용법
  //   useEffect(() => {}, []); 함수와 배열을 가져옴, 함수는 side effect와 관련된 것을 가져옴

  // 함수, 배열[의존성 배열] : 앞의 함수가 재실행 하도록 하는 요소들
  //   const [num, setNum] = useState(0);

  //   useEffect(() => {
  //     const data = fetch("https://fakerapi.it/api/v1/addresses?_quantity=1")
  //       .then((v) => v.json())
  //       .then((v) => console.log(v));
  //   }, [num]);

  //   return <div onClick={() => setNum((prev) => prev + 1)}>effect{num}</div>;
  const [loading, setLoading] = useState<boolean>(true);
  const [city, setCity] = useState<string>("");
  //   const [trigger, setTrigger] = useState<boolean>(false);
  const fetchData = async () => {
    setLoading(() => true);
    const response = await fetch(
      "https://fakerapi.it/api/v1/addresses?_quantity=1"
    );
    const result = await response.json();
    setCity(result.data[0].city);
    setLoading(() => false);
  };
  const reload = () => fetchData();
  // {
  // setLoading(() => true);
  // setTrigger((prev) => !prev);
  //   };

  useEffect(() => {
    // fetch("https://fakerapi.it/api/v1/addresses?_quantity=1")
    //   .then((v) => v.json())
    //   .then((v) => {
    //     setCity((prev) => v.data[0].city);
    //     setLoading(() => false);
    //   });
    fetchData();
  }, []); // trigger 지움

  return <div onClick={reload}>effect {loading ? "로딩중" : city}</div>;
};

export default Effect;
