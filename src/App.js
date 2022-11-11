import React, { useState } from "react";

import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Box from "@mui/material/Box";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";

import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import ProductList from "./Components/Products/ProductList/ProductList";
import ProductCard from "./Components/Products/ProductCard/ProductCard";
import Footer from "./Components/Footer/Footer";
import "./index.css";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./MainRoutes";


import Cart from "./Components/Cart/Cart";

import CartContextProvider from "./context/CartContextProvider";


const App = () => {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <Box mt="110px">
          <NavBar />
          {/* <Cart /> */}
          <MainRoutes />
          {/* <EditProduct /> */}
          {/* <AddProduct /> */}
          {/* <br /> */}

          <Footer />
        </Box>
      </ProductContextProvider>
    </CartContextProvider>
  );
};

export default App;
