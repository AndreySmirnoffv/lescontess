import {combineReducers, createStore} from "redux";
import {basketReducer} from "./basketReducer/basketReducer";
import { basketPrice } from "./basketReducer/basketPrice";

const root = combineReducers({
    basketReducer,
    basketPrice
})
export const store = createStore(root);