import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import styles from "./Header.module.scss";
import IconLogoRimac from "../../icons/logorimac";
import IconTelephone from "../../icons/telephone";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles["header--scrolled"] : ""}`}
    >
      {isMobile ? <IconLogoRimac /> : <IconLogoRimac width={73} height={36} />}
      <div className={styles.header__phone}>
        {isMobile ? null : <span>¡Compra por este medio!</span>}
        <IconTelephone title="Llamanos al (01) 411 6001" />
        <a href="tel:014116001" aria-label="Llamar al número (01) 411 6001">
          (01) 411 6001
        </a>
      </div>
    </header>
  );
};

export default Header;
