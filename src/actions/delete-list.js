export const DELETE_LIST = "DELETE_LIST";

const deleteList = (id) => ({
  type: DELETE_LIST,
  payload: id,
})

export default deleteList;