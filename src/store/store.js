import {applyMiddleware, createStore} from "redux";
import reducer from "../reducers/main";
import thunk from "redux-thunk";
import loadState from "../utils/load-state";
import saveState from "../utils/save-state";

const savedState = loadState();

const store = createStore(reducer, savedState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState())
})

export default store;