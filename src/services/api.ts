import type { Plan } from "../types/plan";
import type { User } from "../types/user";


export const fetchUser = async (): Promise<User> => {
  const res = await fetch('https://rimac-front-end-challenge.netlify.app/api/user.json');
  if (!res.ok) throw new Error('Error al obtener el usuario');
  return res.json();
};

interface PlansResponse {
  list: Plan[];
}

export const fetchPlans = async (): Promise<Plan[]> => {
  const res = await fetch('https://rimac-front-end-challenge.netlify.app/api/plans.json');
  const data: PlansResponse = await res.json();
  return data.list;
};
