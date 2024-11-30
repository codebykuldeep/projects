import { createSlice } from "@reduxjs/toolkit";

export interface UserDataType{
    accessToken:string;
    displayName?:string;
    email?:string;
    uid?:string;
}
const initialUserDetail:UserDataType ={
    accessToken:'',
}

const userSlice = createSlice({
    name:'user',
    initialState:{
        userLoggedIn:false,
        userDetails:initialUserDetail,
    },
    reducers:{
        setUserState(state,action){
            state.userLoggedIn = action.payload;
        },
        setUserDetails(state,action){
            state.userDetails = action.payload;
        },
        removeUser(state){
            state.userLoggedIn =false;
            state.userDetails = initialUserDetail;
        }
    }
})

export const userActions = userSlice.actions;

export default userSlice;