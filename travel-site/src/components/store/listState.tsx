import { createSlice } from "@reduxjs/toolkit";

export interface travelListItemType{
    place_id:string;
    lat:number;
    lon:number;
    name?:string;
    formatted?:string;
    website?:string;
    address_line1?:string;
    address_line2?:string;
}

const initialTravelListState:travelListItemType[] =[];

const listSlice =createSlice({
    name:'list',
    initialState:{
        openList:false,
        travelList:initialTravelListState
    },
    reducers:{
        openTravelList(state){
            state.openList = true;
        },
        closeTravelList(state){
            state.openList=false;
        },
        addItemToList(state,action){
            if(state.travelList.findIndex((item)=>item.place_id === action.payload.place_id) === -1){
                state.travelList.push(action.payload)
            }
            
        },
        removeItemFromList(state,action){
            state.travelList = state.travelList.filter((item)=>item.place_id !== action.payload.place_id)
            
        }

    }
});


export const listActions =listSlice.actions;

export default listSlice