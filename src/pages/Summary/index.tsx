import { useMediaQuery } from "@mui/material";
import ButtonReturn from "../../components/ButtonReturn/ButtonReturn";
import styles from "./Summary.module.scss";
import { useUser } from "../../contexts/UserContext";
import { useEffect, useState } from "react";
import IconFamily from "../../icons/family";

export interface Plan {
  name: string;
  price: number;
  discounted: boolean;
  description: string[];
}

const SummaryPage = () => {
  const { user } = useUser();
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    const storedPlan = localStorage.getItem("selectedPlan");
    if (storedPlan) {
      setSelectedPlan(JSON.parse(storedPlan));
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__contentSummary}>
        {isMobile ? null : <ButtonReturn />}
        <div className={styles.container__contentSummary__content}>
          <h1 className={styles.container__title}>Resumen del Seguro</h1>
          <div className={styles.container__content}>
            <section className={styles.container__section}>
              <div className={styles.container__content__top}>
                <h3 className={styles.container__content__text}>
                  Precios calculados para:
                </h3>
                <div className={styles.container__content__name}>
                  <IconFamily />
                  <p>
                    <strong>Nombre:</strong> {user?.name} {user?.lastName}
                  </p>
                </div>
              </div>
              <hr className={styles.container__content__line} />
              <div className={styles.container__content__responsible}>
                <h3>Responsable de Pago</h3>
                <p>
                  <strong>DNI:</strong> {user?.documentNumber}
                </p>
                <p>
                  <strong>Celular:</strong> {user?.phone}
                </p>
              </div>
            </section>
            <section className={styles.container__}>
              <h3>Plan Elegido</h3>
              {selectedPlan ? (
                <>
                  <p>
                    <strong>Nombre del plan:</strong> {selectedPlan.name}
                  </p>
                  <p>
                    <strong>Costo del Plan:</strong> $
                    {selectedPlan.discounted
                      ? Math.round(selectedPlan.price * 0.95)
                      : selectedPlan.price}
                  </p>
                </>
              ) : (
                <p>No hay plan seleccionado.</p>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
