import React, { useState } from "react";
import "./Form.css";
import categoryList from "../data/categoryData";

function FormPage() {
  const [stockAvailablity, setStockAvailablity] = useState(false);
  return (
    <div className="container">
      <div>
        <h1>Add Product</h1>
      </div>

      <form className="form-control">
        <div className="form-left">

          <div className="form-input">
            <label htmlFor="">
              Product Name <span>*</span>
            </label>
            <input type="text" />
          </div>

          <div className="form-input">
            <label htmlFor="category">
              Category <span>*</span>
            </label>

            <select name="category" defaultValue={"Select your option"}>
              <option defaultValue="" disabled>
                Select your option
              </option>
              {categoryList.map(({ slug, name }) => (
                <option key={slug} defaultValue={slug}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-input">
            <label htmlFor="description">
              Description <span>*</span>
            </label>
            <textarea name="description" id="description"></textarea>
          </div>

          <div className="form-input">
            <label htmlFor="date">
              Product Date <span>*</span>
            </label>
            <input type="date" name="date" id="date" />
          </div>

          <div className="form-input">
            <label htmlFor="discount">
              Discount <span>*</span>
            </label>
            <input type="range" name="discount" id="discount" />
          </div>

          <div className="form-input type-radio">
            <label htmlFor="">
              Stock Available <span>*</span>
            </label>
            <div>
              <input
                type="radio"
                id="yes-stock"
                name="stock-avail"
                value={true}
                onClick={() => setStockAvailablity(true)}
              />
              <label htmlFor="yes-stock">YES</label>
            </div>
            <div>
              <input
                type="radio"
                id="no-stock"
                name="stock-avail"
                value={false}
                onClick={() => setStockAvailablity(false)}
              />
              <label htmlFor="no-stock">NO</label>
            </div>
          </div>

          <div className="form-input">
            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              name="stock"
              id="stock"
              min={0}
              disabled={!stockAvailablity}
            />
          </div>

          <div className="form-input">
            <label htmlFor="email">
              Supplier Email <span>*</span>
            </label>
            <input type="email" id="email" />
          </div>

          <div>
            <input type="submit" value={"SUBMIT"} />
            <input type="reset" value={"RESET"} />
          </div>

        </div>

        <div className="form-right"></div>
      </form>
    </div>
  );
}

export default FormPage;
