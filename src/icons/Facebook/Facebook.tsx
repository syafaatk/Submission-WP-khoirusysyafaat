/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Facebook = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`facebook ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_236_53)">
        <path
          className="path"
          d="M12.8334 7.00033C12.8334 3.78033 10.22 1.16699 7.00002 1.16699C3.78002 1.16699 1.16669 3.78033 1.16669 7.00033C1.16669 9.82366 3.17335 12.1745 5.83335 12.717V8.75033H4.66669V7.00033H5.83335V5.54199C5.83335 4.41616 6.74919 3.50033 7.87502 3.50033H9.33335V5.25033H8.16669C7.84585 5.25033 7.58335 5.51283 7.58335 5.83366V7.00033H9.33335V8.75033H7.58335V12.8045C10.5292 12.5128 12.8334 10.0278 12.8334 7.00033Z"
          fill="white"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_236_53">
          <rect className="rect" fill="white" height="14" transform="translate(0 0.000244141)" width="14" />
        </clipPath>
      </defs>
    </svg>
  );
};
