import {createStore} from "redux";
import reducer from "../reducers/main";

const store = createStore(reducer);
window.store = store;

export default store;