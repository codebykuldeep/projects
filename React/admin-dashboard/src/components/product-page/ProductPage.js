import React, { useRef, useState } from "react";
import "./ProductPage.css";
import "./Product-table.css";

import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { getData } from "../../util/HttpFunctions";
import ProductSection from "./ProductSection";

import { motion } from "motion/react";
import Pagination from "./Pagination";




function ProductPage() {
  const [entriesCount, setEntriesCount] = useState(10);
  const [page, setPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const timer = useRef();

  

  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", entriesCount, page, searchKeyword],
    queryFn: ({ signal }) =>
      getData({ signal, page, entriesCount, searchKeyword }),
    refetchOnMount:"always",
    staleTime:1000*60,
  });
  
  const products = data ? data.products : undefined;
  const totalLength = data ? data.length : 0;
  const pageCount = Math.ceil(totalLength/entriesCount);

  
  

  function handleSearch(event) {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      
      setSearchKeyword(event.target.value.trim());
    }, 500);
    queryClient.removeQueries();
  }

  function handleEntriesChange(event) {
    queryClient.removeQueries();
    setPage(1);
    setEntriesCount(Number(event.target.value));
  }

  function handlePageChange(pageNumber) {
    
    queryClient.removeQueries();
    setPage(pageNumber);
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

          <motion.div className="add-product-btn" whileHover={{x:[2,0,-2,0],y:[2,0,-2,0]}} transition={{duration:0.3,type:'spring',stiffness:1000,mass:3}}>
            <button>
              <Link to={"new"}>
                {" "}
                <strong>+</strong> ADD NEW
              </Link>
            </button>
          </motion.div>
        </div>

        

        {<ProductSection data={data} productData={products} isError={isError} loading={isLoading} error={error} />}

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

            <Pagination current={page} pageCount={pageCount}  handlePageChange={handlePageChange}/>
          </div>
        )}

        {searchKeyword && data &&
        (
          <div className="product-page-footer">
            {products.length} matching results are found out of  {totalLength} products.
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
