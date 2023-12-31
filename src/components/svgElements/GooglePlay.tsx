import React from "react";

const GooglePlay = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="135" height="40">
      <defs>
        <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop stopColor="#00C3FF" offset="3.938%" />
          <stop stopColor="#00E1FF" offset="97.744%" />
        </linearGradient>
        <linearGradient id="b" x1="80.747%" x2="-156.778%" y1="50%" y2="50%">
          <stop stopColor="#FDDE31" offset="0%" />
          <stop stopColor="#FABC31" offset="40%" />
          <stop stopColor="#F8A431" offset="77%" />
          <stop stopColor="#F79B31" offset="100%" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="86.151%"
          x2="-50.12%"
          y1="17.813%"
          y2="194.699%"
        >
          <stop stopColor="#FF3A44" offset="0%" />
          <stop stopColor="#C4206D" offset="100%" />
        </linearGradient>
      </defs>

      <g fill="none">
        <g>
          <rect width="135" height="40" fill="#000" rx="5" />
          <path
            fill="#fff"
            stroke="#fff"
            strokeWidth=".2"
            d="M47.42 10.24c.03.74-.24 1.46-.75 2-.57.6-1.37.92-2.2.9-1.27-.02-2.4-.8-2.9-1.96-.47-1.17-.2-2.52.7-3.42.57-.6 1.37-.92 2.2-.9.42 0 .84.08 1.23.25.36.16.68.4.94.68l-.53.53c-.4-.47-1-.73-1.63-.7-.63 0-1.24.25-1.68.7-.45.46-.68 1.07-.66 1.7 0 .95.55 1.82 1.42 2.2.88.38 1.9.2 2.58-.47.3-.33.5-.77.5-1.22h-2.17v-.7h2.9c.04.14.05.3.05.44zM52 7.74h-2.7v1.9h2.46v.72H49.3v1.9H52V13h-3.5V7H52zM55.28 13h-.77V7.74h-1.67V7H57v.74h-1.72zm4.66 0V7h.77v6zm4.19 0h-.77V7.74h-1.68V7h4.12v.74h-1.67zm9.47-.78c-1.2 1.2-3.17 1.2-4.4 0a3.26 3.26 0 0 1 0-4.45c.6-.6 1.38-.92 2.2-.92.84 0 1.63.33 2.2.92a3.2 3.2 0 0 1 0 4.45zm-3.82-.5c.9.9 2.36.9 3.26 0 .9-.98.9-2.46 0-3.44-.9-.9-2.36-.9-3.26 0-.9.98-.9 2.46 0 3.44zm5.8 1.28V7h.94l2.92 4.67V7h.77v6h-.8l-3.04-4.9V13z"
          />
          <path
            fill="#fff"
            d="M68.14 21.75c-2.34 0-4.24 1.92-4.23 4.26a4.27 4.27 0 0 0 4.27 4.25c2.34 0 4.24-1.9 4.24-4.25.03-1.14-.42-2.23-1.22-3.03-.8-.8-1.9-1.24-3.04-1.22zm0 6.83c-1.06.07-2.05-.5-2.5-1.46-.46-.96-.3-2.1.43-2.87.72-.78 1.84-1.03 2.83-.65 1 .4 1.64 1.34 1.64 2.4.03.66-.2 1.3-.66 1.8-.45.48-1.08.76-1.74.78zm-9.3-6.83c-2.36 0-4.25 1.9-4.25 4.26a4.244 4.244 0 1 0 8.49 0c0-1.14-.44-2.23-1.24-3.03-.8-.8-1.9-1.24-3.04-1.22zm0 6.83c-1.07.08-2.06-.5-2.52-1.45-.46-.96-.3-2.1.43-2.88a2.6 2.6 0 0 1 2.83-.65c1 .4 1.64 1.34 1.64 2.4.03.66-.2 1.3-.66 1.8-.45.48-1.08.76-1.74.78zm-11.1-5.52v1.8h4.32c-.07.85-.42 1.65-1 2.27-.87.9-2.08 1.37-3.33 1.32a4.801 4.801 0 0 1 0-9.6c1.22-.02 2.4.44 3.27 1.3l1.27-1.28A6.36 6.36 0 0 0 47.74 17c-2.42-.1-4.7 1.14-5.94 3.23a6.589 6.589 0 0 0 0 6.75 6.592 6.592 0 0 0 5.94 3.23c1.73.1 3.4-.6 4.6-1.84a5.933 5.933 0 0 0 1.57-4.22c0-.38-.02-.76-.1-1.13l-6.06.06zm45.3 1.4a3.947 3.947 0 0 0-3.63-2.7c-1.1 0-2.15.44-2.9 1.25-.77.8-1.16 1.9-1.1 3 0 1.13.42 2.22 1.22 3.02.8.8 1.88 1.25 3 1.23 1.43 0 2.76-.7 3.55-1.88l-1.45-1c-.44.73-1.23 1.18-2.1 1.18-.88.03-1.7-.48-2.05-1.3l5.7-2.34-.22-.44zm-5.8 1.42c-.03-.62.18-1.24.6-1.7.42-.47 1-.75 1.63-.78.66-.04 1.28.3 1.58.9l-3.8 1.58zM82.65 30h1.86V17.5h-1.87V30zm-3.07-7.3h-.07c-.57-.64-1.38-1-2.24-1-2.27.1-4.05 1.98-4.05 4.25 0 2.28 1.8 4.15 4.06 4.26.86.02 1.68-.34 2.24-1h.06v.62c0 1.63-.87 2.5-2.27 2.5a2.37 2.37 0 0 1-2.15-1.5l-1.63.67A4.08 4.08 0 0 0 77.3 34c2.18 0 4-1.3 4-4.43V22h-1.73v.7zm-2.14 5.88c-1.34-.12-2.36-1.24-2.36-2.58s1.02-2.46 2.36-2.58c.65.03 1.25.33 1.68.8.44.5.65 1.13.6 1.78.06.65-.16 1.3-.6 1.78-.42.5-1.03.78-1.68.8zM101.8 17.5h-4.46V30h1.87v-4.74h2.62c1.45.1 2.84-.6 3.6-1.86.76-1.24.76-2.8 0-4.04a3.894 3.894 0 0 0-3.6-1.86zm0 6h-2.6v-4.26h2.65c1.18 0 2.15.96 2.15 2.15 0 1.17-.97 2.13-2.15 2.13l-.04-.03zm11.54-1.8c-1.4-.08-2.7.67-3.33 1.9l1.67.7c.33-.62 1-.98 1.7-.92.48-.06.96.08 1.34.4.38.3.62.73.67 1.2v.14c-.6-.32-1.27-.48-1.95-.48-1.8 0-3.6 1-3.6 2.8.04.8.4 1.52.97 2.04s1.34.78 2.12.72c.96.07 1.88-.4 2.4-1.2h.06v1h1.8v-4.8c0-2.2-1.66-3.47-3.8-3.47l-.04-.03zm-.23 6.85c-.6 0-1.45-.3-1.45-1.06 0-1 1.06-1.34 2-1.34.6 0 1.18.13 1.7.42a2.262 2.262 0 0 1-2.2 2l-.04-.03zM123.75 22l-2.14 5.42h-.06L119.32 22h-2l3.33 7.58-1.9 4.2h1.95L125.82 22h-2.08zm-16.8 8h1.86V17.5h-1.87V30z"
          />
          <path
            fill="url(#a)"
            d="M10.44 7.55c-.33.4-.5.93-.44 1.45v22c-.03.5.13 1 .46 1.4l.07.07L22.9 20.15v-.3L10.5 7.5l-.06.07z"
          />
          <path
            fill="url(#b)"
            d="M27 24.27l-4.13-4.13v-.3l4.13-4.1.1.04 4.9 2.78c1.4.8 1.4 2.1 0 2.9l-4.9 2.77-.1.04z"
          />
          <path
            fill="url(#c)"
            d="M27.1 24.22L22.9 20 10.43 32.45c.6.52 1.46.54 2.08.06l14.6-8.28"
          />
          <path
            fill="#00F076"
            d="M27.1 15.78l-14.6-8.3a1.63 1.63 0 0 0-2.07.07L22.9 20l4.2-4.22z"
          />
        </g>
      </g>
      <path
        fill="#A6A6A6"
        d="M130.2 39c2.07 0 3.8-1.7 3.8-3.73V4.73C134 2.7 132.27 1 130.2 1H4.73A3.73 3.73 0 0 0 1 4.73v30.54C1 37.32 2.68 39 4.73 39H130.2zm0 1H4.73C2.13 40 0 37.87 0 35.27V4.73C0 2.13 2.12 0 4.73 0H130.2c2.6 0 4.8 2.12 4.8 4.73v30.54c0 2.6-2.2 4.73-4.8 4.73z"
      ></path>
    </svg>
  );
};

export default GooglePlay;
