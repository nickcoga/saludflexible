import { useUser } from "../../contexts/UserContext";
import UserForm from "../../components/Form/UserForm";
import styles from "../../pages/Home/Home.module.scss";
import bgLightBlueDesktop from "../../assets/blur-asset-lightblue-desktop.png";
import bgPurpleDesktop from "../../assets/blur-asset-purple-desktop.png";
import bgLightBlueMobile from "../../assets/blur-asset-lightblue-mobile.png";
import bgPurpleMobile from "../../assets/blur-asset-purple-mobile.png";
import maskGroupMobile from "../../assets/maskGroup-mobile.png";
import maskGroupDesktop from "../../assets/maskGroup-desktop.png";
import { useMediaQuery } from "@mui/material";

const Home = () => {
  const { setUser } = useUser();
  const isMobile = useMediaQuery("(max-width:768px)");

  const backgroundStyle = {
    backgroundImage: isMobile
      ? `url(${bgLightBlueMobile}), url(${bgPurpleMobile})`
      : `url(${bgLightBlueDesktop}), url(${bgPurpleDesktop})`,
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundPosition: "top right, bottom left",
    backgroundSize: "contain, contain",
  };

  return (
    <div className={styles.container} style={backgroundStyle}>
      {isMobile ? null : (
        <div className={styles.container__contentMask}>
          <img src={maskGroupDesktop} alt="Mask Group" />
        </div>
      )}
      <div className={styles.container__content}>
        <div className={styles.container__content__section}>
          <div className={styles.container__contentTop}>
            <div className={styles.container__contentTop__div}>
              <span className={styles.container__contentTop__span}>
                Seguro Salud Flexible
              </span>
              <div className={styles.container__contentTop__text}>
                <h1 className={styles.container__contentTop__title}>
                  Creado para ti y tu familia
                </h1>
                {isMobile ? null : (
                  <p className={styles.container__contentTop__subTitle}>
                    Tú eliges cuánto pagar, ingresa tus datos, cotiza y recibe
                    nuestra asesoría. 100% online.
                  </p>
                )}
              </div>
            </div>
            {isMobile ? <img src={maskGroupMobile} alt="Mask Group" /> : null}
          </div>
          {isMobile ? <hr className={styles.container__line} /> : null}
          <div className={styles.container__contentForm}>
            <UserForm onUserLoaded={setUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
