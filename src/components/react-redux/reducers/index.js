import CounterReducer from "./counterReducer";
import LoggedReducer from "./loggedReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: CounterReducer,
  isLogged: LoggedReducer,
});

export default allReducers;
