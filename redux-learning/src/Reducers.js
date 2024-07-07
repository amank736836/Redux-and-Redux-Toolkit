import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  c: 0,
};

const increment = createAction("increment");
const decrement = createAction("decrement");
const incrementByValue = createAction('incrementByValue')
const decrementByValue = createAction('decrementByValue')

export const customReducer = createReducer(
  initialState,
  //      {
  //   increment: (state) => {
  //     state.c += 1;
  //   },
  //   decrement: (state) => {
  //     state.c -= 1;
  //   },

  //   incrementByValue: (state, action) => {
  //     state.c += action.payload;
  //   },

  //   decrementByValue: (state, action) => {
  //     state.c -= action.payload;
  //   },
  // }
  (builder) => {
    builder
    .addCase(increment, (state, action) => {
      state.c += 1;
    })
    .addCase(decrement, (state, action) => {
      state.c -= 1;
    })
    .addCase(incrementByValue, (state, action) => {
      state.c += action.payload;
    })
    .addCase(decrementByValue, (state, action) => {
      state.c -= action.payload;
    })
  }
);
