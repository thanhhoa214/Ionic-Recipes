import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FoodService } from "./services/food.service";
import ShoppingCartService from "./services/shopping-cart.service";
import { StoreModule } from "@ngrx/store";
import { shoppingReducer } from "./store/reducers/shopping.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { ShoppingEffect } from "./store/effects/shopping.effect";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ shopping: shoppingReducer }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([ShoppingEffect])
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FoodService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
