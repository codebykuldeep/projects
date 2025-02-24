import React, { useState } from 'react'
import FieldError from './FieldError';

function FormRightSection({validationState,handleChange,getImage}) {
const [file, setFile] = useState(null);

  function handleImageUpload(event) {
    // const img = event.target.files[0];
    const imgFile = event.target.files[0];
    handleChange(event);
    setFile(URL.createObjectURL(imgFile));
    getImage(imgFile);
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
            <FieldError validationState={validationState} field={'image'}/>
            
            {(file || validationState.image.value) && <img src={file || validationState.image.value} alt="Uploaded" />}
          </div>

          <div className="form-input" >
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
                  defaultChecked={validationState.supplierType.value.includes("manufacturer")}
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
                  defaultChecked={validationState.supplierType.value.includes("distributor")}
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
                  defaultChecked={validationState.supplierType.value.includes("wholesalers")}
                />
                <label htmlFor="supplier-type3">Wholesalers</label>
              </div>
            </div>
            <FieldError validationState={validationState} field={'supplierType'}/>
          </div>
          </div>

        </div>
  )
}

export default FormRightSection