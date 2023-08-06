import React, { FC } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import styles from "./ProductCard.module.scss";
import { SingleProductType } from "../../slices/products.slice";

interface ProductCarProps {
  data: SingleProductType;
}

const ProductCard: FC<ProductCarProps> = ({ data }) => {
  return (
    <CardActionArea>
      <Card className={styles.card}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }} className="p0">
            <p className="weight-600">{data?.name}</p>
            <div className="pt-04 sub-text font-14">{data?.description}</div>

            <div className="pt-04 sub-text font-16 ">{data?.price}</div>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 98, height: 98 }}
          image={require(`../../../../asset/images/prducts/${data.img}`)}
          alt="green iguana"
        />
      </Card>
    </CardActionArea>
  );
};

export default ProductCard;
