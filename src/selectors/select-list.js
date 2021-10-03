import selectBoard from "./select-board";

const selectList = (listID) => {
  return (state) => {
    const board = selectBoard(state);
    const lists = board.lists;
    for (let list of lists) {
      if (list.id === listID) {
        return list;
      }
    }
  }
}

export default selectList;