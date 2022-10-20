// here we combine all reducers this is basically rootreducer which is further used in store
import ChangeTheNumber from "./upDown"
import {combineReducers} from "redux"

const rootReducer = combineReducers({
   ChangeTheNumber
})




export default rootReducer;