import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counterSilece'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})


export type RootState = ReturnType<typeof store.getState>
export { store };