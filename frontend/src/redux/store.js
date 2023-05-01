import { applyMiddleware, combineReducers, createStore } from "redux"
import { studentsReducer } from "./Reducers/DataReducers"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    allData: studentsReducer
})
const reduxStore = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)
export default reduxStore