import addListActionCreator from "../../actions/add-list";
import List from "../List/List";
import {useDispatch, useSelector} from "react-redux";
import AddItem from "../AddItem/AddItem";
import styles from './Board.module.css'
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import reorderCard from "../../thunks/reorder-card";
import selectBoard from "../../selectors/select-board";
import reorderList from "../../thunks/reorder-list";


const Board = ({board}) => {
  const dispatch = useDispatch();
  const lists = useSelector(selectBoard).lists;

  const addList = (title) => {
    dispatch(addListActionCreator(title, lists.length, []));
  }

  const handleDragEnd = (result) => {
    const {source, destination} = result;
    if (!destination) return;

    if (result.type === 'card') {
      dispatch(reorderCard(source, destination))
    }
    else if (result.type === 'list') {
      dispatch(reorderList(result.draggableId, destination))
    }
    // console.log(result);
  }

  return (
    <div className={styles.board} style={{
      backgroundImage: `url(${board.backgroundURL})`,
    }}>
      <header>
        {board.title}
      </header>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="all-columns" direction="horizontal" type="list">
          {(provided) => (
            <main {...provided.droppableProps} ref={provided.innerRef}>
              {board.lists.map((list, index) => (
                <Draggable draggableId={list.id} index={index} key={list.id} type="list">
                  {(provided) => (
                    <List innerRef={provided.innerRef} draggableProps={provided.draggableProps} dragHandleProps={provided.dragHandleProps} list={list} index={index} />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <AddItem addItem={addList} item={'list'} styles={styles}/>
            </main>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Board;