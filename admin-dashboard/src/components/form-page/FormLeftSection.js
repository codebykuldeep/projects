import React, { useState } from 'react'
import FieldError from './FieldError';
import categoryList from "../data/categoryData";

function FormLeftSection({validationState,handleChange,handleChangeValidation,productData}) {
  const [stockAvailablity, setStockAvailablity] = useState(false);
  
  const [discountVal ,setDiscountVal] = useState(productData.discount ||0);

  if(productData.id){
    productData.date = new Date(productData.date).toISOString().split('T')[0] ;

    if(productData.stockAvail === 'true'){
      setStockAvailablity(true);
      productData.stockAvail ='';
      
      
    }

    
  }
  console.log(stockAvailablity);
  

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
              onChange={handleChangeValidation}
              defaultValue={productData.title|| ''}
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
              defaultValue={productData.category || 'Select your option'}
              className={validationState.category.status ? "error" : ""}
              onBlur={handleChangeValidation}
              onChange={handleChangeValidation}
            >
              <option defaultValue="" disabled>
                Select your option
              </option>
              {categoryList.map(({ slug, name }) => (
                <option key={slug} defaultValue={slug}>
                  {slug}
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
              onChange={handleChangeValidation}
              className={validationState.description.status ? "error" : ""}
              defaultValue={productData.description || ''}
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
              onBlur={handleChangeValidation}
              onChange={handleChangeValidation}
              className={validationState.date.status ? "error" : ""}
              defaultValue={productData.date || ''}
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
              defaultValue={productData.discount ||0}
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
                defaultChecked={stockAvailablity}
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
                defaultChecked={stockAvailablity}
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
              onChange={handleChangeValidation}
              defaultValue={productData.stockAvail ? productData.stock: ''}
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
              onChange={handleChangeValidation}
              defaultValue={productData.email || ''}
            />
            {validationState.email.status && (
              <FieldError error={validationState.email.error} />
            )}
          </div>
        </div>
  )
}

export default FormLeftSection