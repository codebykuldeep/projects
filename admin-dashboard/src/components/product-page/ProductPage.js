import React, { useRef, useState } from "react";
import "./ProductPage.css";
import "./Product-table.css";

import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { getData } from "../../util/HttpFunctions";
import ProductSection from "./ProductSection";

function ProductPage() {
  const [entriesCount, setEntriesCount] = useState(10);
  const [page, setPage] = useState(1);
  const [paginationCount ,setPaginationCount ] =useState(0)
  const [searchKeyword, setSearchKeyword] = useState("");
  const timer = useRef();

  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", entriesCount, page, searchKeyword],
    queryFn: ({ signal }) =>
      getData({ signal, page, entriesCount, searchKeyword }),
  });




  let productData;
  let pages ;
  let pagesArray =[];
  if (searchKeyword !== "") {
    productData = data;
  } else if (data) {
    pages =data.pages;
    pagesArray = (new Array(pages).fill(0)).map((val,index)=>index+1)
    productData = data.data;
  }

  function handleSearch(event) {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      console.log("fetching...");

      setSearchKeyword(event.target.value.trim());
    }, 500);
    queryClient.removeQueries();
  }

  function handleEntriesChange(event) {
    queryClient.removeQueries();
    setEntriesCount(Number(event.target.value));
  }

  function handlePageChange(pageNumber) {
    console.log(pageNumber);
    queryClient.removeQueries();
    setPage(pageNumber);
  }

  function handlePagination(action){
    if(action ==='dec'){
      setPaginationCount(prev => {
        if(prev-1< 0)
          return 0;
        return prev-1;
      })
    }
    if(action=== 'inc'){
      setPaginationCount(prev => {
        if(prev+1> pages)
          return pages;
        return prev+1;
      })
    }

  }
   

  return (
    <div className="container">
      <h1>Products Section</h1>
      <div className="product-page">
        <div className="product-header">
          <div>
            <form>
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search Here..."
                  onChange={handleSearch}
                />
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

        {/* <div className="product-table" onClick={handleProductSort}>
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

          {isPending && (
            <p>Loading...</p>
          )}
          {data && (
            <div>
            {products.map((product, index) => (
              <ProductItem key={index} product={product}/>
            ))}
          </div>
          )}
        </div> */}
        {isError && (
          <div className="loader-box">
            <div className="error-data">{error.message}</div>
          </div>
        )}
        {isLoading && (
          <div className="loader-box">
            <div className="loader"></div>
          </div>
        )}
        {data && <ProductSection data={data} productData={productData} />}

        {!searchKeyword && (
          <div className="product-page-footer">
            <div className="product-count">
              <label htmlFor="count">Showing</label>
              <select
                name="count"
                id="count"
                defaultValue={"10"}
                onChange={handleEntriesChange}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
              <span>entries</span>
            </div>

            <div className="pagination">
              <div onClick={()=>handlePagination('dec')}>
                <span>{"<"}</span>
              </div>
              {data && pagesArray.slice(paginationCount*3,paginationCount*3+3).map((val) => (
                <div key={val} onClick={() => handlePageChange(val)}>
                  <span>{val}</span>
                </div>
              ))}
              <div onClick={()=>handlePagination('inc')}>
                <span>{">"}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
