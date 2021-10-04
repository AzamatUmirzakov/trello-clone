const loadState = () => {
  const state = localStorage.getItem('state');
  if (state === null) return undefined;
  return JSON.parse(state);
}

export default loadState;