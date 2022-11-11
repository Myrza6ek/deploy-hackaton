import { Box, Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { cartContext } from "../../../context/CartContextProvider";
import { productContext } from "../../../context/ProductContextProvider";
import Filter from "../../Filter/Filter";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
  const { productsArr, readProduct, pageTotalCount } =
    useContext(productContext);
  const { addProductToCart } = useContext(cartContext);
  const [paramsSearch, setParamsSearch] = useSearchParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    setParamsSearch({
      q: paramsSearch.get("q") || "",
      _page: page,
      _limit: 3,
    });
  }, [paramsSearch, page]);

  useEffect(() => {
    readProduct();
  }, [paramsSearch, pageTotalCount]);
  // console.log(pageTotalCount);
  return (
    <>
      <Box
        mt="80px"
        // width="100%"
        mx="auto"
        sx={{
          display: "flex",

          justifyContent: "center",
        }}>
        <Grid
          sx={{
            // width: "19%",
            bgcolor: "white",
            borderRadius: "5px",
          }}
          my="25px">
          <Filter />
          {/* <Filter
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
        /> */}
          {/* <Filter /> */}
        </Grid>

        <Grid sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Grid
            container
            direction="row"
            flexWrap="wrap"
            justifyContent="space-evenly"
            // alignItems="flex-start"
            sx={{ width: "100%" }}
            mx="auto"
            my="25px">
            {/* <Grid xs={3.5} item={true} mb={7}>
              <ProductCard />
            </Grid>
            <Grid xs={3.5} item={true} mb={7}>
              <ProductCard />
            </Grid>
            <Grid xs={3.5} item={true} mb={7}>
              <ProductCard />
            </Grid> */}
            {productsArr
              ? productsArr.map(item => (
                  <Grid item={true} xs={3} mb={4} key={item.id}>
                    <ProductCard obj={item} />
                  </Grid>
                ))
              : null}
          </Grid>
          <Grid
            sx={{ width: "40%", display: "flex", justifyContent: "center" }}
            mx="auto"
            my="20px">
            <Pagination
              count={+pageTotalCount}
              page={+page}
              onChange={(e, value) => setPage(value)}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductList;
