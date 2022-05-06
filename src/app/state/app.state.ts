import { ActionReducerMap } from "@ngrx/store";
import { ItemState } from "../core/models/item.state";
import { itemsReducer } from "./reducers/items.reducers";

export interface AppState { 
  items: ItemState
}


export const ROOT_REDUCERS: ActionReducerMap<AppState> = { 
  items: itemsReducer
}
