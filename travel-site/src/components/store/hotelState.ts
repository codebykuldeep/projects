import { createSlice } from "@reduxjs/toolkit";

interface initialStateType{
    lat:number,
    lon: number,
    place_id?:string,
    address_line1?:string,
    name?:string;
}

// interface PlacesDataType{
//     properties?:{
//         lat?:number;
//         lon?:number;
//         name?:string;
//         address_line1?:string,
//         address_line2?:string;
//     };

// }

const initialState:initialStateType ={
    lat:28.6291306862852,
    lon: 77.22051506011745,
    
}
// const initialPlacesState:PlacesDataType = [];

const hotelSlice =createSlice({
    name:'hotel',
    initialState:{
        city:initialState,
        hotelData:[]},
    reducers:{
        updateCity(state,action){
            state.city = action.payload;
        },
        removeCity(state){
            state.city=initialState;
            state.hotelData =[];
        },
        updatePlaces(state,action){
            state.hotelData = action.payload;
        }

    }
})

export const hotelActions = hotelSlice.actions;

export default hotelSlice;