import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value:number
};


const initialState:CounterState = {
    value:0
};

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state:CounterState) => {
            state.value += 1 
        },
        decrement:(state:CounterState) => {
            state.value = Math.max(0,state.value - 1)
        },

        incrementBy:(state:CounterState,action:PayloadAction<number>)=> {
            state.value += action.payload;
        }

    }
});

export default counterSlice.reducer;
export const {increment,decrement,incrementBy} = counterSlice.actions;
