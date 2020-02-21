import { Component, OnInit, Injectable } from "@angular/core";
import { IFood } from "../../interfaces";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

const FOODS_URL = "assets/mockup-data/foods.json";

@Component({
  selector: "app-food-detail",
  templateUrl: "./food-detail.page.html",
  styleUrls: ["./food-detail.page.scss"]
})
export class FoodDetailPage implements OnInit {
  public food: IFood;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.http.get(FOODS_URL).subscribe((data: IFood[]) => {
        this.food = data.find(food => food.id === id);
      });
    });
  }
}
