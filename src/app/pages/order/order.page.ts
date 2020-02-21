import { Component, OnInit } from "@angular/core";
import { IFood } from "src/app/interfaces";
import ShoppingCartService from "src/app/services/shopping-cart.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.page.html",
  styleUrls: ["./order.page.scss"]
})
export class OrderPage implements OnInit {
  public foodsInCart: IFood[];

  constructor(private _cartService: ShoppingCartService) {}

  ngOnInit() {
    this._cartService.getFoods().then(foods => (this.foodsInCart = foods));
  }
}
