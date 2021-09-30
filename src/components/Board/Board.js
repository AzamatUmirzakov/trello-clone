import addListActionCreator from "../../actions/add-list";
import List from "../List/List";
import {useDispatch} from "react-redux";
import AddItem from "../AddItem/AddItem";
import styles from './Board.module.css'
import {DragDropContext} from "react-beautiful-dnd";


const Board = ({board}) => {
  const dispatch = useDispatch();

  const addList = (title) => {
    dispatch(addListActionCreator(title));
  }

  const handleDragEnd = (result) => {

  }

  return (
    <div className={styles.board} style={{
      backgroundImage: `url(${board.backgroundURL})`,
    }}>
      <header>
        {board.title}
      </header>
      <DragDropContext onDragEnd={handleDragEnd}>
      <main>
        {board.lists.map((list) => (
          <List list={list} key={list.id} />
        ))}
        <AddItem addItem={addList} item={'list'} styles={styles}/>
      </main>
    </DragDropContext>
    </div>
  )
}

export default Board;