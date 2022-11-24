import { legacy_createStore as createStore } from "redux";
import rootReducers from "./Reducers/rootReducers.js";

const store = createStore(rootReducers)

export default store;