import React, { FC } from "react";
import {
  AppBar,
  Box,
  Container,
  InputAdornment,
  TextField,
  Toolbar,
} from "@mui/material";
import Button from "@mui/material/Button";

import styles from "./Navbar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./../../../asset/images/svg/logo.svg";
import { Search } from "@mui/icons-material";

interface NavbarPropsType {
  size: "xs" | "sm" | "md" | "lg" | "xl";
}

const Navbar: FC<NavbarPropsType> = ({ size }) => {
  return (
    <AppBar component="nav" className={styles.navbarContainer} color="inherit">
      <Container maxWidth={size}>
        <Toolbar disableGutters className={styles.navbarContainer}>
          <div className={styles.logo}>
            <img src={logo} alt={"logo"} loading="lazy" />
          </div>

          <div className={styles.searchContentSection}>
            <div className={styles.inputFieldWrapper}>
              <TextField
                placeholder="Search Tossed - St Martin's Lane"
                type="search"
                id="input-with-icon-textfield"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                size="small"
                fullWidth
                className={styles.inputSearch}
                variant="outlined"
              />
              {/* <div>search result</div> */}
            </div>
          </div>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="outlined"
              startIcon={<MenuIcon color="primary" />}
              disableRipple
              color="primary"
              className={styles.menuButton}
            >
              Menu
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
