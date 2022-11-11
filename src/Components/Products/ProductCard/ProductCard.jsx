import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from "react";
import { productContext } from "../../../context/ProductContextProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import { cartContext } from "../../../context/CartContextProvider";

const ProductCard = ({ obj }) => {
  const { readOneProduct, productDetails, deleteProduct } =
    useContext(productContext);
  // console.log(obj);

  const { addProductToCart } = useContext(cartContext);
  const { id } = useParams();

  useEffect(() => {
    readOneProduct(obj.id);
  }, []);

  // console.log(productDetails);
  function SetCart() {
    localStorage.setItem("cart", JSON.stringify(obj));
  }

  const navigate = useNavigate();
  return (
    <>
      <Card sx={{ maxWidth: 300, mx: "auto" }}>
        <Card
          sx={{
            mt: "20px",
            mx: "auto",
            width: "200px",
          }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="220"
            image={obj.img1}
          />
          {/* <img src={obj.img} alt="" /> */}
        </Card>
        <CardContent>
          <Typography
            gutterBottom
            variant="h7"
            //color="text.secondary"
            component="div">
            {obj.category}
          </Typography>
          <Typography variant="h7" color="text.secondary" component="div">
            {obj.subCategory}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {obj.title}
          </Typography>

          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          <Typography
            gutterBottom
            variant="h5"
            fontWeight="bold"
            component="div">
            {obj.price} сом
          </Typography>
        </CardContent>

        <Card>
          <CardActions>
            <Button
              variant="contained"
              sx={{ background: "linear-gradient(60deg, #077275 0, #69c5b1)" }}
              // sx={{ marginLeft: "20px" }}
              onClick={() => addProductToCart(productDetails)}>
              <AddShoppingCartIcon />
            </Button>

            <Link style={{ textDecoration: "none" }} to={`/details/${obj.id}`}>
              <Button size="small">Подробнее</Button>
            </Link>
          </CardActions>
          <CardActions>
            <Button
              variant="outlined"
              color="warning"
              onClick={() => navigate(`/edit/${obj.id}`)}>
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => deleteProduct(obj.id)}>
              delete
            </Button>
          </CardActions>
        </Card>
      </Card>
    </>
  );
};

export default ProductCard;
