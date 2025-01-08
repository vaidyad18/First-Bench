import Navbar from "./components/Navbar";
import ResultBox from "./components/ResultBox";
import CompareAccuracyBoxes from "./components/CompareAccuracyBoxes";
import FourBoxes from "./components/FourBoxes";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex gap-5 w-full justify-center ">
        <ResultBox />
        <div className="flex-col">
          <div className="flex justify-center items-center gap-5">
            <CompareAccuracyBoxes />
            <CompareAccuracyBoxes />
            <CompareAccuracyBoxes />
          </div>
          <FourBoxes/>
        </div>
      </div>
    </div>
  );
}

export default App;
