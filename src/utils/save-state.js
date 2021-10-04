const saveState = (state) => {
  const stringifiedState = JSON.stringify(state);
  localStorage.setItem('state', stringifiedState);
}

export default saveState;