import React from "react";
import "./ProductPage.css";
import "./Product-table.css";

import { Link } from "react-router-dom";

function ProductPage() {
  return (
    <div className="container">
      <h1>Products Section</h1>
      <div className="product-page">
        <div className="product-header">
          <div>
            <form>
              <div className="search-bar">
                <input type="text" placeholder="Search Here..." />
                <button type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="add-product-btn">
            <button>
              <Link to={"new"}>
                {" "}
                <strong>+</strong> ADD NEW
              </Link>
            </button>
          </div>
        </div>

        <div className="product-table">
          <ul className="product-table-title">
            <li className="product-name">Product Name</li>
            <li className="product-id">Product ID</li>
            <li className="product-price">Price</li>
            <li className="product-stock">Stock</li>
            <li className="product-status">Availability</li>
            <li className="product-category">Category</li>
            <li className="product-discount">Discount</li>
            <li className="product-action">Action</li>
          </ul>

          <div>
            {new Array(10).fill(0).map((val, index) => (
              <ul key={index} className="product-table-item">
                <li className="product-name">Product Name</li>
                <li className="product-id">Product ID</li>
                <li className="product-price">Price</li>
                <li className="product-stock">Stock</li>
                <li className="product-status">Availability</li>
                <li className="product-category">Category</li>
                <li className="product-discount">Discount</li>
                <li className="product-action">Action</li>
              </ul>
            ))}
          </div>
        </div>

        <div className="product-page-footer">
          <div className="product-count">
            <label htmlFor="count">Showing</label>
            <select name="count" id="count" defaultValue={"10"}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            <span>entries</span>
          </div>

          <div className="pagination">
            <div><span>{"<"}</span></div>
            <div><span>1</span></div>
            <div><span>1</span></div>
            <div><span>1</span></div>
            <div><span>{">"}</span></div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default ProductPage;
