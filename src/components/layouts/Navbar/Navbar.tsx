import React, { FC, useState } from "react";
import {
  AppBar,
  Box,
  Container,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Toolbar,
} from "@mui/material";
import Button from "@mui/material/Button";

import styles from "./Navbar.module.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import logo from "./../../../asset/images/svg/logo.svg";
import { Search } from "@mui/icons-material";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { clearUser, loginStatus } from "../../../app/slices/login.slice";
import SideDrawer from "../../SideDrawer/SideDrawer";

interface NavbarPropsType {
  size: "xs" | "sm" | "md" | "lg" | "xl";
}

const Navbar: FC<NavbarPropsType> = ({ size }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isAuthorized = useAppSelector(loginStatus);

  const [showAccount, setShowAccount] = useState(false);

  const navigateToLogin = () => {
    if (isAuthorized === "authorized") {
      dispatch(clearUser());
    } else {
      navigate("/login");
    }
  };

  const handleAccountShow = (showStatus: boolean) => {
    setShowAccount(showStatus);
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
              startIcon={<PersonOutlinedIcon color="primary" />}
              disableRipple
              color="primary"
              className={styles.menuButton}
              onClick={() => setShowAccount(true)}
            >
              Account
            </Button>
          </Box>
        </Toolbar>
      </Container>

      <SideDrawer
        open={showAccount}
        position="right"
        title={
          <div className={styles.logo}>
            <img src={logo} alt={"logo"} loading="lazy" />
          </div>
        }
        onOpen={handleAccountShow}
        onClose={handleAccountShow}
        content={
          <div className={`pt-30 ${styles.contentWrapper}`}>
            <div>
              <Button
                variant="contained"
                color="primary"
                className="custom-primary-button"
                fullWidth
                onClick={navigateToLogin}
              >
                Sign up or login
              </Button>

              <Button
                startIcon={<InfoOutlinedIcon color="secondary" />}
                href="#text-buttons"
                className="custom-primary-link"
                color="primary"
              >
                FAQs
              </Button>
            </div>
            <div className={styles.bottomSection}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={1}
                fullWidth
              >
                <MenuItem value={1}>English</MenuItem>
              </Select>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={1}
                fullWidth
              >
                <MenuItem value={1}>United Kingdom</MenuItem>
                <MenuItem value={2}>Canada</MenuItem>
                <MenuItem value={3}>Australia</MenuItem>
              </Select>
            </div>
          </div>
        }
      />
    </AppBar>
  );
};

export default Navbar;
