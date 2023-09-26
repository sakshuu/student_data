import { applyMiddleware, combineReducers, createStore } from "redux"
import { studentsReducer } from "./Reducers/DataReducers"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { auth } from "./Reducers/auth";

const rootReducer = combineReducers({
    allData: studentsReducer,
    authData : auth
})
const reduxStore = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)
export default reduxStore