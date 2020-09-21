import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger]; //used to  log state

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
