import styles from './List.module.css';
import Card from "../Card/Card";
import AddItem from "../AddItem/AddItem";
import addCard from "../../actions/add-card";
import {useDispatch} from "react-redux";
import {Droppable} from "react-beautiful-dnd";
import deleteCard from "../../actions/delete-card";
import deleteList from "../../actions/delete-list";
import close from '../../assets/images/close.svg';

const List = ({list, innerRef, dragHandleProps, draggableProps, index}) => {
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

  const handleClick = () => {
    dispatch(deleteList(list.id))
  }

  return (
    <div className={styles.list} ref={innerRef} {...dragHandleProps} {...draggableProps}>
      <header>
        {list.title}
        <button onClick={handleClick}><img src={close} alt={"delete"}/></button>
      </header>
      <Droppable droppableId={list.id} type="card">
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