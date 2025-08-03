import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPlans } from "../../services/api";
import type { Plan } from "../../types/plan";
import { useUser } from "../../contexts/UserContext";
import { getAgeFromBirthdate } from "../../utils/getAge";
import styles from "./Plans.module.scss";
import IconProtection from "../../icons/protection";
import IconAddUser from "../../icons/addUser";
import Button from "../../components/Button/Button";
import { useMediaQuery } from "@mui/material";

const PlansPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [target, setTarget] = useState<"me" | "someone-else" | null>(null);
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    if (!target) return;

    const getPlans = async () => {
      try {
        const data = await fetchPlans();
        const userAge = getAgeFromBirthdate(user?.birthDay);
        const filtered = data.filter((plan: Plan) => userAge <= plan.age);
        setPlans(filtered);
      } catch (error) {
        console.error("Error al cargar planes:", error);
      }
    };

    getPlans();
  }, [user, target, navigate]);

  const getPrice = (plan: Plan): number => {
    return target === "someone-else"
      ? Math.round(plan.price * 0.95)
      : plan.price;
  };

  const handleSelectPlan = (plan: Plan): void => {
    const planConEstado = {
      ...plan,
      discounted: target === "someone-else",
    };

    localStorage.setItem("selectedPlan", JSON.stringify(planConEstado));
    navigate("/summary");
  };

  return (
    <div className={styles.plans}>
      <div className={styles.plans__contentTop}>
        <h2 className={styles.plans__title}>
          {user?.name} ¿Para quién deseas cotizar?
        </h2>
        <p className={styles.plans__subtitle}>
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>
      </div>

      <div className={styles.plans__toggle}>
        <div className={styles.plans__content}>
          <div className={styles.plans__content__top}>
            <div className={styles.plans__content__box}>
              {isMobile ? (
                <IconProtection />
              ) : (
                <IconProtection width={48} height={48} />
              )}
              <div>Para mí</div>
            </div>
            <input
              type="checkbox"
              checked={target === "me"}
              onChange={() => setTarget("me")}
              className={styles.plans__toggle_checkbox}
            />
          </div>
          <p className={styles.plans__toggle__text}>
            Cotiza tu seguro de salud y agrega familiares si así lo deseas.
          </p>
        </div>

        <div className={styles.plans__content}>
          <div className={styles.plans__content__top}>
            <div className={styles.plans__content__box}>
              {isMobile ? (
                <IconAddUser />
              ) : (
                <IconAddUser width={48} height={48} />
              )}
              <div>Para alguien más</div>
            </div>
            <input
              type="checkbox"
              checked={target === "someone-else"}
              onChange={() => setTarget("someone-else")}
              className={styles.plans__toggle_checkbox}
            />
          </div>
          <p className={styles.plans__toggle__text}>
            Cotiza tu seguro de salud y agrega familiares si así lo deseas.
          </p>
        </div>
      </div>

      {target && plans.length > 0 && (
        <div className={styles.plans__list}>
          {plans.map((plan: Plan) => (
            <div key={plan.name} className={styles.plans__card}>
              <h3 className={styles.plans__card_title}>{plan.name}</h3>
              <div className={styles.plans__card_price}>
                <span className={styles.plans__card_price_label}>
                  COSTO DEL PLAN
                </span>
                {target === "someone-else" ? (
                  <>
                    <p className={styles.plans__card_price_old}>
                      $ {plan.price} antes
                    </p>
                    <p className={styles.plans__card_price_discounted}>
                      $ {getPrice(plan)}{" "}
                      <span className={styles.plans__card_price_month}>
                        al mes
                      </span>
                    </p>
                  </>
                ) : (
                  <p>
                    <span className={styles.plans__card_price_symbol}>$</span>{" "}
                    {plan.price}{" "}
                    <span className={styles.plans__card_price_month}>
                      al mes
                    </span>
                  </p>
                )}
              </div>

              <ul className={styles.plans__card_benefits}>
                {plan.description.map((d: string, idx: number) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
              <Button
                type="button"
                variant="primary"
                onClick={() => handleSelectPlan(plan)}
              >
                Seleccionar Plan
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlansPage;
