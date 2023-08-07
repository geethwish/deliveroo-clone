import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerCard}>
        <h3>Discover Deliveroo</h3>
        <ul>
          <li>Investors</li>
          <li>About us</li>
          <li>Takeaway</li>
          <li>More</li>
          <li>Newsroom</li>
          <li>Engineering blog</li>
          <li>Design blog</li>
          <li>Gift Cards</li>
          <li>Careers</li>
          <li>Restaurant signup</li>
          <li>Become a rider</li>
          <li>Deliveroo Talent Directory</li>
        </ul>
      </div>
      <div className={styles.footerCard}>
        <h3>Legal</h3>
        <ul>
          <li>Terms and condition</li>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Modern Slavery Statement</li>
          <li>Tax Strategy</li>
          <li>Section 172 Statement</li>
        </ul>
      </div>
      <div className={styles.footerCard}>
        <h3>Help</h3>
        <ul>
          <li>Contact</li>
          <li>FAQs</li>
          <li>Cuisines</li>
          <li>Brands</li>
        </ul>
      </div>
      <div className={styles.footerCard}>
        <h3>Take Deliveroo with you</h3>
      </div>
    </div>
  );
};

export default Footer;
