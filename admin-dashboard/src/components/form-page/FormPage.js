import React, { useEffect, useState } from "react";
import "./Form.css";
import formValidation, {
  initialValidationState,
} from "../../util/ValidationLogic";
import {  validateField, } from "../../util/ValidationFunctions";
import FormLeftSection from "./FormLeftSection";
import FormRightSection from "./FormRightSection";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../util/HttpFunctions";

function FormPage() {

  const [validationState, setValidationState] = useState(
    initialValidationState
  );

  //When editing a product
  const [editMode,setEditMode] = useState(false);
  const [isLoading,setIsLoading] = useState(true);
  const [productData,setProductData] = useState([]);

  const params = useParams();
  

  useEffect(()=>{
    if(params.id){
      setEditMode(true);
      
      fetchProduct(params.id)
      .then(data=>{
        setProductData(data)
        setIsLoading(false);
      })
    }
    else{
      setIsLoading(false);
    }
  },[params])

  function handleForm(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const form = Object.fromEntries(fd.entries());
    const supplierType = fd.getAll("supplierType");
    form.supplierType = supplierType;

    setValidationState((prev) => formValidation(form, prev));
    console.log(form);
    
  }
  function handleResetForm() {
    setValidationState(initialValidationState);
  }

  function handleChange(event) {
    // console.log(event.target.name);

    setValidationState((prev) => {
      const inputFieldName = event.target.name;
      return {
        ...prev,
        [`${inputFieldName}`]: {
          status: false,
          error: "",
        },
      };
    });
  }
 
  function handleChangeValidation(event){
    setValidationState(validateField(event.target,validationState))
  }
  
  return (
    <div className="container">
      <div>
        {editMode ? (<h1>Edit Product</h1>) : (<h1>Add Product</h1>)}
      </div>

      {isLoading && <p>Loading .....</p>}

      {!isLoading && (
      <form className="form-control" onSubmit={handleForm}>
        <FormLeftSection validationState={validationState} handleChange={handleChange} handleChangeValidation={handleChangeValidation} productData={productData}
        />

        <FormRightSection validationState={validationState} handleChange={handleChange} handleChangeValidation={handleChangeValidation} handleResetForm={handleResetForm} productData={productData}/>

      </form>
      )}
    </div>
  );
}

export default FormPage;
