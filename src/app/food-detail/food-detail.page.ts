import { Component, OnInit, Injectable } from "@angular/core";
import { Food } from "../interfaces/Food";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

const FOODS_URL = "assets/mockup-data/foods.json";

@Injectable()
@Component({
  selector: "app-food-detail",
  templateUrl: "./food-detail.page.html",
  styleUrls: ["./food-detail.page.scss"]
})
export class FoodDetailPage implements OnInit {
  public food: Food;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    let id = "";
    this.route.paramMap.subscribe(params => (id = params.get("id")));
    this.http.get(FOODS_URL).subscribe((data: Food[]) => {
      this.food = data.find(food => food.id === id);
    });
  }
}
