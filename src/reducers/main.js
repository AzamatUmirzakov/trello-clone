import randomInteger from "../utils/random-integer";
import selectBoard from "../selectors/select-board";
import {ADD_LIST} from "../actions/add-list";
import {ADD_CARD} from "../actions/add-card";

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
    case ADD_LIST:
      const newLists = [...selectBoard(state).lists, {
        id: String(randomInteger(0, 10000)),
        title: action.payload,
        cards: [],
      }]
      return {
        board: {
          ...state.board,
          lists: newLists,
        }
      }
    case ADD_CARD:
      const lists = [...selectBoard(state).lists];
      for (let list of lists) {
        if (list.id === action.payload.listID) {
          list.cards = [...list.cards, {
            id: String(randomInteger(0, 10000)),
            title: action.payload.title,
          }]
        }
      }
      return {
        board: {
          ...state.board,
          lists: lists,
        }
      }
    default:
      return state;
  }
}

export default reducer;