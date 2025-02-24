import React from 'react'
import FieldError from './FieldError';
import categoryList from "../data/categoryData";
import { dateFormatter } from '../../util/utilFunctions';

function FormLeftSection({validationState,handleChange,handleChangeValidation}) {
  
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
              onChange={handleChange}
              defaultValue={validationState.title.value}
            />
            <FieldError validationState={validationState} field={'title'}/>
          </div>

          <div className="form-input">
            <label htmlFor="category">
              Category <span>*</span>
            </label>

            <select
              name="category"
              defaultValue={validationState.category.value}
              className={validationState.category.status ? "error" : ""}
              onBlur={handleChangeValidation}
              onChange={handleChange}
            >
              <option defaultValue="" disabled={validationState.category.value !== ''}>
                Select your option
              </option>
              {categoryList.map((item) => (
                <option key={item} defaultValue={item}>
                  {item}
                </option>
              ))}
            </select>
            <FieldError validationState={validationState} field={'category'}/>
            
          </div>

          <div className="form-input">
            <label htmlFor="description">
              Description <span>*</span>
            </label>
            <textarea
              name="description"
              id="description"
              onChange={handleChange}
              className={validationState.description.status ? "error" : ""}
              defaultValue={validationState.description.value}
            ></textarea>
            <FieldError validationState={validationState} field={'description'}/>
            
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
              onChange={handleChange}
              className={validationState.date.status ? "error" : ""}
              defaultValue={dateFormatter(validationState.date.value)}
            />
            <FieldError validationState={validationState} field={'date'}/>
        
          </div>

          <div className="form-input">
            <label htmlFor="discount">
              Discount <span>*</span> - {validationState?.discount?.value || 0}%
            </label>
            <input
              type="range"
              name="discount"
              id="discount"
              defaultValue={Number(validationState?.discount?.value || 0)}
              onChange={handleChange}
            />
          </div>

          <div className="form-input type-radio">
            <label htmlFor="" >
              Stock Available <span>*</span>
            </label>
            <div>
              <input
                type="radio"
                id="yes-stock"
                name="stockAvail"
                value={true}
                onChange={handleChange}
                defaultChecked={validationState.stockAvail.value === 'true' || validationState.stockAvail.value === true}
              />
              <label htmlFor="yes-stock">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                id="no-stock"
                name="stockAvail"
                value={false}
                onChange={handleChange}
                defaultChecked={validationState.stockAvail.value === 'false' || validationState.stockAvail.value === false}
              />
              <label htmlFor="no-stock">No</label>
            </div>
          </div>
          <FieldError validationState={validationState} field={'stockAvail'}/>
        
          {
            (validationState.stockAvail.value === 'true' || validationState.stockAvail.value === true) ? (
              <div className="form-input">
            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              name="stock"
              id="stock"
              min={0}
              className={validationState.stock.status ? "error" : ""}
              onChange={handleChange}
              defaultValue={validationState?.stock?.value || ''}
            />
            <FieldError validationState={validationState} field={'stock'}/>
            </div>
            ) : <></>
          }

          <div className="form-input">
            <label htmlFor="email">
              Supplier Email <span>*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className={validationState.email.status ? "error" : ""}
              onChange={handleChange}
              defaultValue={validationState.email.value}
            />
            <FieldError validationState={validationState} field={'email'}/>
          </div>
          <div className="form-input">
            <label htmlFor="price">Price <span>*</span></label>
            <input
              type="number"
              name="price"
              id="price"
              className={validationState.price.status ? "error" : ""}
              onChange={handleChange}
              defaultValue={validationState.price.value}
            />
            <FieldError validationState={validationState} field={'price'}/>
            </div>
        </div>
  )
}

export default FormLeftSection