import { configureStore } from "@reduxjs/toolkit";
import citySlice from "./cityState";
import hotelSlice from "./hotelState";
import listSlice from "./listState";
import userSlice from "./userState";


const store = configureStore({
    reducer:{
        city:citySlice.reducer,
        hotel:hotelSlice.reducer,
        list:listSlice.reducer,
        user:userSlice.reducer,
    }
})

export default store;


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;