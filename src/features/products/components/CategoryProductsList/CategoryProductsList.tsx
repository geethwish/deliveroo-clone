import React, { FC } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./CategoryProductsList.module.scss";
import { Typography } from "@mui/material";
import { SingleProductType } from "../../slices/products.slice";
import { Waypoint } from "react-waypoint";

interface CategoryProductsListProps {
  id: string;
  title: string;
  product: SingleProductType[];
  onFocusElement: (key: string) => void;
}
const CategoryProductsList: FC<CategoryProductsListProps> = ({
  title,
  product,
  id,
  onFocusElement,
}) => {
  const handleElementFocus = () => {
    onFocusElement(title);
  };
  return (
    <Waypoint
      key={id}
      onEnter={handleElementFocus}
      bottomOffset={"60%"}
      topOffset={"50%"}
    >
      <div
        className={styles.wrapper}
        id={id}
        onScrollCapture={handleElementFocus}
      >
        <div className={styles.titleSection}>
          <Typography variant="h2" className="weight-600 top-bottom-p-0">
            {title ?? ""}
          </Typography>
        </div>

        <div className={styles.productsWrapper}>
          {product?.length > 0 &&
            product.map((data, index) => (
              <ProductCard data={data} key={index} />
            ))}
        </div>
      </div>
    </Waypoint>
  );
};

export default CategoryProductsList;
