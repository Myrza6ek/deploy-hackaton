import { Box, Button, Card, CardMedia, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import HomePage from "../HomePage/HomePage";
import ProductList from "../Products/ProductList/ProductList";
import "./Cart.css";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { cartContext } from "../../context/CartContextProvider";

const Cart = () => {
  const { productsInCart, getCart, changeProductCount, deleteCartProduct } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <ProductList />
      <Paper elevation={5} className="overlay">
        <Box className="drawer">
          <Typography variant="h5" className="drawer-korzina">
            Корзина
            <Button //onClick={() => props.setModalCart(false)}
            >
              <CancelIcon />
            </Button>
          </Typography>

          {productsInCart ? (
            <>
              <Card className="first_items">
                {productsInCart.dentalProducts.map(elem => (
                  <Paper key={elem.item.id} elevation={6} className="cartItem">
                    <CardMedia className="cartItemImg">
                      <img src="" alt="obj.img" />
                    </CardMedia>

                    <Box className="cartItem-p">
                      <Typography className="cartItem-kroc">
                        {elem.item.category}
                        <br />
                        {elem.item.title}
                      </Typography>
                      <b>{elem.item.price}</b>
                    </Box>
                    <Button
                      onClick={() => {
                        deleteCartProduct(elem.item.id);
                      }}
                      className="removeBtn"
                      width={20}
                      height={20}>
                      <DeleteOutlineIcon />
                    </Button>
                    <Typography>Итого: {elem.subPrice}</Typography>
                  </Paper>
                ))}
                <div className="cartTotalBlock">
                  <ul className="TotalBlock">
                    <li className="itogo">
                      <span>Итого</span>
                      <div className="cherta1"></div>
                      <b></b>
                    </li>
                    {/* <li className="nalog">
                        <span>Налог 5%:</span>
                        <div className="cherta2"></div>
                        <b>1074 руб.</b>
                      </li> */}
                  </ul>
                  <button className="greenButton">
                    Оформить заказ
                    <img
                      width={20}
                      height={20}
                      src="https://cdn-icons-png.flaticon.com/512/2989/2989981.png"
                      alt="Arrow"
                    />
                  </button>
                </div>
              </Card>
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </Box>
      </Paper>
    </>
  );
};

export default Cart;
