export const ADD_LIST = 'ADD_LIST';

const addListActionCreator = (title, index, cards) => ({
  type: ADD_LIST,
  payload: {
    title,
    index,
    cards
  },
})

export default addListActionCreator;