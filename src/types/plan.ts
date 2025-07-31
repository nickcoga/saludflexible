export interface Plan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

export interface SelectedPlan extends Plan {
  discounted: boolean;
}
