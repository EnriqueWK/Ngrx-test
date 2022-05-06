import { createSelector } from '@ngrx/store';
import { ItemState } from 'src/app/core/models/item.state';
import { AppState } from '../app.state';

//PADRE SELECTOR
export const selectItemFeature = (state: AppState) => state.items;

//HIJO SELECTOR
export const SelectItemList = createSelector(
  selectItemFeature,
  (state: ItemState) => state.items
);

//HIJO SELECTOR
export const SelectLoading = createSelector(
  selectItemFeature,
  (state: ItemState) => state.loading
);
