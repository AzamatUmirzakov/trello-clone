export const ADD_CARD = "ADD-CARD";

const addCard = (listID, card, index) => ({
  type: ADD_CARD,
  payload: {
    listID,
    card,
    index
  },
})

export default addCard;