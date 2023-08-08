import React, { FC } from "react";

interface GoogleIconProps {
  className?: string;
}

const GoogleIcon: FC<GoogleIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      className={className}
    >
      <path
        fill="#4285F4"
        fillRule="evenodd"
        d="M20.64 12.013c0-.625-.057-1.226-.164-1.803H12v3.409h4.844c-.209 1.102-.843 2.035-1.796 2.66v2.211h2.908c1.702-1.534 2.684-3.793 2.684-6.477Z"
        clip-rule="evenodd"
      />
      <path
        fill="#34A853"
        fillRule="evenodd"
        d="M12 20.625c2.43 0 4.467-.79 5.956-2.135l-2.909-2.211c-.805.529-1.836.841-3.047.841-2.344 0-4.328-1.55-5.036-3.633H3.957v2.283c1.48 2.88 4.525 4.855 8.043 4.855Z"
        clipRule="evenodd"
      />
      <path
        fill="#FBBC05"
        fill-rule="evenodd"
        d="M6.964 13.487a5.198 5.198 0 0 1-.282-1.674c0-.581.102-1.146.282-1.675V7.855H3.957a8.66 8.66 0 0 0 0 7.915l3.007-2.283Z"
        clipRule="evenodd"
      />
      <path
        fill="#EA4335"
        fillRule="evenodd"
        d="M12 6.505c1.321 0 2.508.445 3.44 1.318l2.582-2.528C16.462 3.873 14.426 3 12 3 8.482 3 5.438 4.975 3.957 7.855l3.007 2.283C7.672 8.055 9.656 6.505 12 6.505Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default GoogleIcon;
