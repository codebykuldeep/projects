export function emailFieldValidation(text) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return !pattern.test(text);
}

export function emptyField(text) {
  if (!text) return true;

  return false;
}

export function emptyString(text) {
  
  if (!text || text.trim() === "") return true;

  return false;
}

export function imageFileValidate(image) {
  if (!image.name) return true;

  return false;
}

export function clickableValidate(field) {
  if (!field) return true;

  return false;
}

export const initialValidationState = {
  title: {
    status: false,
    error: "",
  },
  category: {
    status: false,
    error: "",
  },
  description: {
    status: false,
    error: "",
  },
  date: {
    status: false,
    error: "",
  },
  stockAvail: {
    status: false,
    error: "",
  },
  stock: {
    status: false,
    error: "",
  },
  email: {
    status: false,
    error: "",
  },
  price:{
    status: false,
    error: "",
  },
  image: {
    status: false,
    error: "",
  },
  supplierType: {
    status: false,
    error: "",
  },
};

export default function formValidation(form, state) {
  
  
  //email
  let email = {
    status: false,
    error: "",
  };
  if (emptyString(form.email)) {
    email = {
      status: true,
      error: "This Field cannot be empty !",
    };
  } else if (emailFieldValidation(form.email)) {
    email = {
      status: true,
      error: "Please enter a valid email !",
    };
  }
  //title
  let title = {
    status: false,
    error: "",
  };
  if (emptyString(form.title)) {
    title = {
      status: true,
      error: "Please enter product name",
    };
  }

  //category field
  let category = {
    status: false,
    error: "",
  };

  if (emptyField(form.category)) {
    category = {
      status: true,
      error: "Please select a product category",
    };
  }

  //description
  let description = {
    status: false,
    error: "",
  };
  if (emptyField(form.description)) {
    description = {
      status: true,
      error: "Please enter product description",
    };
  }

  //product date
  let date = {
    status: false,
    error: "",
  };
  if (emptyField(form.date)) {
    date = {
      status: true,
      error: "Please select product date",
    };
  }

  //stock avail field
  let stockAvail = {
    status: false,
    error: "",
  };

  if (clickableValidate(form.stockAvail)) {
    stockAvail = {
      status: true,
      error: "Please select stock availability",
    };
  } else if (!clickableValidate(form.stockAvail)) {
    
    if (form.stockAvail=== 'true' && !form.stock) {
      console.log(form.stock);
      
      state.stock = {
        status: true,
        error: "Please fill the stock quantity",
      };
      
    } else if (form.stockAvail=== 'true' && form.stock) {
      if (Number(form.stock) <= 0) {
        state.stock = {
          status: true,
          error: "Enter stock quantity greater than 0",
        };
      }
    } else if(form.stockAvail === 'false') {
      state.stock = {
        status: false,
        error: "",
      };
    }
  }

  //image
  let image = {
    status: false,
    error: "",
  };
  if (imageFileValidate(form.image)) {
    image = {
      status: true,
      error: "Please upload a product image",
    };
  }

  //checkbox
  let supplierType = {
    status: false,
    error: "",
  };
  if (form.supplierType.length === 0) {
    supplierType = {
      status: true,
      error: "Please select atleast one type!",
    };
  }

  let price ={
    status: false,
    error: "",
  }
  if(form.price ===""){
    price={
      status: true,
      error: "Please enter product price!",
    }
  }
  else if(form.price){
    if (Number(form.price) <= 0) {
     price = {
        status: true,
        error: "Enter price greater than 0",
      };
    }
  }


  //stock
  const newState= {
    ...state,
    title,
    category,
    description,
    date,
    stockAvail,
    email,
    image,
    supplierType,
    price,
    result:false,
  };

  let result =true;
    for(let x in newState){
      
      result = result && !newState[x].status;
      
  }
  
  newState.result = result;
  
  return newState;
  
}
