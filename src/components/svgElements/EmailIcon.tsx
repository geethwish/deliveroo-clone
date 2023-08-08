import React, { FC } from "react";

interface EmailIconProps {
  className?: string;
}
const EmailIcon: FC<EmailIconProps> = ({ className }) => {
  return (
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      role="presentation"
      focusable="false"
      className={className}
    >
      <path d="M2 20H22V4H2V20ZM20 6V18H4V6L12 13L20 6ZM5.41425 6H18.5858L12 11.5857L5.41425 6Z"></path>
    </svg>
  );
};

export default EmailIcon;
