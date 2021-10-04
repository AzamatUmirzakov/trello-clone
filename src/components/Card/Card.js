import styles from './Card.module.css';
import classNames from "classnames";
import {Draggable} from "react-beautiful-dnd";
import {useDispatch} from "react-redux";
import deleteCard from "../../actions/delete-card";
import close from '../../assets/images/close.svg';

const Card = (props) => {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    dispatch(deleteCard(props.listID, props.index));
  }

  return (
    <Draggable draggableId={props.card.id} index={props.index} type="card">
      {(provided) => (
        <li {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} className={classNames(styles.card)} >
          {props.card.title}
          <button onClick={handleClick}><img src={close} alt={"delete"}/></button>
        </li>
      )}
    </Draggable>
  )
}

export default Card;