import { combineReducers } from "redux";
import ConsentReducer from "./consent-store/reducer";

const rootReducer = combineReducers({
    ConsentReducer,
});

export default rootReducer;