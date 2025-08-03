import { useMediaQuery } from "@mui/material";
import IconLogoRimacWhite from "../../icons/logorimacwhite";
import styles from "./Footer.module.scss";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <div className={`${styles.footer} containerMain`}>
      <IconLogoRimacWhite />
      {isMobile ? <hr className={styles.footer__line} /> : null}
      <p className={styles.footer__text}>© 2023 RIMAC Seguros y Reaseguros.</p>
    </div>
  );
};

export default Footer;
