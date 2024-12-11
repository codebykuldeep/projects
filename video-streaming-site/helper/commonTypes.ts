export type ChangeEvent = React.ChangeEvent < HTMLInputElement > ;

export interface UserType{
    email:string;
    password:string;
    name?:string;
    isVerfied?:boolean;
    image?:string;
    id?:string;
    
}
export interface ErrorStateType{
    email:{
        status:boolean,
        message:string,
        value:string;
    };
    password:{
        status:boolean,
        message:string,
        value:string;
    };
    name?:{
        status:boolean,
        message:string,
        value:string;
    };
}

export interface ErrorType{
    [key:string]:string;
}


export interface VideoFormType{
    title:{
        status:boolean,
        message:string,
        value:string;
    };
    description:{
        status:boolean,
        message:string,
        value:string;
    };
    category:{
        status:boolean,
        message:string,
        value:string;
    };
    image:{
        status:boolean,
        message:string,
        value:string;
    };
    video:{
        status:boolean,
        message:string,
        value:string;
    }
}