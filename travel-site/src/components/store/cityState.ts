import { createSlice } from "@reduxjs/toolkit";

interface initialStateType{
    lat:number,
    lon: number,
    place_id?:string,
    address_line1?:string,
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

const citySlice =createSlice({
    name:'city',
    initialState:{
        city:initialState,
        placesData:[]},
    reducers:{
        updateCity(state,action){
            state.city = action.payload;
        },
        removeCity(state){
            state.city=initialState;
            state.placesData =[];
        },
        updatePlaces(state,action){
            state.placesData = action.payload;
        }

    }
})

export const cityActions = citySlice.actions;

export default citySlice;