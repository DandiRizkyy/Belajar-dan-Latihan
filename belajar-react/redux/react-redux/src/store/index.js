import { createStore } from "react-redux";

const reducerFn = (state = { counter: 0 }, action) => {
  return state;
};
const store = createStore(reducerFn);

export default store;
