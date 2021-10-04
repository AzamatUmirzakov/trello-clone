import selectCard from "../selectors/select-card";
import addCard from "../actions/add-card";
import deleteCard from "../actions/delete-card";

const reorderCard = (source, destination) => (dispatch, getState) => {
  const card = selectCard(source.droppableId, source.index)(getState());

  dispatch(deleteCard(source.droppableId, source.index))
  dispatch(addCard(destination.droppableId, card, destination.index));
}

export default reorderCard;