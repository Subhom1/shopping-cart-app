import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import { shoppingReducer } from "./reducer/shoppingReducer";
import { commonReducer } from "./reducer/commonReducer";
import thunk from "redux-thunk";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return composeEnhancers(applyMiddleware(...middleware));
  } else {
    return applyMiddleware(...middleware);
  }
};
const allReducers = combineReducers({
  Shop: shoppingReducer,
  Common: commonReducer,
});
const composeEnhancersMiddlewares = bindMiddleware([thunk]);
export const store = createStore(allReducers, composeEnhancersMiddlewares);
