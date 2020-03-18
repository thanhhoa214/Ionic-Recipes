import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { ShoppingService } from "src/app/services/shopping.service";
import {
  GetItemsAction,
  ShoppingActionTypes,
  GetItemsSuccessAction,
  GetItemsFailureAction
} from "../actions/shopping.action";
import { of } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";

@Injectable()
export class ShoppingEffect {
  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}

  @Effect() getShoppingItems$ = this.actions$.pipe(
    ofType<GetItemsAction>(ShoppingActionTypes.GET_ITEMS),
    mergeMap(() =>
      this.shoppingService.getShoppingItems().pipe(
        map(foods => new GetItemsSuccessAction(foods)),
        catchError(error => of(new GetItemsFailureAction(error)))
      )
    )
  );
}
