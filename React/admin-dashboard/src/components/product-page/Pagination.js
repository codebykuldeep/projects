import React from "react";
import { motion } from "motion/react";

function Pagination({current, pageCount, handlePageChange}) {
    
    
  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(current - 1)}
        disabled={current === 1 ? true : false}
      >
        <span>{"<"}</span>
      </button>
      {
        current !== 1 && (
            <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, type: "spring" }}
                onClick={() => handlePageChange(current - 1)}
            >
                <span>{current - 1}</span>
            </motion.div>
        )
      }
      <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, type: "spring" }}
                className={"page-selected"}
            >
                <span>{current}</span>
        </motion.div>
      

      {
         current < pageCount && (
            <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, type: "spring" }}
                onClick={() => handlePageChange(current +1 )}
            >
                <span>{current +1}</span>
            </motion.div>  
        )
      }


      <button
        onClick={() => handlePageChange(current + 1)}
        disabled={current === pageCount ? true : false}
      >
        <span>{">"}</span>
      </button>
    </div>
  );
}

export default Pagination;
