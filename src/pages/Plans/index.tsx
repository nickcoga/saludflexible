import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPlans } from '../../services/api';
import type { Plan } from '../../types/plan';
import { useUser } from '../../contexts/UserContext';
import { getAgeFromBirthdate } from '../../utils/getAge';

const PlansPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const [plans, setPlans] = useState<Plan[]>([]);
  const [target, setTarget] = useState<'me' | 'someone-else'>('me');
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);


  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }

    const getPlans = async () => {
      try {
        const data = await fetchPlans();
        const userAge = getAgeFromBirthdate(user?.birthDay)
        const filtered = data.filter((plan: Plan) => userAge <= plan.age);
        setPlans(filtered);
      } catch (error) {
        console.error('Error al cargar planes:', error);
      }
    };

    getPlans();
  }, [user, navigate]);

  const handleSelectPlan = (plan: Plan): void => {
    setSelectedPlan(plan);
  };

  const getPrice = (plan: Plan): number => {
    return target === 'someone-else'
      ? Math.round(plan.price * 0.95)
      : plan.price;
  };

  const handleContinue = (): void => {
    if (!selectedPlan) return;

    const planConEstado = {
      ...selectedPlan,
      discounted: target === 'someone-else',
    };

    localStorage.setItem('selectedPlan', JSON.stringify(planConEstado));
    navigate('/summary');
  };

  return (
    <div className="plans">
      <h2 className="plans__title">¿Para quién deseas cotizar?</h2>

      <div className="plans__toggle">
        <button
          className={`plans__toggle-button ${target === 'me' ? 'plans__toggle-button--active' : ''}`}
          onClick={() => setTarget('me')}
        >
          Para mí
        </button>
        <button
          className={`plans__toggle-button ${target === 'someone-else' ? 'plans__toggle-button--active' : ''}`}
          onClick={() => setTarget('someone-else')}
        >
          Para alguien más
        </button>
      </div>

      <div className="plans__list">
        {plans.map((plan: Plan) => (
          <div
            key={plan.name}
            className={`plans__card ${selectedPlan?.name === plan.name ? 'plans__card--selected' : ''}`}
            onClick={() => handleSelectPlan(plan)}
          >
            <h3 className="plans__card-title">{plan.name}</h3>
            <p className="plans__card-price">S/ {getPrice(plan)}</p>
            <ul className="plans__card-benefits">
              {plan.description.map((d: string, idx: number) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button
        className="plans__continue-button"
        disabled={!selectedPlan}
        onClick={handleContinue}
      >
        Continuar
      </button>
    </div>
  );
};

export default PlansPage;
