import taskReducer from "./task-reducer";
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    taskReducer,
});

let store = createStore(reducers);


export default store;