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
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { clearUser, loginStatus } from "../../../app/slices/login.slice";

interface NavbarPropsType {
  size: "xs" | "sm" | "md" | "lg" | "xl";
}

const Navbar: FC<NavbarPropsType> = ({ size }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isAuthorized = useAppSelector(loginStatus);

  const navigateToLogin = () => {
    if (isAuthorized === "authorized") {
      dispatch(clearUser());
    } else {
      navigate("/login");
    }
  };

  return (
    <AppBar component="nav" className={styles.navbarContainer} color="inherit">
      <Container maxWidth={size}>
        <Toolbar disableGutters className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} alt={"logo"} loading="lazy" />
          </div>

          {size === "xl" && (
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
          )}

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="outlined"
              startIcon={<CottageOutlinedIcon color="primary" />}
              disableRipple
              color="primary"
              className={styles.menuButton}
              onClick={navigateToLogin}
            >
              {isAuthorized === "authorized" ? "Logout" : "Sign up or log in"}
            </Button>

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
