import styles from './Card.module.css';
import classNames from "classnames";
import {Draggable} from "react-beautiful-dnd";

const Card = (props) => {

  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {(provided) => (
        <li {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} className={classNames(styles.card)} >
          {props.card.title}
          <br/>
        </li>
      )}
    </Draggable>
  )
}

export default Card;