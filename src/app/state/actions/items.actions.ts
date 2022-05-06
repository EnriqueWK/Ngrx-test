import { createAction, props } from "@ngrx/store";
import { ItemModel } from "src/app/core/models/item.interface";
import { types } from "../types/types";

const loadingItems = createAction(
  types.loadingItems
);

const LoadedItems = createAction(
types.loadedItems,
props<{ items: ItemModel[] }>()
)

export {
  loadingItems,
  LoadedItems
}
