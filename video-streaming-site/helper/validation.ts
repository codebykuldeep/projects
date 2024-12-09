function emailValidation(value:string):[string,boolean]{
    if(value.trim()===''){
        return ['This field is required',true];
    }

    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!pattern.test(value)){
        return ['Enter a valid Email',true];
    }
    return ['',false];
}

function passwordValidation(value:string):[string,boolean]{
    value =value.trim();
    if(value ===''){
        return ['This field is required',true];
    }
    if(value !=='' &&  value.length < 6){
        return ['Minimum Password length should be 6',true];
    }
    return ['',false];
}

function nameValidation(value:string):[string,boolean]{
    if(value.trim() ===''){
        return ['This field is required',true];
    }
    return ['',false];
}


export function validation(title:string,value:string):[string,boolean]{
    
    title = title.toLowerCase();
    if(title === 'email'){
        return emailValidation(value);
    }

    if(title === 'password'){
        return passwordValidation(value);
    }

    if(title === 'name'){
        return nameValidation(value);
    }

    return ['',false];
}