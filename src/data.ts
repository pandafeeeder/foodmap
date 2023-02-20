export interface Item {
  name: string;
  type: "food" | "drink";
  avoid: boolean;
}

export const data: Item[] = [
  {
    name: "Cranberry Juice",
    type: "drink",
    avoid: false,
  },
  {
    name: "Rooibos",
    type: "drink",
    avoid: false,
  },
];
