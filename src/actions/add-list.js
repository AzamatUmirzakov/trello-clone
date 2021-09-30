export const ADD_LIST = 'ADD_LIST';

const addListActionCreator = (title) => ({
  type: ADD_LIST,
  payload: title,
})

export default addListActionCreator;