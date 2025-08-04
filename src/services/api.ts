import type { Plan } from "../types/plan";
import type { User } from "../types/user";

interface PlansResponse {
  list: Plan[];
}

export const fetchUser = async (): Promise<User> => {
  try {
    const res = await fetch(
      "https://rimac-front-end-challenge.netlify.app/api/user.json"
    );
    if (!res.ok) throw new Error("Error desde el API remoto");

    return await res.json();
  } catch (error) {
    console.warn("Fallo el API remoto (user), usando backup local:", error);

    const localRes = await fetch(`${import.meta.env.BASE_URL}data/user.json`);
    if (!localRes.ok)
      throw new Error(
        "No se pudo cargar ni remotamente ni localmente el usuario"
      );

    return await localRes.json();
  }
};

export const fetchPlans = async (): Promise<Plan[]> => {
  try {
    const res = await fetch(
      "https://rimac-front-end-challenge.netlify.app/api/plans.json"
    );
    if (!res.ok) throw new Error("Error desde el API remoto");

    const data: PlansResponse = await res.json();
    return data.list;
  } catch (error) {
    console.warn("Fallo el API remoto (plans), usando backup local:", error);

    const localRes = await fetch(`${import.meta.env.BASE_URL}data/plans.json`);
    if (!localRes.ok)
      throw new Error(
        "No se pudo cargar ni remotamente ni localmente los planes"
      );

    const localData: PlansResponse = await localRes.json();
    return localData.list;
  }
};
