export const DELETE_CARD = "DELETE_CARD";

const deleteCard = (listID, index) => ({
  type: DELETE_CARD,
  payload: {
    listID,
    index
  }
})

export default deleteCard;