import randomInteger from "../utils/random-integer";
import selectBoard from "../selectors/select-board";
import {ADD_LIST} from "../actions/add-list";
import {ADD_CARD} from "../actions/add-card";
import {DELETE_CARD} from "../actions/delete-card";
import selectList from "../selectors/select-list";

const initialState = {
  board: {
    title: "Demo board",
    id: 'iwer0234h',
    backgroundURL: 'https://img5.goodfon.com/wallpaper/nbig/9/23/synth-retrowave-synthwave-fon-new-retro-wave-sintveiv-ret-16.jpg',
    dragging: null,
    lists: [
      {
        title: "Your first list",
        id: '230942398432',
        cards: [
          {
            id: '3093',
            title: "Your first card",
            text: "This is simple demo card"
          },
          {
            id: '2393',
            title: "Your second card",
            text: "This is simple demo card"
          },
          {
            id: '323292039',
            title: "Your third card",
            text: "This is simple demo card"
          },
          {
            id: '23903293',
            title: "Your fourth card",
            text: "This is simple demo card"
          },
        ]
      }
    ],
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST: {
      const newLists = Array.from(selectBoard(state).lists);
      newLists.push({
        id: String(randomInteger(0, 10000)),
        title: action.payload,
        cards: [],
      });
      return {
        board: {
          ...state.board,
          lists: newLists,
        }
      }
    }
    case ADD_CARD: {
      const newLists = Array.from(selectBoard(state).lists);
      for (let list of newLists) {
        if (list.id === action.payload.listID) {
          let newList = list;
          newList.cards.splice(action.payload.index, 0, {
            id: String(randomInteger(0, 10000)),
            title: action.payload.card.title,
          });
          list = newList;
        }
      }
      return {
        board: {
          ...state.board,
          lists: newLists,
        }
      }
    }
    case DELETE_CARD: {
      const list = selectList(action.payload.listID)(state);
      const cards = list.cards;

      let newCards = Array.from(cards);
      newCards.splice(action.payload.index, 1);
      const lists = [...state.board.lists];
      let listIndex = null;
      for (let i = 0; i < lists.length; i++) {
        if (lists[i].id === action.payload.listID) {
          listIndex = i;
        }
      }
      const newList = {
        ...list,
        cards: newCards,
      }
      let newLists = [...lists];
      debugger;
      newLists.splice(listIndex, 1, newList);
      console.log(newLists);
      return {
        board: {
          ...state.board,
          lists: newLists,
        }
      }
    }

    default:
      return state;
  }
}

export default reducer;