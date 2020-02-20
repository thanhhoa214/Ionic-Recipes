import { Component, OnInit, Injectable } from "@angular/core";
import { Food } from "src/app/interfaces/Food";
import { HttpClient } from "@angular/common/http";

const FOODS_URL = "assets/mockup-data/foods.json";

@Injectable()
@Component({
  selector: "app-food-picker",
  templateUrl: "./food-picker.component.html",
  styleUrls: ["./food-picker.component.scss"]
})
export class FoodPickerComponent implements OnInit {
  public foods: Food[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(FOODS_URL).subscribe((data: Food[]) => (this.foods = data));
  }
}
