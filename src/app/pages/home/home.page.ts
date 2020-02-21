import { Component, Injectable } from "@angular/core";
import { IFood } from "src/app/interfaces";
import { Router } from "@angular/router";
import { FoodService } from "../../services/food.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  public foods: IFood[];
  public itemCounter: number;

  constructor(private _foodService: FoodService, private route: Router) {
  }

  ngOnInit() {
    this._foodService.getFoods().then(foos => (this.foods = foos));
  }

  viewCart = () => {
    this.route.navigateByUrl("/my-order");
  };
}
