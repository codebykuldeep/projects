

interface UserType{
    email:string;
    password:string;
    name?:string;
    isVerfied?:boolean;
    
}
interface ErrorStateType{
    email:{
        status:boolean,
        message:string,
    };
    password:{
        status:boolean,
        message:string,
    };
    name?:{
        status:boolean,
        message:string,
    };
}

interface ErrorType{
    [key:string]:string;
}