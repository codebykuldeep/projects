import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

function ProductSection({ data, productData, isError, loading, error }) {
  const [products, setProducts] = useState(productData);

  useEffect(() => {
    setProducts(productData);
  }, [data, productData]);

  function handleProductSort(event) {
    if (event.target.dataset) {
      let propertyName = event.target.dataset.name;

      if (propertyName === "title" || propertyName === "category") {
        setProducts((prev) =>
          prev.toSorted((a, b) =>
            a[propertyName].localeCompare(b[propertyName])
          )
        );
      } else if (propertyName === "price" || propertyName === "discount")
        setProducts((prev) =>
          prev.toSorted((a, b) => a[propertyName] - b[propertyName])
        );
    }
  }
  return (
    <>
      {/* <div className='sticky-box'>
            <ul className="product-table-title">
              <li className="product-name" data-name='title'>Product Name</li>
              <li className="product-id">Product ID</li>
              <li className="product-price" data-name='price'>Price</li>
              <li className="product-stock" data-name='stock'>Stock</li>
              <li className="product-status">Availability</li>
              <li className="product-category" data-name='category'>Category</li>
              <li className="product-discount" data-name='discount'>Discount</li>
              <li className="product-action">Action</li>
            </ul>
          </div> */}
      <div className="product-table" onClick={handleProductSort}>
        <ul className="product-table-title">
          <li className="product-name" data-name="title">
            Product Name
          </li>
          <li className="product-id">Product ID</li>
          <li className="product-price" data-name="price">
            Price
          </li>
          <li className="product-stock" data-name="stock">
            Stock
          </li>
          <li className="product-status">Availability</li>
          <li className="product-category" data-name="category">
            Category
          </li>
          <li className="product-discount" data-name="discount">
            Discount
          </li>
          <li className="product-action">Action</li>
        </ul>

        {isError && (
          <div className="loader-box">
            <div className="error-data">{error.message}</div>
          </div>
        )}
        {loading && (
          <div className="loader-box">
            <div className="loader"></div>
          </div>
        )}

        {data && <ProductList products={products} />}
      </div>
    </>
  );
}

export default ProductSection;
