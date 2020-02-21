import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./pages/home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "home",
    loadChildren: () => import("./pages/home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "my-order",
    loadChildren: () =>
      import("./pages/order/order.module").then(m => m.OrderPageModule)
  },
  {
    path: "saved",
    loadChildren: () =>
      import("./pages/saved/saved.module").then(m => m.SavedPageModule)
  },
  {
    path: "me",
    loadChildren: () =>
      import("./pages/profile/profile.module").then(m => m.ProfilePageModule)
  },
  {
    path: 'foods/:id',
    loadChildren: () => import('./pages/food-detail/food-detail.module').then( m => m.FoodDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
