export const ADD_CARD = "ADD-CART";

const addCardActionCreator = (card) => ({
  type: ADD_CARD,
  payload: card,
})

export default addCardActionCreator;