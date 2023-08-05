import React, { FC, ReactElement, ReactFragment, ReactPortal } from "react";
import styles from "./PageLayout.module.scss";
import { Container, Divider } from "@mui/material";
import Navbar from "../Navbar/Navbar";

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
      <Divider className={styles.divider} />
      <div className={styles.content}>
        <Container maxWidth={size}>{children}</Container>
      </div>
      <div className={styles.footerContainer}>
        <Container maxWidth={size}>footer</Container>
      </div>
    </>
  );
};

export default PageLayout;
