import { IShoppingCart, IFood } from "../interfaces";
import { API_URL } from "../constants";

export default class ShoppingCart implements IShoppingCart {
  itemMap: Map<string, number>;

  constructor() {
    this.itemMap = new Map<string, number>();
  }

  addToCart: (string) => void = id => {
    const keys = Array.from(this.itemMap.keys());
    if (keys.includes(id)) {
      const quantity = this.itemMap.get(id);
      this.itemMap.set(id, quantity + 1);
    } else {
      this.itemMap.set(id, 1);
    }
  };

  getTotalPrice: () => Promise<number> = async () => {
    let total = 0;
    for (const entry of this.itemMap.entries()) {
      const [id, quantity] = entry;
      const res = await fetch(`${API_URL}foods/${id}/`);
      const food = await res.json();
      total += food.price * quantity;
    }
    return Promise.resolve(total);
  };
  checkout?: () => void;
}
