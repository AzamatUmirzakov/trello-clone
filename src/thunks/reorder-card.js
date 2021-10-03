import selectCard from "../selectors/select-card";
import addCard from "../actions/add-card";
import deleteCard from "../actions/delete-card";

const reorderCard = (source, destination) => (dispatch, getState) => {
  const card = selectCard(source.droppableId, source.index)(getState());
  // console.log(addCard(destination.droppableId, card, destination.index));
  dispatch(deleteCard(source.droppableId, source.index))
  dispatch(addCard(destination.droppableId, card, destination.index));
  console.log(window.store.getState().board.lists[0].cards);
  // debugger;
  // console.log(deleteCard(source.droppableId, source.index));
  console.log(window.store.getState().board.lists[0].cards);
}

export default reorderCard;