import React from "react";
import styles from "./Login.module.scss";
import { Button, Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import FacebookIcon from "../../components/svgElements/FacebookIcon";
import GoogleIcon from "../../components/svgElements/GoogleIcon";
import AppleIcon from "../../components/svgElements/AppleIcon";
import EmailIcon from "../../components/svgElements/EmailIcon";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSignUpNavigation = () => {
    navigate("/sign-up");
  };

  return (
    <div className="footer-container">
      <Container maxWidth={"lg"}>
        <center className={styles.mainContainer}>
          <div className={styles.container}>
            <h1 className={styles.title}>Sign up or log in</h1>

            <Button className={styles.facebookButton} fullWidth>
              <FacebookIcon />
              Continue with Facebook
            </Button>

            <Button className={styles.googleButton} fullWidth>
              <GoogleIcon />
              Continue with Googles
            </Button>

            <Button className={styles.appleButton} fullWidth>
              <AppleIcon />
              Continue with Apple
            </Button>
            <div className={styles.separator}>
              <Divider textAlign="center" className={styles.line}>
                or
              </Divider>
              <Button
                className={styles.emailButton}
                fullWidth
                onClick={handleSignUpNavigation}
              >
                <EmailIcon />
                Continue with email
              </Button>
            </div>
            <p className={styles.terms}>
              By continuing you agree to our{" "}
              <a href="#" className={styles.link}>
                T&Cs
              </a>
              . Please also check out our{" "}
              <a href="#" className={styles.link}>
                Privacy Policy
              </a>
              . We use your data to offer you a personalised experience and to
              better understand and improve our services.
              <a href="#" className={styles.link}>
                For more information see here
              </a>{" "}
              .
            </p>
          </div>
        </center>
      </Container>
    </div>
  );
}

export default Login;
