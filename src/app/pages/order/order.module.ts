import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { OrderPageRoutingModule } from "./order-routing.module";

import { OrderPage } from "./order.page";

import { FoodPickerComponent } from "../../components";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    OrderPageRoutingModule
  ],
  declarations: [OrderPage, FoodPickerComponent]
})
export class OrderPageModule {}
