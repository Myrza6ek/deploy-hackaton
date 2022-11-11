import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const productContext = createContext();

const API = "http://localhost:8000/dentalProducts";

const INIT_STATE = {
  product: null,
  productDetails: null,
  pageTotalCount: 1,
};

function reducer(prevState, action) {
  // console.log(action.payload);
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...prevState,
        product: action.payload.data,

        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };
    case "GET_ONE_PRODUCT":
      return {
        ...prevState,
        productDetails: action.payload,
      };
    default:
      return prevState;
  }
}

const ProductContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();

  const navigate = useNavigate();

  // create
  async function addProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
      readProduct();
      navigate("/list");
    } catch (error) {
      return error;
    }
  }
  //read
  async function readProduct() {
    const res = await axios(`${API}/${location.search}`);
    dispatch({
      type: "GET_PRODUCT",
      payload: res,
    });
  }
  // readProduct();

  async function readOneProduct(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  }
  // readOneProduct(1);

  // delete
  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      readProduct();
      navigate("/list");
    } catch (error) {
      return error;
    }
  }

  async function editProduct(id, editedObj) {
    await axios.patch(`${API}/${id}`, editedObj);
    readProduct();
  }

  let cloud = {
    addProduct,
    readProduct,
    readOneProduct,
    deleteProduct,
    editProduct,
    productsArr: state.product,
    productDetails: state.productDetails,
    pageTotalCount: state.pageTotalCount,
  };
  return (
    <productContext.Provider value={cloud}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;