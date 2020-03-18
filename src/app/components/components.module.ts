import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { FoodPickerComponent } from ".";
import { CommonModule } from "@angular/common";
import { AddFoodComponent } from "./add-food/add-food.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [FoodPickerComponent, AddFoodComponent],
  imports: [CommonModule, FormsModule],
  exports: [FoodPickerComponent, AddFoodComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
