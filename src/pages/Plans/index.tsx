import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPlans } from "../../services/api";
import type { Plan } from "../../types/plan";
import { useUser } from "../../contexts/UserContext";
import { getAgeFromBirthdate } from "../../utils/getAge";
import styles from "./Plans.module.scss";

const PlansPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const [plans, setPlans] = useState<Plan[]>([]);
  const [target, setTarget] = useState<"me" | "someone-else">("me");

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

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
  }, [user, navigate]);

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
      <h2 className={styles.plans__title}>
        {user?.name} ¿Para quién deseas cotizar?
      </h2>

      <div className={styles.plans__toggle}>
        <button
          className={`${styles.plans__toggle_button} ${target === "me" ? styles["plans__toggle_button--active"] : ""}`}
          onClick={() => setTarget("me")}
        >
          Para mí
        </button>
        <button
          className={`${styles.plans__toggle_button} ${target === "someone-else" ? styles["plans__toggle_button--active"] : ""}`}
          onClick={() => setTarget("someone-else")}
        >
          Para alguien más
        </button>
      </div>

      {plans.length > 0 && (
        <div className={styles.plans__list}>
          {plans.map((plan: Plan) => (
            <div
              key={plan.name}
              className={styles.plans__card}
              onClick={() => handleSelectPlan(plan)}
            >
              <h3 className={styles.plans__card_title}>{plan.name}</h3>
              <p className={styles.plans__card_price}>S/ {getPrice(plan)}</p>
              <ul className={styles.plans__card_benefits}>
                {plan.description.map((d: string, idx: number) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlansPage;
