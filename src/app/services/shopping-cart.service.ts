import { Injectable } from "@angular/core";
import { API_URL } from "../constants";
import { IFood } from "../interfaces";
import { FoodService } from "./food.service";

@Injectable({
  providedIn: "root"
})
export default class ShoppingCartService {
  private itemMap: Map<string, number>;

  constructor(private _foodService: FoodService) {
    this.itemMap = new Map<string, number>();
  }

  public getFoods(): Promise<IFood[]> {
    const foodIds = Array.from(this.itemMap.keys());
    const foodPromises = foodIds.map(id => this._foodService.getFoodById(id));
    const foods = Promise.all(foodPromises);
    return foods;
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
