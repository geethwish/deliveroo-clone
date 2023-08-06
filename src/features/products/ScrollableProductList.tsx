import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Toolbar,
} from "@mui/material";
import styles from "./ScrollableProductList.module.scss";
import CategoryProductsList from "./components/CategoryProductsList/CategoryProductsList";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  SingleProductType,
  allProducts,
  getAllProducts,
} from "./slices/products.slice";

const ScrollableProductList = () => {
  const dispatch = useAppDispatch();
  const productsList = useAppSelector(allProducts);

  const [clickedCategory, setClickedCategory] = useState("");

  const handleClick = (key: string) => {
    setClickedCategory((prev) => (prev === key ? "" : key));
  };

  useEffect(() => {
    dispatch(getAllProducts());

    return () => {};
  }, []);

  useEffect(() => {
    productsList !== undefined &&
      Object.keys(productsList).length > 0 &&
      Object.keys(productsList).map((productCategory, index) => {
        console.log(Object.keys(productsList));
      });
  }, [productsList]);

  return (
    <div>
      <AppBar
        component="menu"
        className={styles.navbarContainer}
        color="inherit"
        position="relative"
      >
        <Container maxWidth={"xl"}>
          <Toolbar disableGutters className={styles.navbarContainer}>
            <Box sx={{ flexGrow: 1 }}>
              <Chip
                label="Clickable"
                variant="filled"
                onClick={() => handleClick("bundle")}
                color="primary"
                className={`custom-tag ${
                  clickedCategory === "bundle"
                    ? "text-color-white"
                    : "custom-tag-deselected"
                }`}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div>
        <Container maxWidth={"xl"}>
          <div className={styles.contentWrapper}>
            <div className="lightDark">Adults need around 2000 kcal a day</div>
          </div>
          <div className={styles.contentWrapper}>
            <div>
              {productsList !== undefined &&
                Object.keys(productsList).length > 0 &&
                Object.keys(productsList).map((productCategory, index) => (
                  <CategoryProductsList
                    title={productCategory}
                    key={index}
                    product={
                      productsList[
                        productCategory
                      ] as unknown as SingleProductType[]
                    }
                  />
                ))}
            </div>

            <div>
              <Card className={styles.card}>
                <CardContent>
                  <center className={styles.content}>
                    <div className="disabled">
                      <ShoppingBasketIcon className={styles.icon} />
                      <p>Your basket is empty</p>
                    </div>
                  </center>
                  <Button variant="contained" fullWidth disabled>
                    <span className="capitalize">Go to checkout</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ScrollableProductList;
