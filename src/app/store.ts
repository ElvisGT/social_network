import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{},
});

export type RootCounter = ReturnType<typeof store.getState>;
