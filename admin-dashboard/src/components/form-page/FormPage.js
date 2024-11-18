import React, { useEffect, useState } from "react";
import "./Form.css";
import formValidation, {
  initialValidationState,
} from "../../util/ValidationLogic";
import { validateField } from "../../util/ValidationFunctions";
import FormLeftSection from "./FormLeftSection";
import FormRightSection from "./FormRightSection";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  addProduct,
  fetchProduct,
  updateProduct,
} from "../../util/HttpFunctions";
import { useMutation } from "react-query";

import { motion } from "motion/react";

function FormPage() {
  const [validationState, setValidationState] = useState(
    initialValidationState
  );

  //When editing a product
  const [editMode, setEditMode] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const [imageSelected, setImageSelected] = useState("");
  const [formData, setformData] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const { mutate ,isLoading } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      navigate("/products");
    },
  });
  const UpdateMutate = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      navigate("/products");
    },
  });

  useEffect(() => {
    if (params.id) {
      setEditMode(true);

      fetchProduct(params.id).then((data) => {
        setProductData(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [params]);

  //send request when validation comes true after clicking submit
  useEffect(() => {
    // console.log('sub-state',validationState.result);

    if (validationState.result) {
      if (!editMode) {
        mutate({ formData: formData });
      } else if (editMode) {
        UpdateMutate.mutate({ formData: formData, id: productData.id });
      }
    }
  }, [validationState, formData, mutate,productData]);

  function getImage(imgFile) {
    console.log(imgFile);

    setImageSelected(imgFile);
  }

  function handleForm(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const form = Object.fromEntries(fd.entries());
    const supplierType = fd.getAll("supplierType");
    form.supplierType = supplierType;
    if (imageSelected) {
      form.image = imageSelected;
    }
    setformData(form);
    setValidationState((prev) => formValidation(form, prev));
  }
  function handleResetForm() {
    setValidationState(initialValidationState);
  }

  function handleChange(event) {
    // console.log(event.target.name);

    setValidationState((prev) => {
      const inputFieldName = event.target.name;
      return {
        ...prev,
        [`${inputFieldName}`]: {
          status: false,
          error: "",
        },
      };
    });
  }

  function handleChangeValidation(event) {
    setValidationState(validateField(event.target, validationState));
  }

  return (
    <div className="container">
      <div>
        <motion.div
          whileHover={{ scale: 1.08, x: [2, 0, -2, 0], y: [2, 0, -2, 0] }}
          transition={{
            duration: 0.3,
            type: "spring",
            mass: 3,
            stiffness: 500,
          }}
          className="back-btn"
        >
          <Link to={"/products"}>
            <i className="fa-solid fa-arrow-left"></i> Back
          </Link>
        </motion.div>
      </div>

      {Loading && (
        <div className="loader-box">
          <div className="loader"></div>
        </div>
      )}

      {!Loading && (
        <form className="form-container" onSubmit={handleForm}>
          <div className="form-header">
            <div>{editMode ? <h1>Edit Product</h1> : <h1>Add Product</h1>}</div>
           {(UpdateMutate.isLoading || isLoading) ?(
            <div>Submitting...</div>
           ):(
             <div className="form-button">
             <motion.button
               whileHover={{ scale: 1.08 }}
               transition={{ duration: 0.3, type: "tween" }}
               type="submit"
             >
               SUBMIT
             </motion.button>
             <motion.button
               whileHover={{ scale: 1.08 }}
               transition={{ duration: 0.3, type: "tween" }}
               type="reset"
               onClick={handleResetForm}
             >
               RESET
             </motion.button>
           </div>
           )}
          </div>

          <div className="form-control">
            <FormLeftSection
              validationState={validationState}
              handleChange={handleChange}
              handleChangeValidation={handleChangeValidation}
              productData={productData}
            />

            <FormRightSection
              validationState={validationState}
              handleChange={handleChange}
              handleChangeValidation={handleChangeValidation}
              handleResetForm={handleResetForm}
              productData={productData}
              getImage={getImage}
            />
          </div>
        </form>
      )}
    </div>
  );
}

export default FormPage;
