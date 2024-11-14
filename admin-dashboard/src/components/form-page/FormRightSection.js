import React, { useState } from 'react'
import FieldError from './FieldError';
import { motion } from 'motion/react'; 
function FormRightSection({validationState,handleChange,handleChangeValidation,handleResetForm,productData,getImage}) {
const [file, setFile] = useState();
 

  function handleImageUpload(event) {
    // const img = event.target.files[0];
    const imgFile = event.target.files[0];
    handleChangeValidation(event);
    setFile(URL.createObjectURL(imgFile));
    getImage(imgFile);
  }

  if(productData.imageURL){
    if(!file){
      setFile(productData.imageURL)
      getImage({name:"previous-img",imageURL:productData.imageURL,exists:true})
    }
  }


  function checkForType(text){
    if(productData.supplierType){
      if(Array.isArray(productData.supplierType)){
        return productData.supplierType.includes(text) ? true : false;
      }else{
        return productData.supplierType === text ? true : false;
      }
    }
    return false
  }
  return (
    <div className="form-right">
          <div className='form-right-upper'>
          <div className="form-input">
            <label
              htmlFor="image"
              name="image"
              className={
                validationState.image.status ? "upload-img error" : "upload-img"
              }
            >
              <span>Upload Image</span>
            </label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {validationState.image.status && (
              <FieldError error={validationState.image.error} />
            )}
            {file && <img src={file} alt="Uploaded" />}
          </div>

          <div className="form-input">
            <label htmlFor="supplier-type">
              Supplier Type <span>*</span>
            </label>
            <div className="checkbox">
              <div>
                <input
                  type="checkbox"
                  id="supplier-type1"
                  name="supplierType"
                  value={"manufacturer"}
                  onChange={handleChange}
                  defaultChecked={checkForType("manufacturer")}
                />
                <label htmlFor="supplier-type1">Manufacturer</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="supplier-type2"
                  name="supplierType"
                  value={"distributor"}
                  onChange={handleChange}
                  defaultChecked={checkForType("distributor")}
                />
                <label htmlFor="supplier-type2">Distributor</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="supplier-type3"
                  name="supplierType"
                  value={"wholesalers"}
                  onChange={handleChange}
                  defaultChecked={checkForType("wholesalers")}
                />
                <label htmlFor="supplier-type3">Wholesalers</label>
              </div>
            </div>
            {validationState.supplierType.status && (
              <FieldError error={validationState.supplierType.error} />
            )}
          </div>
          </div>

          <div className="form-button">
            <motion.button whileHover={{scale:1.08}} transition={{duration:0.3,type:'tween'}} type="submit">SUBMIT</motion.button>
            <motion.button whileHover={{scale:1.08}} transition={{duration:0.3,type:'tween'}} type="reset" onClick={handleResetForm}>RESET</motion.button>
          </div>
        </div>
  )
}

export default FormRightSection