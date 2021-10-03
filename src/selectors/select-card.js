import selectList from "./select-list";

const selectCard = (listID, index) => (state) => {
  const list = selectList(listID)(state);
  const cards = list.cards;
  return cards[index];
}

export default selectCard;