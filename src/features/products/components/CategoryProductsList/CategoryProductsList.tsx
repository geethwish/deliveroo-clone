import React, { FC, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./CategoryProductsList.module.scss";
import { Typography } from "@mui/material";
import { SingleProductType } from "../../slices/products.slice";
import { Waypoint } from "react-waypoint";
import Modal from "../../../../components/Modal/Modal";

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
  const [showModal, setShowModal] = useState(false);

  const handleElementFocus = () => {
    onFocusElement(title);
  };

  const handleClickCard = () => {
    setShowModal(true);
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
        onClick={handleClickCard}
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
        <Modal
          open={showModal}
          headerType="image"
          header={
            <div className={styles.modalHeader}>
              <img
                src={require("../../../../asset/images/prducts/bg.webp")}
                alt={title}
              />
            </div>
          }
        />
      </div>
    </Waypoint>
  );
};

export default CategoryProductsList;
