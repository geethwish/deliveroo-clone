import React, { FC } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./CategoryProductsList.module.scss";
import { Typography } from "@mui/material";
import { SingleProductType } from "../../slices/products.slice";

interface CategoryProductsListProps {
  title: string;
  product: SingleProductType[];
}
const CategoryProductsList: FC<CategoryProductsListProps> = ({
  title,
  product,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSection}>
        <Typography variant="h2" className="weight-600 top-bottom-p-0">
          {title ?? ""}
        </Typography>
      </div>

      <div className={styles.productsWrapper}>
        {product?.length > 0 &&
          product.map((data, index) => <ProductCard data={data} key={index} />)}
      </div>
    </div>
  );
};

export default CategoryProductsList;
