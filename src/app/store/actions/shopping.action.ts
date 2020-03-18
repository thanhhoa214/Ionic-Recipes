import { Action } from "@ngrx/store";
import { IFood } from "src/app/interfaces";

export enum ShoppingActionTypes {
  ADD_ITEM = "[Shopping] Add Item",
  ADD_ITEM_SUCCESS = "[Shopping] Add Item Success",
  ADD_ITEM_FAILURE = "[Shopping] Add Item Failure",
  GET_ITEMS = "[Shopping] Get Items",
  GET_ITEMS_SUCCESS = "[Shopping] Get Items Success",
  GET_ITEMS_FAILURE = "[Shopping] Get Items Failure",
  DELETE_ITEM = "[Shopping] Delete Item",
  DELETE_ITEM_SUCCESS = "[Shopping] Delete Item Success",
  DELETE_ITEM_FAILURE = "[Shopping] Delete Item Failure"
}

/*************** Action Classes *****************/
export class AddItemAction implements Action {
  readonly type: string = ShoppingActionTypes.ADD_ITEM;

  constructor(public readonly payload: IFood) {}
}

export class GetItemsAction implements Action {
  readonly type: string = ShoppingActionTypes.GET_ITEMS;
}

export class DeleteItemAction implements Action {
  readonly type: string = ShoppingActionTypes.DELETE_ITEM;
  constructor(public readonly id: string) {}
}

/***************** Action Effect Classes ****************/

export class AddItemSuccessAction implements Action {
  readonly type: string = ShoppingActionTypes.ADD_ITEM_SUCCESS;
  constructor(public readonly payload: IFood) {}
}
export class AddItemFailureAction implements Action {
  readonly type: string = ShoppingActionTypes.ADD_ITEM_FAILURE;
  constructor(public readonly error: Error) {}
}

export class GetItemsSuccessAction implements Action {
  readonly type: string = ShoppingActionTypes.GET_ITEMS_SUCCESS;
  constructor(public readonly payload: IFood[]) {}
}
export class GetItemsFailureAction implements Action {
  readonly type: string = ShoppingActionTypes.GET_ITEMS_FAILURE;
  constructor(public readonly error: Error) {}
}

export class DeleteItemSuccessAction implements Action {
  readonly type: string = ShoppingActionTypes.DELETE_ITEM_SUCCESS;
  constructor(public readonly id: string) {}
}
export class DeleteItemFailureAction implements Action {
  readonly type: string = ShoppingActionTypes.DELETE_ITEM_FAILURE;
  constructor(public readonly error: Error) {}
}
export type ShoppingAction =
  | AddItemAction
  | AddItemSuccessAction
  | AddItemFailureAction
  | GetItemsAction
  | GetItemsSuccessAction
  | GetItemsFailureAction
  | DeleteItemAction
  | DeleteItemSuccessAction
  | DeleteItemFailureAction;
