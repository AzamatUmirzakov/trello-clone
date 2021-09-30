import styles from './List.module.css';
import Card from "../Card/Card";
import AddItem from "../AddItem/AddItem";
import addCardActionCreator from "../../actions/add-card";
import {useDispatch} from "react-redux";
import {useContext} from "react";
import {Droppable} from "react-beautiful-dnd";

const List = ({list}) => {
  const dispatch = useDispatch();

  const addCard = (text) => {
    dispatch(addCardActionCreator(
      {
        listID: list.id,
        title: text,
      }
    ))
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
              <Card card={card} key={card.id} index={index}/>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <AddItem addItem={addCard} styles={styles}/>
    </div>
  )
}

export default List;