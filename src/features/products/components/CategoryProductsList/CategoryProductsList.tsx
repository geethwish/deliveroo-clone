import React, { FC, useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./CategoryProductsList.module.scss";
import {
  Button,
  Checkbox,
  DialogActions,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { SingleProductType } from "../../slices/products.slice";
import { Waypoint } from "react-waypoint";
import Modal from "../../../../components/Modal/Modal";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useAppSelector } from "../../../../app/hooks";
import { loginStatus } from "../../../../app/slices/login.slice";

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
  const isAuthorized = useAppSelector(loginStatus);
  const [open, setOpen] = useState(false);

  const handleElementFocus = () => {
    onFocusElement(title);
  };

  const handleClickCard = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  const handleSubmit = () => {};

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

        {open && (
          <Modal
            onClose={handleClose}
            open={open}
            headerType="image"
            header={
              <div className={styles.modalHeader}>
                <img
                  src={require("../../../../asset/images/prducts/bg.webp")}
                  alt={title}
                />
              </div>
            }
            footer={
              <DialogActions className={styles.actionWrapper}>
                <div className={styles.incrementSection}>
                  <div className={styles.incrementButtonsWrapper}>
                    <IconButton
                      aria-label="close"
                      color="primary"
                      disabled={true}
                    >
                      <RemoveCircleOutlineIcon className={styles.size24} />
                    </IconButton>
                    <span className={styles.number}>1</span>

                    <IconButton
                      aria-label="close"
                      color="primary"
                      disabled={true}
                    >
                      <AddCircleOutlineOutlinedIcon className={styles.size24} />
                    </IconButton>
                  </div>
                </div>
                <Button
                  autoFocus
                  onClick={handleSubmit}
                  fullWidth
                  variant="contained"
                  className="custom-primary-button"
                  disabled={true}
                >
                  Add for £14.99
                </Button>
              </DialogActions>
            }
          >
            <div>
              <Typography gutterBottom variant="h3" className={styles.title}>
                Salad Bundle
              </Typography>
              <Typography gutterBottom>
                A perfect healthy & delicious meal. Choose from one of our
                favourite salads, add a drink and snack for just
              </Typography>
              <span>£14.99</span>
              <Divider className={styles.dividerSpace} />
              <p className={styles.subtitle}>Contains No known allergens.</p>
              <Typography gutterBottom>
                Questions about allergens, ingredients or cooking methods?
              </Typography>
              <Button
                variant="text"
                className={`custom-primary-link ${styles.customButton}`}
              >
                Please contact the restaurant.
              </Button>
              <Divider className={styles.dividerSpace} />

              <p className={styles.subtitle1}>Choose your salad</p>
              <small className={styles.requiredText}>Required</small>

              <div>
                <FormControl className={styles.customRadioGroup}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="chicken"
                    name="radio-buttons-group"
                    className={styles.customRadioGroup}
                  >
                    <div className={styles.radioButtonWrapper}>
                      <FormControlLabel
                        className={styles.customRadioGroupLabel}
                        value="Chipotle"
                        control={<Radio disabled={true} />}
                        label={
                          <>
                            <p
                              className={`${
                                isAuthorized === "unauthorized"
                                  ? styles.disabled
                                  : ""
                              }`}
                            >
                              Chipotle chicken{" "}
                            </p>
                            <Typography
                              gutterBottom
                              className={`${styles.description} ${
                                isAuthorized === "unauthorized"
                                  ? styles.disabled
                                  : ""
                              }`}
                            >
                              Contains eggs, milk ( including lactose), mustard,
                              sulphur dioxide/sulphites. 617 Kcal
                            </Typography>
                          </>
                        }
                      />

                      <FormControlLabel
                        className={styles.customRadioGroupLabel}
                        value="Chipotle"
                        control={<Radio disabled={true} />}
                        label={
                          <>
                            <p
                              className={`${
                                isAuthorized === "unauthorized"
                                  ? styles.disabled
                                  : ""
                              }`}
                            >
                              Avocado Caesar Chicken Salad
                            </p>
                            <Typography
                              gutterBottom
                              className={`${styles.description} ${
                                isAuthorized === "unauthorized"
                                  ? styles.disabled
                                  : ""
                              }`}
                            >
                              Contains eggs, gluten, milk (including lactose),
                              soybeans. 514 kcal
                            </Typography>
                          </>
                        }
                      />

                      <FormControlLabel
                        className={styles.customRadioGroupLabel}
                        value="Chipotle"
                        control={<Radio disabled={true} />}
                        label={
                          <>
                            <p
                              className={`${
                                isAuthorized === "unauthorized"
                                  ? styles.disabled
                                  : ""
                              }`}
                            >
                              Halloumi Roasted Veg{" "}
                            </p>
                            <Typography
                              gutterBottom
                              className={`${styles.description} ${
                                isAuthorized === "unauthorized"
                                  ? styles.disabled
                                  : ""
                              }`}
                            >
                              Contains milk (including lactose), mustard,
                              sulphur dioxide/sulphites. 531 kcal
                            </Typography>
                          </>
                        }
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>

              <p className={`${styles.subtitle1} ${styles.margin16}`}>
                Choose your salad
              </p>

              <div>
                <FormGroup className={styles.customRadioGroup}>
                  <FormControlLabel
                    className={`customCheckboxLabel`}
                    control={
                      <Checkbox disabled={true} defaultChecked={false} />
                    }
                    label={
                      <>
                        <div className={styles.checkBoxLabelContent}>
                          <div className={styles.checkboxLabel}>
                            <p
                              className={`${
                                isAuthorized === "unauthorized"
                                  ? styles.disabled
                                  : ""
                              }`}
                            >
                              chicken breast{" "}
                            </p>
                            <Typography
                              gutterBottom
                              className={`${styles.checkboxDescription} ${
                                isAuthorized === "unauthorized"
                                  ? styles.disabled
                                  : ""
                              }`}
                            >
                              No known allergens. 93 kcal
                            </Typography>
                          </div>
                          <div
                            className={`${styles.priceTag} ${
                              isAuthorized === "unauthorized"
                                ? styles.disabled
                                : ""
                            }`}
                          >
                            +£2.39
                          </div>
                        </div>
                      </>
                    }
                  />
                  <FormControlLabel
                    className={`customCheckboxLabel`}
                    control={
                      <Checkbox disabled={true} defaultChecked={false} />
                    }
                    label={
                      <>
                        <div className={styles.checkBoxLabelContent}>
                          <div className={styles.checkboxLabel}>
                            <p
                              className={`${
                                isAuthorized === "unauthorized"
                                  ? styles.disabled
                                  : ""
                              }`}
                            >
                              grilled chicken thigh{" "}
                            </p>
                            <Typography
                              gutterBottom
                              className={`${styles.checkboxDescription} ${
                                isAuthorized === "unauthorized"
                                  ? styles.disabled
                                  : ""
                              }`}
                            >
                              No known allergens. 126 kcal
                            </Typography>
                          </div>
                          <div
                            className={`${styles.priceTag} ${
                              isAuthorized === "unauthorized"
                                ? styles.disabled
                                : ""
                            }`}
                          >
                            +£2.39
                          </div>
                        </div>
                      </>
                    }
                  />
                  <FormControlLabel
                    className={`customCheckboxLabel`}
                    control={
                      <Checkbox disabled={true} defaultChecked={false} />
                    }
                    label={
                      <>
                        <div className={styles.checkBoxLabelContent}>
                          <div className={styles.checkboxLabel}>
                            <p
                              className={`${
                                isAuthorized === "unauthorized"
                                  ? styles.disabled
                                  : ""
                              }`}
                            >
                              shawarma chicken{" "}
                            </p>
                            <Typography
                              gutterBottom
                              className={`${styles.checkboxDescription} ${
                                isAuthorized === "unauthorized"
                                  ? styles.disabled
                                  : ""
                              }`}
                            >
                              No known allergens. 99 kcal
                            </Typography>
                          </div>
                          <div
                            className={`${styles.priceTag} ${
                              isAuthorized === "unauthorized"
                                ? styles.disabled
                                : ""
                            }`}
                          >
                            +£2.49
                          </div>
                        </div>
                      </>
                    }
                  />
                  <FormControlLabel
                    className={`customCheckboxLabel`}
                    control={
                      <Checkbox disabled={true} defaultChecked={false} />
                    }
                    label={
                      <>
                        <div className={styles.checkBoxLabelContent}>
                          <div className={styles.checkboxLabel}>
                            <p
                              className={`${
                                isAuthorized === "unauthorized"
                                  ? styles.disabled
                                  : ""
                              }`}
                            >
                              vegan chicken{" "}
                            </p>
                            <Typography
                              gutterBottom
                              className={`${styles.checkboxDescription} ${
                                isAuthorized === "unauthorized"
                                  ? styles.disabled
                                  : ""
                              }`}
                            >
                              Contains soybeans. 82 kcal
                            </Typography>
                          </div>
                          <div
                            className={`${styles.priceTag} ${
                              isAuthorized === "unauthorized"
                                ? styles.disabled
                                : ""
                            }`}
                          >
                            +£2.79
                          </div>
                        </div>
                      </>
                    }
                  />
                </FormGroup>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </Waypoint>
  );
};

export default CategoryProductsList;
