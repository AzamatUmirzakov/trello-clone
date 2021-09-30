export const SET_DRAGGING = 'SET_DRAGGING';

const setDragging = (value) => ({
  type: SET_DRAGGING,
  payload: value,
});

export default setDragging;