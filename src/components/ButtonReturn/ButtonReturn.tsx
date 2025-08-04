import IconChevronLeft from "../../icons/chevronLeft";
import styles from "./ButtonReturn.module.scss";

import { useNavigate } from "react-router-dom";

const ButtonReturn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.content} onClick={handleClick}>
      <IconChevronLeft />
      <div className={styles.content__text}>Volver</div>
    </div>
  );
};

export default ButtonReturn;
