import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/index";

const composer = compose
const sagaMiddleware = createSagaMiddleware();

let middleWares = composer(applyMiddleware(sagaMiddleware, logger));

const store = createStore(rootReducer, middleWares);

sagaMiddleware.run(rootSaga);

export default store;
