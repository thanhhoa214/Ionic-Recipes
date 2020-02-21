export interface IFood {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export interface IShoppingCart {
  itemMap: Map<string, number>;
  getTotalPrice: () => Promise<number>;
  checkout?: () => void;
}
