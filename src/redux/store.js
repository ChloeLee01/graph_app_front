import { combineReducers, configureStore } from "@reduxjs/toolkit";
// combineReducers: 여러 리듀서를 하나로 합쳐주는 함수
// configureStore: 스토어를 생성하는 함수
import apisReducer from "./slices/apiSlice";
import sidebarReducer from "./slices/sidebarSlice";

const store = configureStore({
  reducer: combineReducers({
    apis: apisReducer, // 값은 만드는 이름
    sidebar: sidebarReducer,
  }),
});

export default store;
