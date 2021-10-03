import styles from './Card.module.css';
import classNames from "classnames";
import {Draggable} from "react-beautiful-dnd";
import {useDispatch} from "react-redux";
import deleteCard from "../../actions/delete-card";

const Card = (props) => {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    console.log(dispatch(deleteCard(props.listID, props.index)));
  }

  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {(provided) => (
        <li {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} className={classNames(styles.card)} >
          {props.card.title}
          <br/>
          <button onClick={handleClick}>delete</button>
        </li>
      )}
    </Draggable>
  )
}

export default Card;