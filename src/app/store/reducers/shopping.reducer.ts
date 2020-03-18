import { IFood } from "src/app/interfaces";
import {
  ShoppingAction,
  ShoppingActionTypes,
  AddItemAction,
  DeleteItemAction,
  GetItemsSuccessAction,
  GetItemsFailureAction
} from "../actions/shopping.action";

export interface ShoppingState {
  data: IFood[];
  loading: boolean;
  error: Error;
}

const initialState: ShoppingState = {
  data: [
    {
      id: "11111",
      title: "Hello World"
    }
  ],
  loading: false,
  error: undefined
};

export function shoppingReducer(
  state: ShoppingState = initialState,
  action: ShoppingAction
): ShoppingState {
  switch (action.type) {
    case ShoppingActionTypes.GET_ITEMS:
      return {
        ...state,
        loading: true
      };
    case ShoppingActionTypes.GET_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: (action as GetItemsSuccessAction).payload
      };
    case ShoppingActionTypes.GET_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: (action as GetItemsFailureAction).error
      };
    case ShoppingActionTypes.ADD_ITEM:
      return {
        ...state,
        data: [...state.data, (action as AddItemAction).payload]
      };
    case ShoppingActionTypes.DELETE_ITEM:
      return {
        ...state,
        data: state.data.filter(
          item => item.id !== (action as DeleteItemAction).id
        )
      };
    default:
      return state;
  }
}
