import { createSlice } from "@reduxjs/toolkit";

let initialData = JSON.parse(localStorage.getItem('tasks')) || []

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialData,
  reducers: {
    added: (state, action) => {
      const newTask = {
        id: action.payload.id,
        name: action.payload.name,
        completed: false
      }
      state.push(newTask);
    }
  }
})

export const { added } = taskSlice.actions

export default taskSlice.reducer