import React, { useState } from "react";
import { Button, Container, TextField } from "@mui/material";

import styles from "./SignUp.module.scss";
import { useAppDispatch } from "../../app/hooks";
import { setUser } from "../../app/slices/login.slice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleNext = () => {
    dispatch(setUser(email));
    navigate("/");
  };

  return (
    <Container maxWidth={"lg"}>
      <center className={styles.mainContainer}>
        <div className={styles.container}>
          <h1 className={styles.title}>Sign up or log in</h1>

          <div className={styles.fromController}>
            <label>Email address</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="e.g. name@example.com"
              className="inputField"
              sx={{ height: 48 }}
              color="secondary"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <Button
            variant="contained"
            fullWidth
            onClick={handleNext}
            color="primary"
            className={`${styles.continueButton} ${styles.commonButton}`}
            disabled={email === ""}
          >
            Continue
          </Button>

          <Button
            variant="outlined"
            fullWidth
            onClick={handleNext}
            color="secondary"
            className={`${styles.commonButton} text-color-primary ${styles.outlineButton} `}
          >
            Forgot password?
          </Button>
        </div>
      </center>
    </Container>
  );
};

export default SignUp;
