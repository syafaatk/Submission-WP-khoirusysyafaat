/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Facebook2 } from "../../icons/Facebook2";
import { SocialIcons3 } from "../../icons/SocialIcons3";
import { SocialIcons4 } from "../../icons/SocialIcons4";
import { SocialIcons5 } from "../../icons/SocialIcons5";
import "./style.css";

interface Props {
  BGClassName: any;
  songket: string;
  locationClassName: any;
  messageClassName: any;
  mobile: string;
  overlapGroupClassName: any;
  socialIconsClassName: any;
  icon: JSX.Element;
  inputType: string;
}

export const FooterBig = ({
  BGClassName,
  songket = "/img/songket2-2.png",
  locationClassName,
  messageClassName,
  mobile = "/img/mobile-1.svg",
  overlapGroupClassName,
  socialIconsClassName,
  icon = <Facebook2 className="facebook-2" />,
  inputType = "email",
}: Props): JSX.Element => {
  return (
    <div className="footer-big">
      <div className="overlap">
        <div className={`BG ${BGClassName}`} />
        <img className="songket" alt="Songket" src={songket} />
        <div className="group">
          <img className="image" alt="Image" src="image-23-2.png" />
          <p className="pemerintah-kota">
            Pemerintah Kota Palembang
            <br />
            Dinas Kesehatan Kota Palembang
          </p>
          <div className="list-items">
            <div className="div">
              <div className="social-icons">
                <div className={`location ${locationClassName}`} />
              </div>
              <p className="text-wrapper">
                Jl. Merdeka No.72, 22 Ilir, Kec. Bukit Kecil, Kota Palembang, Sumatera Selatan 30131
              </p>
            </div>
            <div className="email">
              <div className="social-icons">
                <div className={`message ${messageClassName}`} />
              </div>
              <input className="dinkes-palembang" placeholder="dinkes_palembang@yahoo.co.id" type={inputType} />
            </div>
            <div className="div">
              <div className="social-icons">
                <div className="mobile">
                  <img className="img" alt="Mobile" src={mobile} />
                </div>
              </div>
              <div className="text-wrapper-2">0711-350651</div>
            </div>
          </div>
        </div>
        <div className="sub-footer">
          <div className={`overlap-group ${overlapGroupClassName}`}>
            <p className="p">Copyright © Pemerintah Kota Palembang</p>
            <div className="social-links">
              <SocialIcons5 className="social-icons" />
              <div className={`facebook-wrapper ${socialIconsClassName}`}>{icon}</div>
              <SocialIcons4 className="social-icons" />
              <SocialIcons3 className="social-icons" color="white" fill="white" opacity="0.1" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="text-wrapper-3">Menu</div>
          <div className="list-items-2">
            <div className="text-wrapper-4">Profil</div>
            <div className="text-wrapper-5">Pelayanan</div>
            <div className="text-wrapper-5">Pengaduan</div>
            <div className="text-wrapper-5">Kontak</div>
          </div>
        </div>
        <div className="col-2">
          <div className="text-wrapper-6">Kebijakan</div>
          <div className="list-items-2">
            <div className="text-wrapper-4">Pusat</div>
            <div className="text-wrapper-5">Provinsi</div>
            <div className="text-wrapper-5">Kota</div>
          </div>
        </div>
        <div className="col-wrapper">
          <div className="div-wrapper">
            <div className="text-wrapper-6">Menu</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterBig.propTypes = {
  songket: PropTypes.string,
  mobile: PropTypes.string,
  inputType: PropTypes.string,
};
