import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./feature/todoList";
import formReducer from "./feature/formSlice";
import { loadFromLocalStorage, saveToLocalStorage } from "./helpers/storage";

const rootReducer = combineReducers({
  todoList: todoReducer,
  form: formReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
