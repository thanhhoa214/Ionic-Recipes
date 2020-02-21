import { Component, OnInit, Input } from "@angular/core";
import { IFood } from "src/app/interfaces";
import ShoppingCartService from "../../services/shopping-cart.service";
@Component({
  selector: "app-food-picker",
  templateUrl: "./food-picker.component.html",
  styleUrls: ["./food-picker.component.scss"]
})
export class FoodPickerComponent implements OnInit {
  @Input() public foods: IFood[];
  // @Input('foods') public other_name_foods: IFood[];

  constructor(private _cartServices: ShoppingCartService) {}

  ngOnInit() {}

  add(event, id) {
    this._cartServices.addToCart(id);
    event.preventDefault();
    event.stopPropagation();
  }
}
