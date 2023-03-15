import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        taskCreated: (state, { payload }) => {
            const task = { id: nanoid(), text: payload, done: false }
            state.unshift(task)
        },
        taskDeleted: (state, { payload }) => {
            return state.filter(el => el.id !== payload)
        },
        taskDone: (state, { payload }) => {
            const task = state.find(el => el.id === payload);
            if (task) {
                task.done = !task.done;
            }
        },
        taskUpdated: (state, { payload }) => {
            const task = state.find(el => el.id === payload.id);
            if (task) {
                task.text = payload.text;
            }
        },

    }

})

export default todoSlice.reducer;
export const { taskCreated, taskDeleted, taskUpdated, taskDone } = todoSlice.actions;