import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay } from "rxjs/operators";

import { API_URL } from "../constants";
import { IFood } from "../interfaces";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ShoppingService {
  private SHOPPING_URL: string = `${API_URL}/foods`;

  constructor(private http: HttpClient) {}

  getShoppingItems(): Observable<IFood[]> {
    return this.http.get<IFood[]>(this.SHOPPING_URL).pipe(delay(5000));
  }

  addShoppingItem(food: IFood): Observable<boolean> {
    return this.http.post<boolean>(this.SHOPPING_URL, food).pipe(delay(500));
  }

  deleteShoppingItem(id: string): Observable<boolean> {
    return this.http
      .delete<boolean>(`${this.SHOPPING_URL}/${id}`)
      .pipe(delay(500));
  }
}
