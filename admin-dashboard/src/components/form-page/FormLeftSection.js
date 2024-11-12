import React, { useState } from 'react'
import FieldError from './FieldError';
import categoryList from "../data/categoryData";
import { categoryValidation, dateValidation, descriptionValidation, emailValidation, stockValidation, titleValidation } from '../../util/ValidationFunctions'

function FormLeftSection({validationState,handleFieldValidation,handleChange}) {
  const [stockAvailablity, setStockAvailablity] = useState(false);
  
  const [discountVal ,setDiscountVal] = useState(0);


  

  function  handleDiscount(event) {
    setDiscountVal(event.target.value)
  }
  return (
    <div className="form-left">
          <div className="form-input">
            <label htmlFor="">
              Product Name <span>*</span>
            </label>
            <input
              type="text"
              name="title"
              className={validationState.title.status ? "error" : ""}
              onChange={(event)=>handleFieldValidation(event,titleValidation)}
            />
            {validationState.title.status && (
              <FieldError error={validationState.title.error} />
            )}
          </div>

          <div className="form-input">
            <label htmlFor="category">
              Category <span>*</span>
            </label>

            <select
              name="category"
              defaultValue={"Select your option"}
              className={validationState.category.status ? "error" : ""}
              onBlur={(e)=>handleFieldValidation(e,categoryValidation)}
              onChange={(e)=>handleFieldValidation(e,categoryValidation)}
            >
              <option defaultValue="" disabled>
                Select your option
              </option>
              {categoryList.map(({ slug, name }) => (
                <option key={slug} defaultValue={slug}>
                  {name}
                </option>
              ))}
            </select>
            {validationState.category.status && (
              <FieldError error={validationState.category.error} />
            )}
          </div>

          <div className="form-input">
            <label htmlFor="description">
              Description <span>*</span>
            </label>
            <textarea
              name="description"
              id="description"
              onChange={(event)=>handleFieldValidation(event,descriptionValidation)}
              className={validationState.description.status ? "error" : ""}
            ></textarea>
            {validationState.description.status && (
              <FieldError error={validationState.description.error} />
            )}
          </div>

          <div className="form-input">
            <label htmlFor="date">
              Product Date <span>*</span>
            </label>
            <input
              type="date"
              name="date"
              id="date"
              onBlur={(e)=>handleFieldValidation(e,dateValidation)}
              onChange={(e)=>handleFieldValidation(e,dateValidation)}
              className={validationState.date.status ? "error" : ""}
            />
            {validationState.date.status && (
              <FieldError error={validationState.date.error} />
            )}
          </div>

          <div className="form-input">
            <label htmlFor="discount">
              Discount <span>*</span> - {discountVal}%
            </label>
            <input
              type="range"
              name="discount"
              id="discount"
              defaultValue={0}
              onChange={handleDiscount}
            />
          </div>

          <div className="form-input type-radio">
            <label htmlFor="">
              Stock Available <span>*</span>
            </label>
            <div>
              <input
                type="radio"
                id="yes-stock"
                name="stockAvail"
                value={true}
                onClick={() => setStockAvailablity(true)}
                onChange={handleChange}
              />
              <label htmlFor="yes-stock">YES</label>
            </div>
            <div>
              <input
                type="radio"
                id="no-stock"
                name="stockAvail"
                value={false}
                onClick={() => setStockAvailablity(false)}
                onChange={handleChange}
              />
              <label htmlFor="no-stock">NO</label>
            </div>
          </div>
          {validationState.stockAvail.status && (
            <FieldError error={validationState.stockAvail.error} />
          )}

          <div className="form-input">
            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              name="stock"
              id="stock"
              min={0}
              disabled={!stockAvailablity}
              className={validationState.stock.status ? "error" : ""}
              onChange={(e)=>handleFieldValidation(e,stockValidation)}
            />
            {validationState.stock.status && (
              <FieldError error={validationState.stock.error} />
            )}
          </div>

          <div className="form-input">
            <label htmlFor="email">
              Supplier Email <span>*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className={validationState.email.status ? "error" : ""}
              onChange={(event)=>handleFieldValidation(event,emailValidation)}
            />
            {validationState.email.status && (
              <FieldError error={validationState.email.error} />
            )}
          </div>
        </div>
  )
}

export default FormLeftSection