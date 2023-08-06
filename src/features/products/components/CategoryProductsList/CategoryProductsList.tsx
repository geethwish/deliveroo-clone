import React, { FC } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./CategoryProductsList.module.scss";
import { Typography } from "@mui/material";

interface CategoryProductsListProps {
  title: string;
}
const CategoryProductsList: FC<CategoryProductsListProps> = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSection}>
        <Typography variant="h2" className="weight-600 top-bottom-p-0">
          {title ?? ""}
        </Typography>
      </div>

      <div className={styles.productsWrapper}>
        <ProductCard />
      </div>
    </div>
  );
};

export default CategoryProductsList;
