import React, { FC, ReactElement, ReactFragment, ReactPortal } from "react";
import styles from "./PageLayout.module.scss";
import { Container } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface PageLayoutTypes {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  children?:
    | ReactChild
    | ReactFragment
    | ReactPortal
    | boolean
    | null
    | undefined;
}

const PageLayout: FC<PageLayoutTypes> = ({ size, children }) => {
  return (
    <>
      <Navbar size={size} />
      <div className={styles.content}>{children}</div>
      <div className={`${styles.footerContainer} footer-container`}>
        <Container maxWidth={"lg"}>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default PageLayout;
