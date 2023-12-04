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

export const StyleGraySocialBehance = ({
  color = "#0B0D17",
  opacity = "unset",
  fill = "#969BAB",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`style-gray-social-behance ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
        fill={color}
        fillRule="evenodd"
        opacity={opacity}
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M18.3722 12.4465H22.8917V11.1517H18.3722V12.4465ZM19.4429 15.2719C19.1549 15.5649 18.9733 15.9619 18.899 16.4628H22.4141C22.377 15.9282 22.1944 15.5243 21.8712 15.2461C21.5441 14.9699 21.1417 14.8323 20.6601 14.8323C20.1383 14.8323 19.7309 14.9788 19.4429 15.2719ZM22.4933 13.5335C23.0382 13.7731 23.4868 14.1532 23.84 14.672C24.1621 15.1293 24.3688 15.6599 24.4631 16.2628C24.5183 16.6152 24.5404 17.126 24.5313 17.7903H18.8488C18.8829 18.5615 19.1518 19.103 19.6656 19.4128C19.9767 19.6059 20.351 19.7029 20.7905 19.7029C21.2531 19.7029 21.6314 19.5851 21.9214 19.3505C22.0809 19.2228 22.2214 19.0465 22.3418 18.8208H24.424C24.3688 19.2762 24.1159 19.7405 23.6684 20.2117C22.97 20.9591 21.9916 21.3333 20.7343 21.3333C19.6957 21.3333 18.7796 21.0185 17.9878 20.3869C17.1921 19.7563 16.7967 18.7288 16.7967 17.3072C16.7967 15.9737 17.155 14.9511 17.8704 14.2394C18.5879 13.5296 19.5161 13.1722 20.659 13.1722C21.3384 13.1722 21.9495 13.293 22.4933 13.5335ZM9.56887 16.4905V19.2653H12.1297C12.5873 19.2653 12.9445 19.2039 13.1984 19.0822C13.661 18.8545 13.8917 18.4229 13.8917 17.7834C13.8917 17.2409 13.669 16.8696 13.2204 16.6667C12.9696 16.5539 12.6174 16.4945 12.1658 16.4905H9.56887ZM9.56887 12.4733V14.769H12.1337C12.5903 14.769 12.9625 14.6828 13.2495 14.5106C13.5345 14.3383 13.678 14.0334 13.678 13.5979C13.678 13.1118 13.4894 12.792 13.1121 12.6356C12.7849 12.5277 12.3695 12.4733 11.8648 12.4733H9.56887ZM15.2966 11.7754C15.6187 12.2179 15.7803 12.7465 15.7803 13.3633C15.7803 13.9978 15.6187 14.5096 15.2926 14.8957C15.11 15.1115 14.842 15.3095 14.4878 15.4877C15.0257 15.6817 15.4311 15.9876 15.707 16.4064C15.98 16.8241 16.1174 17.333 16.1174 17.9309C16.1174 18.5476 15.9609 19.101 15.6468 19.59C15.4481 19.9137 15.1993 20.187 14.9002 20.4087C14.5641 20.6631 14.1677 20.8364 13.7091 20.9314C13.2506 21.0254 12.7549 21.071 12.219 21.071H7.46667V10.6667H12.5632C13.8496 10.6855 14.7598 11.0547 15.2966 11.7754Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

StyleGraySocialBehance.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  fill: PropTypes.string,
};
