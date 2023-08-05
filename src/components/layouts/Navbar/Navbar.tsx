import { AppBar, Container } from "@mui/material";
import React, { FC } from "react";
import styles from "./Navbar.module.scss";

interface NavbarPropsType {
  size: "xs" | "sm" | "md" | "lg" | "xl";
}
const Navbar: FC<NavbarPropsType> = ({ size }) => {
  return (
    <AppBar component="nav" className={styles.navbarContainer} color="inherit">
      <Container maxWidth={size}>
        <div>navbar</div>
      </Container>
    </AppBar>
  );
};

export default Navbar;
