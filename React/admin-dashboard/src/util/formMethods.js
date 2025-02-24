

const initialValidationState = {
    title: {
      value: "",
      status: false,
      error: "",
    },
    category: {
      value: "",
      status: false,
      error: "",
    },
    description: {
      value: "",
      status: false,
      error: "",
    },
    date: {
      value: "",
      status: false,
      error: "",
    },
    stockAvail: {
      value: "",
      status: false,
      error: "",
    },
    stock: {
      value: "0",
      status: false,
      error: "",
    },
    email: {
      value: "",
      status: false,
      error: "",
    },
    price: {
      value: "",
      status: false,
      error: "",
    },
    image: {
      value: "",
      status: false,
      error: "",
    },
    supplierType: {
      value: [],
      status: false,
      error: "",
    },
  };
   
  
export function getFormInitialState(){
    return structuredClone(initialValidationState);
}