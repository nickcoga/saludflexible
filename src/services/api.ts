import type { Plan } from "../types/plan";
import type { User } from "../types/user";

interface PlansResponse {
  list: Plan[];
}

const base = import.meta.env.BASE_URL;

export const fetchUser = async (): Promise<User> => {
  try {
    const res = await fetch(
      "https://rimac-front-end-challenge.netlify.app/api/user.json"
    );
    if (!res.ok) throw new Error();
    return res.json();
  } catch (error) {
    const fallbackRes = await fetch(`${base}data/user.json`);
    return fallbackRes.json();
  }
};

export const fetchPlans = async (): Promise<Plan[]> => {
  try {
    const res = await fetch(
      "https://rimac-front-end-challenge.netlify.app/api/plans.json"
    );
    const data: PlansResponse = await res.json();
    return data.list;
  } catch (error) {
    const fallbackRes = await fetch(`${base}data/plans.json`);
    const data: PlansResponse = await fallbackRes.json();
    return data.list;
  }
};
