import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import counterReducer from "./createAppSlice"


export const store = configureStore({
reducer: {
  counter: counterReducer,
},
})


  


