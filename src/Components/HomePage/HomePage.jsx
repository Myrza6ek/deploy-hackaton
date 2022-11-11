import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";

import "./HomePage.css";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function HomePage() {
  return (
    <Box className="body" mx="auto" mb="40px">
      <Grid
        className="bg1"
        mx="auto"
        container
        width="80%"
        position="relative"
        height="500px"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          // alignItems: "space-between",
          justifyContent: "space-around",

          // height: "85vh",
          //
          // bgcolor: "rgb(3, 117, 117)",
        }}>
        <Grid
          className="grid_2"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            mt: "20px",
          }}>
          <Grid item sm={4} className="text1">
            <Item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                bgcolor: "#55c2ce",
                color: "white",
                width: "100%",
              }}>
              <Grid>
                <Typography>Ортодонтия</Typography>
                количество товаров
              </Grid>

              <img
                className="img"
                width="100vw"
                height="100vh"
                src="https://ortholight.ru/upload/iblock/39e/39ec44e9fb7307df908c748e0031903d.jpg"
                alt="ortodontia"
              />
            </Item>
          </Grid>
          <Grid item sm={4} className="text1">
            <Item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                bgcolor: "#55c2ce",
                color: "white",
                width: "100%",
              }}>
              <Grid>
                <Typography>Терапия</Typography>
                количество товаров
              </Grid>
              <img
                className="img"
                width="100vw"
                height="100vh"
                src="https://rocadamed.ru/upload/iblock/491/4913f6f023c9ea5dcf0b4f1e3fa53a34.jpg"
                alt="Terapia"
              />
            </Item>
          </Grid>
        </Grid>
        <Grid
          className="grid_2"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}>
          <Grid item sm={4} className="text1">
            <Item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                bgcolor: "#55c2ce",
                color: "white",
                width: "100%",
              }}>
              <Grid>
                <Typography>Ортопедия</Typography>
                количество товаров
              </Grid>
              <img
                className="img"
                width="100vw"
                height="100vh"
                src="https://el-dent.ru/UserFiles/Image/catalog-img/silikon-dvuhfaznye.jpg"
                alt="ortopedia"
              />
            </Item>
          </Grid>
          <Grid item sm={4} className="text1">
            <Item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                bgcolor: "#55c2ce",
                color: "white",
                width: "100%",
              }}>
              <Grid>
                <Typography>Хирургия</Typography>
                количество товаров
              </Grid>
              <img
                className="img"
                width="100vw"
                height="100vh"
                src="https://dental-shop.kg/uploads/products/WhatsApp_Image_2020-11-17_at_12.32.16.jpg"
                alt="hirurgia"
              />
            </Item>
          </Grid>
        </Grid>
        <Grid
          className="grid_2"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}>
          <Grid item sm={4} className="text1">
            <Item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                bgcolor: "#55c2ce",
                color: "white",
                width: "100%",
              }}>
              <Grid>
                <Typography>Вспомогательные материалы</Typography>
                количество товаров
              </Grid>
              <img
                className="img"
                width="100vw"
                height="100vh"
                src="https://dentalmagazine.ru//wp-content/uploads/2014/08/2_2_opt.jpg"
                alt="vspomogat mater"
              />
            </Item>
          </Grid>
          <Grid item sm={4} className="text1">
            <Item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                bgcolor: "#55c2ce",
                color: "white",
                width: "100%",
              }}>
              <Grid>
                <Typography>Оборудывания</Typography>
                количество товаров
              </Grid>
              <img
                className="img"
                width="100vw"
                height="100vh"
                src="https://medmetr.ru/upload/uf/319/319844a099b281171a92dcac101aa33a.jpg"
                alt="oborudyvaniya"
              />
            </Item>
          </Grid>
        </Grid>
      </Grid>

      <Box className="bg box1" mt="50px" sx={{ mx: "auto", width: "80%" }}>
        <Grid
          className="about"
          // mt="90px"
          sx={{
            mx: "auto",
            width: "50vw",
            // height: "50vh",
          }}>
          <br />
          <Typography variant="h4">О магазине</Typography>
          <Typography variant="h5">Магазин Dental Shop</Typography>
          <Typography>
            Наша цель – придерживаясь бережного и ответственного отношения к
            покупателям делать приобретение стоматологических материалов,
            средств, принадлежностей, инструментов и оборудования выгодным,
            удобным и предсказуемым процессом. Для достижения цели Дентал Шоп
            имеет широкий ассортимент товаров, штат подготовленных сотрудников,
            программы лояльности покупателей, продуманную логистику, развитую
            систему коммуникаций с клиентами, современные технические и
            программные средства для Интернет-торговли. Ассортимент Дентал Шоп –
            это более 1000 наименований популярных товаров: от препаратов для
            профилактики стоматологических заболеваний до материалов и
            оборудования для зуботехнической лаборатории. Наши цены более чем
            компромиссные, а бонусные программы и специальные акции позволяют
            сэкономить еще больше.
          </Typography>
        </Grid>
      </Box>
      <Box className="bg" mt="50px" sx={{ mx: "auto", width: "80%" }}>
        <Grid
          sx={{
            mx: "auto",
            width: "80%",
            // height: "initial",
          }}>
          <Grid className="grid_about" sx={{ display: "flex" }}>
            <Grid className="function_1__grid">
              <AccessTimeIcon color="action" sx={{ fontSize: 40 }} />

              <Typography variant="h6">Нас знают с 1998 года</Typography>
              <Typography>
                поэтому большинство клиентов приезжают из других городов.
              </Typography>
            </Grid>
            <Grid className="function_1__grid">
              <UpgradeIcon color="action" sx={{ fontSize: 40 }} />

              <Typography variant="h6">Более 1000 товаров</Typography>
              <Typography>
                При заказе на сумму более 1500 сом доставка осуществляется по
                всему Бишкеку бесплатно
              </Typography>
            </Grid>
            <Grid className="function_1__grid">
              <ReduceCapacityIcon color="action" sx={{ fontSize: 40 }} />

              <Typography variant="h6">Более 100 клиник с нами</Typography>
              <Typography>
                Наш опыт и возможности позволяют оснастить ваш кабинет с нуля,
                за несколько часов
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default HomePage;
