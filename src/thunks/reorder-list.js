import selectList from "../selectors/select-list";
import deleteList from "../actions/delete-list";
import addListActionCreator from "../actions/add-list";

const reorderList = (listID, destination) => (dispatch, getState) => {
  const list = {
    ...selectList(listID)(getState())
  };
  dispatch(deleteList(listID))
  dispatch(addListActionCreator(list.title, destination.index, list.cards))
}

export default reorderList;