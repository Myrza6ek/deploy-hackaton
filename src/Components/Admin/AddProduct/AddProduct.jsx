import { Box, Button, Paper, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { productContext } from "../../../context/ProductContextProvider";

import "./AddProduct.css";

const AddProduct = () => {
  const { addProduct } = useContext(productContext);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [description, setDescription] = useState("");

  const [price, setPrice] = useState();
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");

  function handleAdd(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (
      !category.trim() ||
      !title.trim() ||
      !subCategory.trim() ||
      !description.trim() ||
      !price.trim() ||
      !img1.trim() ||
      !img2.trim() ||
      !img3.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }

    let obj = {
      category,
      title,
      subCategory,
      description,

      price: +price,
      img1,
      img2,
      img3,
    };
    addProduct(obj);
    setCategory("");
    setTitle("");
    setSubCategory("");
    setDescription("");

    setPrice();
    setImg1("");
    setImg2("");
    setImg3("");
  }
  return (
    <>
      <Box mb="40px">
        <Paper
          sx={{
            padding: "20px",
            mx: "auto",
            width: "70%",
            bgcolor: "#818987ca",
          }}
          elevation={9}>
          <form id="form-add" onSubmit={e => handleAdd(e)}>
            <h2 id="add-title">Добавление товара</h2>
            <TextField
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                margin: "10px 0",
              }}
              label="Категория"
              variant="outlined"
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
            <TextField
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                margin: "10px 0",
              }}
              label="Название"
              variant="outlined"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <TextField
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                margin: "10px 0",
              }}
              label="Подкатегория"
              variant="outlined"
              value={subCategory}
              onChange={e => setSubCategory(e.target.value)}
            />
            <TextField
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                margin: "10px 0",
              }}
              label="Описание"
              variant="outlined"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />

            <TextField
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                margin: "10px 0",
              }}
              type="number"
              label="Цена"
              variant="outlined"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
            <TextField
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                margin: "10px 0",
              }}
              label="Фото 1"
              variant="outlined"
              value={img1}
              onChange={e => setImg1(e.target.value)}
            />
            <TextField
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                margin: "10px 0",
              }}
              label="Фото 2"
              variant="outlined"
              value={img2}
              onChange={e => setImg2(e.target.value)}
            />
            <TextField
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                margin: "10px 0",
              }}
              label="Фото 3"
              variant="outlined"
              value={img3}
              onChange={e => setImg3(e.target.value)}
            />
            <Button
              sx={{ my: "30px", mx: "auto", width: "40%" }}
              variant="contained"
              type="submit">
              Добавить
            </Button>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default AddProduct;
