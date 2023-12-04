/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  opacity: string;
  fill: string;
  className: any;
}

export const StyleWhiteSocialPinterest = ({
  color = "white",
  opacity = "unset",
  fill = "white",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`style-white-social-pinterest ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="16" cy="16" fill={color} opacity={opacity} r="16" />
      <path
        className="path"
        d="M10.2251 26.308C9.90361 27.6922 10.0284 29.6343 10.1684 30.8994C10.1684 30.8994 10.4983 31.0303 10.7128 31.1058C10.9261 31.1809 11.2633 31.2852 11.2633 31.2852C11.9138 30.2224 12.8896 28.4808 13.2508 27.0909C13.4456 26.342 14.2474 23.288 14.2474 23.288C14.7694 24.2827 16.2936 25.1261 17.9161 25.1261C22.7403 25.1261 26.218 20.6879 26.218 15.1736C26.218 9.88819 21.9044 5.93216 16.3541 5.93216C9.44975 5.93216 5.78294 10.569 5.78294 15.6161C5.78294 17.961 7.03106 20.8845 9.02804 21.8149C9.3325 21.9548 9.49514 21.8924 9.56511 21.5993C9.61806 21.3781 9.88848 20.2907 10.0095 19.7858C10.0473 19.6232 10.0284 19.4852 9.89794 19.3263C9.23606 18.5245 8.70845 17.0495 8.70845 15.6747C8.70845 12.1461 11.3805 8.73088 15.9324 8.73088C19.8639 8.73088 22.6155 11.4086 22.6155 15.2398C22.6155 19.5684 20.4294 22.5675 17.5852 22.5675C16.0156 22.5675 14.8393 21.2703 15.2157 19.6762C15.6676 17.7738 16.5413 15.722 16.5413 14.3491C16.5413 13.12 15.8813 12.095 14.5178 12.095C12.9104 12.095 11.6226 13.7553 11.6226 15.9811C11.6226 17.3975 12.101 18.3562 12.101 18.3562C12.101 18.3562 10.5144 25.0599 10.2251 26.308Z"
        fill={fill}
      />
    </svg>
  );
};

StyleWhiteSocialPinterest.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  fill: PropTypes.string,
};
