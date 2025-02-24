import { getFormInitialState } from "./formMethods";


const errorMap ={
    title:'Please enter product name',
    description:'Please enter product description',
    category:'Please select a product category',
    date:'Please select product date',
    image:'Please upload a product image',
    supplierType:"Please select atleast one type!",
    stockAvail:"Please select one option"
  }


function nameValidation(value){
    if(value.trim()===''){
        return ['This field is required',true];
    }

    const pattern = /^[a-zA-Z ]*$/;
    if(!pattern.test(value)){
        return ['Enter a valid name',true];
    }
    else if(value.length <3){
        return ['Enter a name of valid length',true];
    }
    return ['',false];
}
function emailValidation(value){
    if(value.trim()===''){
        return ['This field is required',true];
    }

    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!pattern.test(value)){
        return ['Enter a valid Email',true];
    }
    return ['',false];
}

function passwordValidation(value){
    value =value.trim();
    if(value ===''){
        return ['This field is required',true];
    }
    if(value !=='' &&  value.length < 6){
        return ['Minimum Password length should be 6',true];
    }
    return ['',false];
}

function supplierTypeValidation(value){
    
    if(value.length === 0){
        return ['Select alteast one type of supplier',true];
    }
    return ['',false];
}


function fieldValidation(title,value){
    if(!value){
        return [errorMap[title],true];
    }
    
    if(String(value).trim() ===''){
        return ['This field is required',true];
    }
    
    return ['',false];
}


export function validation(title,value){
   
    //title = title.toLowerCase();
    if(title === 'email'){
        return emailValidation(value);
    }

    if(title === 'password'){
        return passwordValidation(value);
    }
    if(title === 'image'){
        
        if(value  === ''){
            return [`Please select a ${title}`,true];
        }
        return ['',false];
    }
    if(title === 'stock' || title === 'phone'){
        
        if(value ==='' || Number(value) <  0 ){
            return [`Please enter valid stock amount`,true];
        }
        return ['',false];
    }
    if(title === 'price'){
        if(value === null || value === '' || Number(value) < 0){
            return [`Please enter valid amount`,true];
        }
        return ['',false];
    }
    if(title === 'stockAvail'){
        
        
        if( value === ''){
            return [errorMap[title],true];
        }
        return ['',false];
    }
    if(title === 'supplierType'){
        return supplierTypeValidation(value);
    }
    if(title === 'name' ){
        return nameValidation(value);
    }

    
    return fieldValidation(title,value);
}

export function checkValidFormState(formState){
    
    for(const key in formState){
    const [,state] = validation(key,formState[key].value)
    if(state === true){
        
        return false;
    }
    if(formState[key].status || !String(formState[key].value)){
        return false;
    }  
    }
    return true;
}

export function populateFormState(formState){
    
    for(const key in formState){
         const [msg,status] = validation(key,formState[key].value);
         formState ={
            ...formState,
            [key]:{
                error:msg,
                status:status,
                value:formState[key].value
            }
         }
    }
    
    return formState;
}







export function fillFormStateWithData(data){
  const obj ={
    value: "",
    status: false,
    error: "",
  };
  const state = getFormInitialState();
  for(let key in data){
    state[key] ={...obj};
    state[key].value = data[key];
  }
  return state;
}

