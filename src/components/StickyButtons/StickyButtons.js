import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";

import classes from "./StickyButtons.module.css";

export const StickyButtons = () => {
  return (
    <div className={classes.stickyMediaBar}>
      {/* eslint-disable-next-line */}
      <a
        className={classes.stickyMediaButton}
        href="#"
        style={{ backgroundColor: "#25d366" }}
      >
        <IoLogoWhatsapp className={classes.stickyMediaIcon} />
      </a>
      {/* eslint-disable-next-line */}
      <a className={classes.stickyMediaButton} href="#" itemProp="telephone">
        <AiFillPhone className={classes.stickyMediaIcon} />
      </a>
    </div>
  );
};
