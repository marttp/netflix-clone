// import create store and apply middleware.
import { createStore, applyMiddleware } from "redux";
// import root reducer.
import reducer from "./reducers";
// import thunk.
import thunk from "redux-thunk";

export default createStore(reducer, applyMiddleware(thunk));
