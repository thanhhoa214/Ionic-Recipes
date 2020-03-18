import { Component, OnInit } from "@angular/core";
import { IFood } from "src/app/interfaces";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import {
  AddItemAction,
  DeleteItemAction,
  GetItemsAction
} from "src/app/store/actions/shopping.action";
import { v4 as uuid } from "uuid";
@Component({
  selector: "app-add-food",
  templateUrl: "./add-food.component.html",
  styleUrls: ["./add-food.component.scss"]
})
export class AddFoodComponent implements OnInit {
  foods: IFood[];
  loading: boolean = false;
  error: Error = undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select(store => store.shopping)
      .subscribe(shopping => {
        this.foods = shopping.data;
        this.loading = shopping.loading;
        this.error = shopping.error;
      });

    this.store.dispatch(new GetItemsAction());
  }

  submit(event) {
    const { title } = event.target;
    const food: IFood = { id: uuid(), title: title.value };

    this.store.dispatch(new AddItemAction(food));
    title.value = "";
  }

  delete(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}
