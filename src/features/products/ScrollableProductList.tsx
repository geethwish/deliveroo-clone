import React, { useEffect, useState } from "react";
import {
  AppBar,
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
import { loginStatus } from "../../app/slices/login.slice";
import { useNavigate } from "react-router-dom";

const ScrollableProductList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuthorized = useAppSelector(loginStatus);
  const productsList = useAppSelector(allProducts);

  const [clickedCategory, setClickedCategory] = useState("Bundles");

  const handleClick = (key: string, id: number) => {
    const element = document.getElementById(`section${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setClickedCategory((prev) => (prev === key ? "" : key));
  };

  const handleCheckout = () => {
    navigate("/home/checkout");
  };

  useEffect(() => {
    dispatch(getAllProducts());

    return () => {};
  }, []);

  const handleScrolledPosition = (key: string) => {
    setClickedCategory(key);
  };

  return (
    <div>
      <AppBar
        component="menu"
        className={`${styles.navbarContainer} ${styles.fixedContainer}`}
        color="inherit"
        position="relative"
      >
        <Container maxWidth={"xl"}>
          <Toolbar disableGutters className={styles.navbarContainer}>
            <div className={styles.tags}>
              {productsList !== undefined &&
                Object.keys(productsList).length > 0 &&
                Object.keys(productsList).map((productCategory, index) => (
                  <Chip
                    key={index}
                    label={productCategory}
                    variant="filled"
                    onClick={() => handleClick(productCategory, index)}
                    color="primary"
                    className={`custom-tag ${
                      clickedCategory === productCategory
                        ? "text-color-white"
                        : "custom-tag-deselected"
                    }`}
                  />
                ))}
            </div>
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
                    id={`section${index}`}
                    title={productCategory}
                    key={index}
                    product={
                      productsList[
                        productCategory
                      ] as unknown as SingleProductType[]
                    }
                    onFocusElement={handleScrolledPosition}
                  />
                ))}
            </div>

            <div className={styles.cartSection}>
              <Card className={styles.card}>
                <CardContent>
                  <center className={styles.content}>
                    <div className="disabled">
                      <ShoppingBasketIcon className={styles.icon} />
                      <p>Your basket is empty</p>
                    </div>
                  </center>
                  <Button
                    variant="contained"
                    fullWidth
                    disabled={isAuthorized === "unauthorized"}
                    onClick={handleCheckout}
                  >
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
