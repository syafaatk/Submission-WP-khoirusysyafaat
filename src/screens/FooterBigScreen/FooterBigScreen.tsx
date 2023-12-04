import React from "react";
import { FooterBig } from "../../components/FooterBig";
import { Facebook } from "../../icons/Facebook";
import "./style.css";

export const FooterBigScreen = (): JSX.Element => {
  return (
    <FooterBig
      BGClassName="footer-big-5"
      icon={<Facebook className="facebook-instance" />}
      locationClassName="footer-big-instance"
      messageClassName="footer-big-5-instance"
      mobile="/img/mobile.svg"
      overlapGroupClassName="design-component-instance-node"
      socialIconsClassName="footer-big-2"
      songket="/img/songket2-2-1.png" inputType={""}    />
  );
};
