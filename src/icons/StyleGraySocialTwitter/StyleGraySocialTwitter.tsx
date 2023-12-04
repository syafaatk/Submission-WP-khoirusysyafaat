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

export const StyleGraySocialTwitter = ({
  color = "#0B0D17",
  opacity = "unset",
  fill = "#969BAB",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`style-gray-social-twitter ${className}`}
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
        d="M15.5208 13.005L15.5544 13.5586L14.9948 13.4909C12.9579 13.231 11.1784 12.3497 9.66756 10.8696L8.92891 10.1351L8.73865 10.6775C8.33575 11.8864 8.59316 13.1632 9.43253 14.0219C9.8802 14.4964 9.77948 14.5642 9.00725 14.2818C8.73865 14.1914 8.50363 14.1236 8.48124 14.1575C8.4029 14.2366 8.6715 15.2647 8.88414 15.6715C9.17513 16.2364 9.76828 16.7901 10.4174 17.1177L10.9658 17.3776L10.3167 17.3889C9.68994 17.3889 9.66756 17.4002 9.73471 17.6375C9.95854 18.3719 10.8427 19.1515 11.8276 19.4905L12.5214 19.7277L11.9171 20.0893C11.0218 20.609 9.96973 20.9028 8.91772 20.9254C8.41409 20.9367 8 20.9819 8 21.0158C8 21.1288 9.36538 21.7615 10.16 22.0101C12.5438 22.7445 15.3753 22.4281 17.5017 21.174C19.0126 20.2814 20.5235 18.5075 21.2286 16.7901C21.6091 15.8749 21.9896 14.2027 21.9896 13.4005C21.9896 12.8807 22.0232 12.8129 22.6499 12.1915C23.0192 11.8299 23.3662 11.4345 23.4333 11.3215C23.5452 11.1068 23.534 11.1068 22.9633 11.2989C22.012 11.6379 21.8777 11.5927 22.3477 11.0842C22.6947 10.7227 23.1088 10.0673 23.1088 9.87527C23.1088 9.84137 22.9409 9.89787 22.7506 9.99955C22.5492 10.1125 22.1015 10.282 21.7658 10.3837L21.1614 10.5758L20.613 10.2029C20.3108 9.99955 19.8856 9.77358 19.6617 9.70579C19.0909 9.54761 18.218 9.5702 17.7032 9.75098C16.3042 10.2594 15.4201 11.5701 15.5208 13.005Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

StyleGraySocialTwitter.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  fill: PropTypes.string,
};