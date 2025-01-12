import Navbar from "./components/Navbar";
import ResultBox from "./components/ResultBox";
import CompareAccuracyBoxes from "./components/CompareAccuracyBoxes";
import FourBoxes from "./components/FourBoxes";
import GraphBox from "./components/GraphBox";
import TimeTakenBox from "./components/TimeTakenBox";

function App() {
  return (
    <div className="flex-col items-center justify-center">
      <Navbar />
      <div className="flex-col justify-center items-center">
        <div className="flex gap-5 w-full justify-center">
          <ResultBox />
          <div className="flex-col">
            <div className="flex -ml-0 lg:ml-16 xl:ml-0 justify-center items-center gap-5">
              <div className="sm:flex hidden">
                <CompareAccuracyBoxes />
              </div>
              <div className="sm:flex hidden">
                <CompareAccuracyBoxes />
              </div>
              <div className="lg:flex hidden">
                <CompareAccuracyBoxes />
              </div>
            </div>
            <FourBoxes />
            <div className="flex">
              <div className="lg:flex hidden">
                <GraphBox />
              </div>
              <div className="lg:flex hidden">
                <TimeTakenBox />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:hidden">
          <div className="sm:hidden">
            <CompareAccuracyBoxes />
          </div>      
          <GraphBox />
          <TimeTakenBox />
        </div>
      </div>
    </div>
  );
}

export default App;
