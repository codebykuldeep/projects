import {emptyString,emailFieldValidation,emptyField} from'./ValidationLogic'


export function emailValidation(field,state){
    let email = {
      status: false,
      error: "",
    };
    if (emptyString(field)) {
      email = {
        status: true,
        error: "This Field cannot be empty !",
      };
    } else if (emailFieldValidation(field)) {
      email = {
        status: true,
        error: "Please enter a valid email !",
      };
    }
  
    return {...state,email};
  }
  export function titleValidation(field,state){
    let title = {
      status: false,
      error: "",
    };
    if (emptyString(field)) {
      title = {
        status: true,
        error: "Please enter product name",
      };
    }
  
    return {...state,title}
  }
  
  export function descriptionValidation(field,state){
    let description = {
      status: false,
      error: "",
    };
    if (emptyField(field)) {
      description = {
        status: true,
        error: "Please enter product description",
      };
    }
    return {...state,description}
  }

  export function categoryValidation(field,state){
    let category = {
        status: false,
        error: "",
    };
    if (field === 'Select your option') {
        category = {
            status: true,
            error: "Please select a product category",
          };
    }
    return {...state,category}
  }

  export function dateValidation(field,state){
    let date = {
        status: false,
        error: "",
      };
      if (emptyField(field)) {
        date = {
          status: true,
          error: "Please select product date",
        };
      }
    return {...state,date}
  }

  export function stockValidation(field,state){
    let stock = {
        status: false,
        error: "",
      };
    if (emptyString(field)) {
        stock = {
          status: true,
          error: "Please fill the stock quantity",
        };
        
      } else if (!emptyString(field)) {
        if (Number(field) <= 0) {
          stock = {
            status: true,
            error: "Enter stock quantity greater than 0",
          };
        }
      }

      return {...state,stock}
  }

  export function imageValidation(field,state){
    let image = {
        status: false,
        error: "",
      };
      
      if (emptyField(field)) {
        image = {
            status: true,
            error: "Please upload a product image",
          };
      }
      console.log(image);
      
    return {...state,image}
  }



  
  