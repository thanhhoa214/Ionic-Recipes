import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../constants";
import { IFood } from "../interfaces";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getFoods(): Promise<IFood[]> {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${API_URL}foods/`)
        .subscribe((data: IFood[]) => resolve(data));
    });
  }

  getFoodById(id: string): Promise<IFood> {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${API_URL}foods/${id}`)
        .subscribe((food: IFood) => resolve(food));
    });
  }
}
