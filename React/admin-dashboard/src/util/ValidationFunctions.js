import {emailFieldValidation} from'./ValidationLogic'

const errorMap ={
  title:'Please enter product name',
  description:'Please enter product description',
  category:'Please select a product category',
  date:'Please select product date',
  image:'Please upload a product image',
  supplierType:"Please select atleast one type!",
}

export function validateField(field,state){
  
  
  
  let errorDetail ={
    status:false,
    error:''
  }
  if(field.name === 'email'){
    if (!field.value || field.value.trim() === '') {
      errorDetail = {
        status: true,
        error: "This Field cannot be empty !",
      };
    } else if (emailFieldValidation(field.value)) {
      errorDetail = {
        status: true,
        error: "Please enter a valid email !",
      };
    }
  }
  else if(field.name === 'category'){
    if (field.value === 'Select your option') {
      errorDetail = {
          status: true,
          error: errorMap[field.name],
        };
    }
  }
  else if(field.name === 'stock'){
    if (!field.value || field.value.trim() === '') {
      errorDetail = {
        status: true,
        error: "Please fill the stock quantity",
      };
      
    } else if (Number(field.value) <= 0) {
      errorDetail = {
        status: true,
        error: "Enter stock quantity greater than 0",
      };
    }
  }
  else if(field.name === 'price'){
    if(field.value ===""){
      errorDetail={
        status: true,
        error: "Please enter product price!",
      }
    }
    else if(field.value){
      if (Number(field.value) <= 0) {
        errorDetail = {
          status: true,
          error: "Enter price greater than 0",
        };
      }
    }

  }
  else if(!field.value || field.value.trim() === ''){
    errorDetail ={
      status:true,
      error:errorMap[field.name]
    }
  }
  
  
  
  return {...state,
    [field.name]:{
      ...errorDetail
    }
  }
}