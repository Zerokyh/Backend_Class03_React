import LargeButton from "./LargeButton";
import LunchButton from "./LunchButton";

function App() {
  // h1 태그 CSS 색깔은 하늘색, 폰트사이즈 20px
  // h1 태그 내용: 오늘점심 먹은거

  return (
    <div className="App">
      <LunchButton />
      <LunchButton />

      <LargeButton />
      <LargeButton />
    </div>
  );
}

export default App;
