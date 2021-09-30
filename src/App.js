import Board from "./components/Board/Board";
import {useSelector} from "react-redux";
import selectBoard from "./selectors/select-board";
import styles from './App.module.css'

function App() {
  const board = useSelector(selectBoard);
  return (
      <div className="App">
        <Board board={board}/>
      </div>
  );
}

export default App;
