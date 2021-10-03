import styles from './List.module.css';
import Card from "../Card/Card";
import AddItem from "../AddItem/AddItem";
import addCard from "../../actions/add-card";
import {useDispatch} from "react-redux";
import {Droppable} from "react-beautiful-dnd";

const List = ({list}) => {
  const dispatch = useDispatch();

  const addItem = (text) => {
    dispatch(addCard(
      list.id,
      {
        title: text,
      },
      list.cards.length
    ));
  }

  return (
    <div className={styles.list}  >
      <header>
        {list.title}
      </header>
      <Droppable droppableId={list.id}>
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {list.cards.map((card, index) => (
              <Card card={card} key={card.id} index={index} listID={list.id}/>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <AddItem addItem={addItem} styles={styles}/>
    </div>
  )
}

export default List;