import React, { useRef, useState } from "react";
import "./ProductPage.css";
import "./Product-table.css";

import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { getData } from "../../util/HttpFunctions";
import ProductSection from "./ProductSection";

import { motion } from "motion/react";

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
    setPage(1);
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
        if(prev+1 > Math.floor(pages/3)-1)
          return Math.ceil(pages/3)-1;
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

          <motion.div className="add-product-btn" whileHover={{x:[2,0,-2,0],y:[2,0,-2,0]}} transition={{duration:0.3,type:'spring',stiffness:1000,mass:3}}>
            <button>
              <Link to={"new"}>
                {" "}
                <strong>+</strong> ADD NEW
              </Link>
            </button>
          </motion.div>
        </div>

        

        {<ProductSection data={data} productData={productData} isError={isError} loading={isLoading} error={error}/>}

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

            <div className="pagination" >
              <div onClick={()=>handlePagination('dec')}>
                <span>{"<"}</span>
              </div>
              {data && pagesArray.slice(paginationCount*3,paginationCount*3+3).map((val) => (
                <motion.div whileHover={{y:-5}} transition={{duration:0.3,type:'spring'}}
                 key={val} className={page === val ? 'page-selected': ''} onClick={() => handlePageChange(val)}>
                  <span>{val}</span>
                </motion.div>
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
