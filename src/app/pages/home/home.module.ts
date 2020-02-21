import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";
import {
  SearchBarComponent,
  PromotionComponent
} from "../../components";
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild([{ path: "", component: HomePage }])
  ],
  declarations: [
    HomePage,
    SearchBarComponent,
    PromotionComponent
  ]
})
export class HomePageModule {}
