// import create store
import { createStore, applyMiddleware } from "redux";
// import root reducer.
import reducer from "./reducers";
// import redux saga.
import createSagaMiddleware from 'redux-saga';
// import root saga.
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
