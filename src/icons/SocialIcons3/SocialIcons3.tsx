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

export const SocialIcons3 = ({ color = "white", opacity = "unset", fill = "white", className }: Props): JSX.Element => {
  return (
    <svg
      className={`social-icons-3 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M0 12.0002C0 5.37283 5.37258 0.000244141 12 0.000244141C18.6274 0.000244141 24 5.37283 24 12.0002C24 18.6277 18.6274 24.0002 12 24.0002C5.37258 24.0002 0 18.6277 0 12.0002Z"
        fill={color}
        fillRule="evenodd"
        opacity={opacity}
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M17.0008 7.87501C17.5515 8.02614 17.9853 8.47145 18.1325 9.03695C18.4 10.0619 18.4 12.2003 18.4 12.2003C18.4 12.2003 18.4 14.3387 18.1325 15.3637C17.9853 15.9292 17.5515 16.3745 17.0008 16.5258C16.0027 16.8003 12 16.8003 12 16.8003C12 16.8003 7.99728 16.8003 6.9991 16.5258C6.44834 16.3745 6.01459 15.9292 5.86739 15.3637C5.59998 14.3387 5.59998 12.2003 5.59998 12.2003C5.59998 12.2003 5.59998 10.0619 5.86739 9.03695C6.01459 8.47145 6.44834 8.02614 6.9991 7.87501C7.99728 7.60034 12 7.60034 12 7.60034C12 7.60034 16.0027 7.60034 17.0008 7.87501ZM10.8 10.4003V14.4003L14 12.4004L10.8 10.4003Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

SocialIcons3.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  fill: PropTypes.string,
};
