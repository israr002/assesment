import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import reducer from "./reducers/reducer";

const Store = createStore(reducer, applyMiddleware(thunk));

export default Store;