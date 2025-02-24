import React, { useState } from "react";
import "./Form.css";
import FormLeftSection from "./FormLeftSection";
import FormRightSection from "./FormRightSection";
import { Link, useNavigate } from "react-router-dom";
import {
  addProduct,
  updateProduct,
} from "../../util/HttpFunctions";
import { useMutation, useQueryClient } from "react-query";

import { motion } from "motion/react";
import { checkValidFormState, populateFormState, validation } from "../../util/validation";
import { getFormInitialState } from "../../util/formMethods";

function FormPage({editMode = false,prevState,id}) {
  
  const queryClient = useQueryClient();
  const [validationState, setValidationState] = useState(
    editMode ? prevState :getFormInitialState()
  );

  //When editing a product;
  const [imageSelected, setImageSelected] = useState("");
  const navigate = useNavigate();

  const { mutate ,isLoading } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      navigate("/products");
    },
  });
  const UpdateMutate = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      navigate("/products");
      queryClient.removeQueries({queryKey:['product',id],exact:true});
    },
  });


  function getImage(imgFile) {
    
    setImageSelected(imgFile);
  }

  function handleForm(event) {
    event.preventDefault();
    
    if(checkValidFormState(validationState)){
      const fd = new FormData(event.target);
      const form = Object.fromEntries(fd.entries());
      const supplierType = fd.getAll("supplierType");
      form.category = fd.get('category');
      form.supplierType = supplierType;
      if (!imageSelected) {
        form.image = prevState.image.value;
      }
      if(editMode){
        UpdateMutate.mutate({form,id});
      }
      else{
        mutate(form);
      }
    }
    else{
      setValidationState(populateFormState(validationState))
    }
    
  }
  function handleResetForm(event) {
    event.target.reset();
    setValidationState({
        ...getFormInitialState(),
        [`supplierType`]: {
          value:[],
          status: false,
          error: '',
        }});
  }

  function handleChange(event) {
    const inputFieldName = event.target.name;
    const inputValue = event.target.value;
    const [msg,status] = validation(inputFieldName,inputValue)
    console.log(inputFieldName,inputValue,msg,status);
    
    if(inputFieldName === 'supplierType'){
      let newArr;
      if(validationState.supplierType.value.includes(inputValue)){
        newArr = validationState.supplierType.value.filter((item)=>item !== inputValue)
      }
      else{
        newArr = validationState.supplierType.value;
        newArr.push(inputValue);
      }
      setValidationState((prev) => {
        return {
          ...prev,
          [`${inputFieldName}`]: {
            value:newArr,
            status: false,
            error: '',
          },
        };
      });
    }
    else{
      setValidationState((prev) => {
        return {
          ...prev,
          [`${inputFieldName}`]: {
            value:inputValue,
            status: status,
            error: msg,
          },
        };
      });
    }
  
  }
  
  
  function handleChangeValidation(event) {
    const name = event.target.name;
    
    
    const [msg,status] = validation(name,validationState[name].value);
    setValidationState(prev=>({
      ...prev,
      [name]:{
        value:prev[name].value,
        status:status,
        error:msg
      }
    }));
  }
  console.log(validationState);
  
  return (
    <div className="container">
      <div>
        <motion.div
          whileHover={{ scale: 1.08, x: [2, 0, -2, 0], y: [2, 0, -2, 0] }}
          transition={{
            duration: 0.3,
            type: "spring",
            mass: 3,
            stiffness: 500,
          }}
          className="back-btn"
        >
          <Link to={"/products"}>
            <i className="fa-solid fa-arrow-left"></i> Back
          </Link>
        </motion.div>
      </div>

      {/* {Loading && (
        <div className="loader-box">
          <div className="loader"></div>
        </div>
      )} */}

      { (
        <form className="form-container" onSubmit={handleForm} onReset={handleResetForm}>
          <div className="form-header">
            <div>{editMode ? <h1>Edit Product</h1> : <h1>Add Product</h1>}</div>
           {(UpdateMutate.isLoading || isLoading) ?(
            <div>Submitting...</div>
           ):(
             <div className="form-button">
             <motion.button
               whileHover={{ scale: 1.08 }}
               transition={{ duration: 0.3, type: "tween" }}
               type="submit"
             >
               SUBMIT
             </motion.button>
             <motion.button
               whileHover={{ scale: 1.08 }}
               transition={{ duration: 0.3, type: "tween" }}
               type="reset"
             >
               RESET
             </motion.button>
           </div>
           )}
          </div>

          <div className="form-control">
            <FormLeftSection
              validationState={validationState}
              handleChange={handleChange}
              handleChangeValidation={handleChangeValidation}
            />

            <FormRightSection
              validationState={validationState}
              handleChange={handleChange}
              handleChangeValidation={handleChangeValidation}
              handleResetForm={handleResetForm}
              getImage={getImage}
            />
          </div>
        </form>
      )}
    </div>
  );
}

export default FormPage;
