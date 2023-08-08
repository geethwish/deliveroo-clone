import React, { FC } from "react";

interface FacebookIconProp {
  className?: string;
}
const FacebookIcon: FC<FacebookIconProp> = ({ className }) => {
  return (
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      role="presentation"
      focusable="false"
      className={className}
    >
      <path d="M22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65686 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9304 5.90625 14.2146 5.90625C15.3087 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1921C13.9499 8.5625 13.5625 9.33334 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3431 21.1283 22 16.9913 22 12Z"></path>
    </svg>
  );
};

export default FacebookIcon;
