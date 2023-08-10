import React from "react";
import styles from "./Main.module.scss";
import { Button, Container, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";

import bannerImage from "../../asset/images/content/banner.webp";
import DeliverICons from "../../components/svgElements/DeliverICons";
import ScrollableProductList from "../../features/products/ScrollableProductList";

const Main = () => {
  return (
    <>
      <div className={`${styles.bgWhite} header-container`}>
        <Container maxWidth="xl">
          <div className={styles.navigationSection}>
            <Button
              type="button"
              startIcon={<KeyboardBackspaceIcon />}
              className="linkButton top-bottom-p-0 hideOnMobileView"
            >
              Back
            </Button>
          </div>
          <div className={styles.headerContent}>
            <div className={styles.bannerSection}>
              <img src={bannerImage} alt="banner" />
            </div>
            <div className={styles.contentSection}>
              <div className={styles.contentSectionLeftPanel}>
                <Typography variant="h1" className="weight-600 top-bottom-p-0">
                  Tossed - St Martin's Lane
                </Typography>
                <div className={styles.categorySection}>
                  <span>Chicken</span>
                  <span>&#12539;</span>
                  <span>Salad</span>
                  <span>&#12539;</span>
                  <span>Healthy</span>
                </div>
                <div className={styles.addressSection}>
                  <span>0.20 miles away</span>
                  <span>&#12539;</span>
                  <span>Opens at 11:00 on Monday</span>
                  <span>&#12539;</span>
                  <span>£0.99 delivery</span>
                  <span>&#12539;</span>
                  <span>£7.00 minimum</span>
                </div>
                <div className={styles.infoSection}>
                  <Button
                    type="button"
                    className="linkButton top-bottom-p-0 mobile-button"
                    endIcon={<ArrowForwardIosOutlinedIcon color="primary" />}
                    startIcon={
                      <InfoOutlinedIcon
                        className="lightDark"
                        sx={{ fontSize: "24px !important" }}
                      />
                    }
                  >
                    <div className="display-column text-align-left">
                      <span className="text-color-dark">Info</span>
                      <div className="lightDark font-14">
                        Map, allergens and hygiene rating
                      </div>
                    </div>
                  </Button>
                </div>

                <div className={styles.ratingSection}>
                  <Button
                    type="button"
                    className="linkButton text-color-dark top-bottom-p-0 mobile-button"
                    endIcon={<ArrowForwardIosOutlinedIcon color="primary" />}
                    startIcon={
                      <StarIcon
                        color="success"
                        sx={{ fontSize: "24px !important" }}
                      />
                    }
                  >
                    <div className="display-column text-align-left">
                      <span className="text-color-success-light">
                        4.6 Excellent
                      </span>
                      <div className="lightDark font-14">
                        See all 500 reviews
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
              <div className={styles.contentSectionRightPanel}>
                <Button
                  type="button"
                  className="linkButton top-bottom-p-0"
                  startIcon={<DeliverICons className="width-height-24" />}
                  color="primary"
                >
                  <div>
                    <span className="text-color-dark">Deliver</span>
                    <span className="ml-1">change</span>
                  </div>
                </Button>

                <Button
                  type="button"
                  className={`${styles.orderButton} top-bottom-p-0`}
                  startIcon={<GroupIcon />}
                  color="primary"
                >
                  <div>
                    <span className="text-color-dark capitalize">
                      Start group order
                    </span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <ScrollableProductList />
    </>
  );
};

export default Main;
