import { combineReducers } from "redux";
import posts from "./Posts";

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
