import React from "react";

import classes from "./Footer.module.css";

import { BsPhone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.footerSection}>
        <h3 className={classes.footerTitle}>ENLACES</h3>
        <div className={classes.contactList}>
          {/* eslint-disable-next-line */}
          <a className={classes.footerLink} href="#">
            Inicio
          </a>
          <a className={classes.footerLink} href="#servicios">
            Servicios
          </a>
          <a className={classes.footerLink} href="#catalogo">
            Catálogo
          </a>
          <a className={classes.footerLink} href="#redessociales">
            Contacto
          </a>
          <a className={classes.footerLink} href="#quienessomos">
            Quienes Somos
          </a>
        </div>
      </div>
      <div className={classes.footerSection}>
        <h3 className={classes.footerTitle}>CONTÁCTANOS</h3>
        <div className={classes.contactList}>
          <div className={classes.footerListElement}>
            <BsPhone className={classes.footerListIcon} />
            <p>+502 9999-9999</p>
          </div>
          <div className={classes.footerListElement}>
            <CiMail className={classes.footerListIcon} />
            <p>sales@autosalesgt.com</p>
          </div>
        </div>
      </div>
      <div className={classes.footerSection}>
        <h3 className={classes.footerTitle}>SÍGUENOS</h3>
        <div className={classes.socialMediaList}>
          {/* eslint-disable-next-line */}
          <a
            className={classes.footerSocialIcon}
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          {/* eslint-disable-next-line */}
          <a
            className={classes.footerSocialIcon}
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          {/* eslint-disable-next-line */}
          <a
            className={classes.footerSocialIcon}
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok />
          </a>
        </div>
        <div className={classes.copyrightTextContainer}>
          <p className={classes.bottomText}>
            Web design & development{" "}
            <a
              href="https://www.miguelgnz.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "aliceblue" }}
            >
              Miguel Gnz
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
