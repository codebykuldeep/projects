import { UserInfo } from "firebase/auth";

export interface InputStateType{
    error?:boolean;
    value?:string;
    errorMsg?:string;
}

export interface ErrorType{
    message:string;
}

export interface UserDataType{
    accessToken:string;
    displayName?:string;
    email?:string;
    uid?:string;
}

export interface ApiDataType{
    user:UserInfo;
}