import { ItemModel } from "./item.interface";

export interface ItemState{ 
  loading: boolean;
  items: ReadonlyArray<ItemModel>;
}
