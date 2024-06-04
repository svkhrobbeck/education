import { FC } from "react";

const Check: FC = () => {
  return (
    <svg width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="25" fill="#C8F8E4" />
      <g clipPath="url(#a)">
        <path
          d="m36.297 20.368-12.661 12.66a2.402 2.402 0 0 1-3.397 0l-6.536-6.536a2.402 2.402 0 0 1 3.397-3.397l4.838 4.838L32.9 16.971a2.402 2.402 0 0 1 3.397 3.397Z"
          fill="#1DC37E"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(13 13)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Check;
