import { createSlice } from "@reduxjs/toolkit";

export const TaskSlice = createSlice({
  name: "Task",
  initialState: [],
  reducers: {
    ADD: (state, action) => {
      state.push(action.payload);
    },
    REMOVE: (state, action) => {
      return state.filter((item, idx) => idx !== action.payload);
    },
    UPDATE: (state, action) => {
      return state.map((item, id) =>
        id === action.payload.id1 ? action.payload.ed1 : item
      );
    },
  },
});
export const { ADD, REMOVE, UPDATE } = TaskSlice.actions;
export default TaskSlice.reducer;
