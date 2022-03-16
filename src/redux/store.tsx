import { rootReducer } from "./combineReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStore = ReturnType<typeof rootReducer>