import "./App.css";
import Gameboard from "./components/Gameboard";

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center uppercase m-8 p-2 text-violet-600">
        Play Tic Tac Toe Game
      </h1>
      <Gameboard />
    </>
  );
}

export default App;
