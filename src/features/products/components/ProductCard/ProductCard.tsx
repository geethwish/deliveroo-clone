import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import product from "../../../../asset/images/prducts/product2.webp";
import styles from "./ProductCard.module.scss";
const ProductCard = () => {
  return (
    <CardActionArea>
      <Card className={styles.card}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }} className="p0">
            <p className="weight-600">Salad Bundle</p>
            <div className="pt-04 sub-text font-14">
              A perfect healthy & delicious meal. Choose from one of our
              favourite salads, add a drink and snack for just £14.99
            </div>

            <div className="pt-04 sub-text font-16 ">£14.99</div>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 98, height: 98 }}
          image={product}
          alt="green iguana"
        />
      </Card>
    </CardActionArea>
  );
};

export default ProductCard;
