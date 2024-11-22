import { createSlice, configureStore } from '@reduxjs/toolkit'
// import { applyMiddleware } from 'redux'
// import { thunk } from 'redux-thunk'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    sum: 0
  },
  reducers: {
    incremented: (state) => {
        console.log(state.num)
      state.sum += 1
    },
    decremented: (state) => {
      state.sum -= 1
    },
  }
})

export const { incremented, decremented } = counterSlice.actions

export const store = configureStore({
  reducer: counterSlice.reducer
})