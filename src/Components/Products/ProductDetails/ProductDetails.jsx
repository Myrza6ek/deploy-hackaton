import {
  Alert,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { productContext } from "../../../context/ProductContextProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { AddShoppingCart } from "@mui/icons-material";
import PaidIcon from "@mui/icons-material/Paid";

import { orange } from "@mui/material/colors";
import { deepOrange } from "@mui/material/colors";
import { cartContext } from "../../../context/CartContextProvider";

// import Filter from "../../Filter/Filter";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { readOneProduct, productDetails, deleteProduct } =
    useContext(productContext);
  const { id } = useParams();
  const { addProductToCart } = useContext(cartContext);

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  const navigate = useNavigate();
  return (
    <>
      {/* <Filter /> */}
      {productDetails ? (
        <Container mx="auto" sx={{ marginTop: "40px" }}>
          <Grid container spacing={1}>
            <Grid mx="auto" item xs={4}>
              <Swiper
                className="mySwiper2"
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}>
                <SwiperSlide>
                  <img src={productDetails.img1} alt={productDetails.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetails.img2} alt={productDetails.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetails.img3} alt={productDetails.title} />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper">
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img1} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img2} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img3} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
              </Swiper>
            </Grid>
            <Grid item xs={7}>
              <Paper elevation={5} sx={{ padding: "10px" }}>
                <Typography variant="h4">{productDetails.category}</Typography>
                <Typography variant="h5">
                  {productDetails.subCategory}
                </Typography>
                <Typography variant="h3">{productDetails.title}</Typography>
              </Paper>

              <Paper elevation={5} sx={{ mt: "20px", padding: "10px" }}>
                <Typography sx={{ marginTop: "30px" }}>
                  Описание:{<br />}
                  {productDetails.description}
                </Typography>
              </Paper>
              <Alert
                icon={<PaidIcon />}
                sx={{
                  fontSize: "25px",
                  fontWeight: 600,
                  mt: "20px",
                  display: "flex",
                  // justifyContent: "space-evenly",
                  alignItems: "center",
                }}>
                Цена: {productDetails.price} сом
              </Alert>

              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  // width: "48%",
                  justifyContent: "space-between",
                }}>
                <Button variant="contained" sx={{ width: "48%" }}>
                  Купить
                </Button>
                <Button
                  variant="contained"
                  // color="warning"
                  sx={{
                    width: "48%",
                    background: "linear-gradient(60deg, #077275 0, #69c5b1)",
                  }}
                  // sx={{ marginLeft: "20px" }}
                  onClick={() => addProductToCart(productDetails)}>
                  <AddShoppingCart />
                </Button>
              </Box>

              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ width: "48%", bgcolor: orange[400] }}
                  onClick={() => navigate(`/edit/${productDetails.id}`)}>
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ width: "48%", bgcolor: deepOrange[400] }}
                  onClick={() => deleteProduct(productDetails.id)}>
                  Delete
                </Button>
                {/* <Link
                    to={`/edit/${productDetails.id}`}
                    style={{ width: "50%" }}
                  > */}
                {/* </Link> */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

export default ProductDetails;
